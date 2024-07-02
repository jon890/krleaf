import prisma from "./prisma.client";

export function getBoardItem(boardType: string, boardId: number) {
  return prisma.board.findUnique({
    where: {
      boardType,
      id: boardId,
    },
  });
}
