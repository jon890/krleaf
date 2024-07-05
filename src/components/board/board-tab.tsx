import { BoardType, getCommonBoardTypes } from "@/constants/board-type";
import { HOVER_CLASSNAME } from "@/lib/classname-util";
import { cn } from "@/lib/utils";
import Link from "next/link";

type Props = {
  boardType: BoardType;
};

export default function BoardTab({ boardType }: Props) {
  return (
    <div className="w-full relative">
      <ul className="w-full flex flex-row gap-16">
        {getCommonBoardTypes(boardType).map((it) => (
          <li
            key={it.code}
            className={cn(
              "font-semibold lg:text-xl text-lg",
              it.code === boardType.code
                ? "text-krflea_text_primary underline underline-offset-[16px] decoration-krflea_text_primary decord"
                : ""
            )}
          >
            <Link href={it.href} className={HOVER_CLASSNAME}>
              {it.text}
            </Link>
          </li>
        ))}
      </ul>
      <div className="absolute w-full bg-[#E5E5E5] h-[2px] -bottom-[11px] -z-10"></div>
    </div>
  );
}
