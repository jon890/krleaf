import { BoardType } from "@/constants/board-type";
import { cn } from "@/lib/utils";
import prisma from "@/prisma/prisma.client";
import { Board } from "@prisma/client";
import MainBoardArticle from "./board/MainBoardArticle";

async function getBoardItems(boardTypes: string[]) {
  const boardMap = new Map<string, Board[]>();
  const allBoardItems: Board[] = [];

  for (const boardType of boardTypes) {
    const boardItems = await prisma.board.findMany({
      where: {
        boardType: boardType,
      },
      orderBy: {
        createdAt: "desc",
      },
      take: 5,
    });
    boardMap.set(boardType, boardItems);
    allBoardItems.push(...boardItems);
  }
  boardMap.set("ALL", allBoardItems);

  return boardMap;
}

export default async function MainBoard() {
  const targetBoardTypes = [
    BoardType.NOTICE,
    BoardType.RECRUIT,
    BoardType.BIDDING,
  ];

  const targetBoardTypes2 = [BoardType.LEGAL, BoardType.PRESS];

  const boardItems = await getBoardItems(targetBoardTypes.map((it) => it.code));
  const boardItems2 = await getBoardItems(
    targetBoardTypes2.map((it) => it.code)
  );

  return (
    <section
      className={cn(
        "w-full container flex px-4",
        "pc lg:mt-20 lg:gap-4 lg:flex-row",
        "mobile mt-14 gap-10 flex-col"
      )}
    >
      <MainBoardArticle
        title="KRFLEA 소식"
        boardItems={boardItems}
        tabs={[
          {
            code: "ALL",
            text: "전체",
            breadcrumbs: [],
            group: "krleaf_news",
            href: "/",
          },
          ...targetBoardTypes,
        ]}
      />
      <MainBoardArticle
        title="정보자료"
        backgroundColor="bg-[#ECF0F5]"
        tabActiveColor="decoration-[#2F5BC1]"
        boardItems={boardItems2}
        tabs={[
          {
            code: "ALL",
            text: "전체",
            breadcrumbs: [],
            group: "information",
            href: "/",
          },
          ...targetBoardTypes2,
        ]}
      />
    </section>
  );
}
