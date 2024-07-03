"use client";

import { cn } from "@/lib/utils";
import MainBoardTitle from "./MainBoardTitle";
import MainBoardTab from "./MainBoardTab";
import { Board } from "@prisma/client";
import { BoardType, getBoardTypeEnum } from "@/constants/board-type";
import { Fragment, useState } from "react";
import Link from "next/link";
import dayjs from "dayjs";
import { yyyymmdd } from "@/lib/time-util";

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
            <Fragment key={board.id}>
              <li className="flex flex-row justify-start items-center">
                <span
                  className={cn(
                    "rounded-xl py-1 px-4 text-base font-bold",
                    board.boardType === "NOTICE"
                      ? "bg-[#DEE8FF] text-[#2F5BC1]"
                      : "",
                    board.boardType === "RECRUIT"
                      ? "bg-[#E5E5E5] text-[#333333]"
                      : "",
                    board.boardType === "BIDDING"
                      ? "bg-[#FFE6A3] text-[#5F4500]"
                      : "",
                    board.boardType === "LEGAL"
                      ? "bg-white text-krflea_text_primary"
                      : "",
                    board.boardType === "PRESS" ? "bg-white text-[#333333]" : ""
                  )}
                >
                  {getBoardTypeEnum(board.boardType)?.text?.substring(0, 2)}
                </span>
                <Link
                  href={`/board/${board.boardType.toLowerCase()}/${board.id}`}
                  className="ml-2 text-base flex-1 overflow-hidden whitespace-nowrap text-ellipsis hover:opacity-50 active:opacity-50 transition-opacity"
                >
                  {board.title}
                </Link>
                <span className="ml-auto text-[#AAAAAA] text-base font-medium">
                  {yyyymmdd(board.createdAt)}
                </span>
              </li>

              {index !== visibleItems.length - 1 && (
                <li className="h-[1px] border-dotted border border-[#DDDDDD] my-5" />
              )}
            </Fragment>
          ))
        ) : (
          <li>아직 작성된 글이 없습니다.</li>
        )}
      </ul>
    </article>
  );
}
