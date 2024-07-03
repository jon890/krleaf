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
