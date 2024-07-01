"use client";

import { cn } from "@/lib/utils";
import MainBoardTitle from "./MainBoardTitle";
import MainBoardTab from "./MainBoardTab";
import { Board } from "@prisma/client";
import { BoardType } from "@/constants/board-type";
import { useState } from "react";

type Props = {
  title: string;
  backgroundColor?: string;
  tabActiveColor?: string;
  tabs: BoardType[];
  boardItems: Map<string, Board[]>;
};

export default function MainBoardArticle({
  title,
  backgroundColor,
  tabs,
  boardItems,
}: Props) {
  const [visibleItems, setVisibleItems] = useState<Board[]>(
    boardItems.get("ALL") ?? []
  );

  function handleChangeTab(tab: BoardType) {
    const targetItems = boardItems.get(tab.code);

    console.log(
      "selected tab",
      tab,
      "targetItems",
      targetItems,
      "boardItems",
      boardItems
    );
    setVisibleItems(targetItems ?? []);
  }

  return (
    <article
      className={cn(
        "border-krflea_box_border border py-10 flex-1 rounded-xl flex flex-col",
        "pc lg:px-8",
        "mobile px-6",
        backgroundColor ?? ""
      )}
    >
      <div
        className={cn(
          "flex items-center",
          "pc lg:flex-row lg:justify-start",
          "mobile flex-col justify-center gap-6"
        )}
      >
        <MainBoardTitle title={title} />
        <MainBoardTab tabs={tabs} onSelectTab={handleChangeTab} />
      </div>

      <ul className="mt-11">
        {visibleItems.length > 0 ? (
          visibleItems.map((board, index) => (
            <>
              <li
                key={board.id}
                className="flex flex-row justify-start items-center"
              >
                <span className="bg-[#DEE8FF] rounded-xl py-1 px-4 text-base font-bold text-[#2F5BC1]">
                  {board.boardType}
                </span>
                <span className="ml-2 text-base flex-1 overflow-hidden whitespace-nowrap text-ellipsis">
                  {board.title}
                </span>
                <span className="ml-auto">{board.createdAt.toISOString()}</span>
              </li>

              {index !== visibleItems.length - 1 && (
                <li className="h-[1px] border-dotted border border-[#DDDDDD] my-5" />
              )}
            </>
          ))
        ) : (
          <li>아직 작성된 글이 없습니다.</li>
        )}
      </ul>
    </article>
  );
}
