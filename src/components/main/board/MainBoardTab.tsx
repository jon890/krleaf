"use client";

import { BoardType } from "@/constants/board-type";
import { cn } from "@/lib/utils";
import { useState } from "react";

type Props = {
  tabActiveColor?: string;
  tabs: BoardType[];
  onSelectTab?: (tab: BoardType) => void;
};

export default function MainBoardTab({
  tabActiveColor,
  tabs,
  onSelectTab,
}: Props) {
  const [active, setActive] = useState<BoardType>(tabs[0]);

  return (
    <ul className="flex flex-row gap-2 lg:gap-4">
      {tabs.map((tab, index) => (
        <>
          <li
            key={tab.code}
            className={cn(
              "font-bold xl:text-xl lg:text-lg text-sm cursor-pointer",
              active.code === tab.code
                ? `underline-offset-8 underline ${tabActiveColor ?? ""}`
                : "text-[#AAAAAA]"
            )}
            onClick={() => {
              setActive(tab);
              onSelectTab?.(tab);
            }}
          >
            {tab.text}
          </li>
          {index !== tabs.length - 1 && <li>/</li>}
        </>
      ))}
    </ul>
  );
}
