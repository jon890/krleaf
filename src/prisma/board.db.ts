import { BoardType } from "@/constants/board-type";
import prisma from "./prisma.client";

export function getBoardItem(boardType: string, boardId: number) {
  return prisma.board.findUnique({
    where: {
      boardType,
      id: boardId,
    },
  });
}

export async function getBoardItemWithPrevNext(
  boardType: string,
  boardId: number
) {
  const item = await prisma.board.findUnique({
    where: {
      boardType,
      id: boardId,
    },
  });

  if (!item) return null;

  const nextItem = await prisma.board.findFirst({
    select: {
      id: true,
      title: true,
      createdAt: true,
    },
    where: {
      boardType,
      id: {
        gt: boardId,
      },
    },
    take: 1,
  });

  const prevItem = await prisma.board.findFirst({
    select: {
      id: true,
      title: true,
      createdAt: true,
    },
    where: {
      boardType,
      id: {
        lt: boardId,
      },
    },
    take: 1,
  });

  return {
    item,
    nextItem,
    prevItem,
  };
}

export async function getBoardItems(
  boardType: BoardType,
  page: number,
  searchType?: string,
  keyword?: string
) {
  const unit = 10;

  let searchCriteria = {};
  if (searchType && keyword) {
    switch (searchType) {
      case "title":
        searchCriteria = {
          title: { contains: keyword },
        };
        break;
      case "content":
        searchCriteria = {
          content: { contains: keyword },
        };
        break;
    }
  }

  const boardItems = await prisma.board.findMany({
    select: {
      id: true,
      title: true,
      createdAt: true,
    },
    where: {
      boardType: boardType.code,
      ...searchCriteria,
    },
    skip: (page - 1) * unit,
    take: unit,
    orderBy: {
      createdAt: "desc",
    },
  });

  const totalItemCount = await prisma.board.count({
    where: {
      boardType: boardType.code,
      ...searchCriteria,
    },
  });

  return {
    items: boardItems,
    totalItemCount,
    totalPage: Math.floor(totalItemCount / unit) + 1,
  };
}
