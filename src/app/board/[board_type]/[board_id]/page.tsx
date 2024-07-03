import BoardBreadcrumb from "@/components/board/board-breadcrumb";
import Divider from "@/components/common/divider";
import {
  getBoardTypeEnum,
  getCommonBoardTypes,
  isValidBoardType,
} from "@/constants/board-type";
import { yyyymmdd } from "@/lib/time-util";
import { cn } from "@/lib/utils";
import { getBoardItemWithPrevNext } from "@/prisma/board.db";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

type Props = {
  params: {
    board_type?: string;
    board_id?: string;
  };
};

export default async function BoardListPage({
  params: { board_type, board_id },
}: Props) {
  const boardId = Number(board_id);
  const boardType = board_type?.toUpperCase();

  if (!boardType || !isValidBoardType(boardType) || Number.isNaN(boardId)) {
    return notFound();
  }

  const boardTypeEnum = getBoardTypeEnum(boardType);
  if (!boardTypeEnum) {
    return notFound();
  }

  const boardItem = await getBoardItemWithPrevNext(boardType, boardId);
  if (!boardItem) {
    return notFound();
  }

  const { item, nextItem, prevItem } = boardItem;

  return (
    <>
      <section
        className={cn("container px-5", "pc lg:mt-[100px]", "mobile mt-[80px]")}
      >
        <BoardBreadcrumb breadcrumbs={boardTypeEnum.breadcrumbs} />
      </section>

      <section className="w-screen mt-5 relative">
        <Image
          src="/images/background/bg_notice.png"
          width={0}
          height={0}
          sizes="100vw"
          alt="bg_notice"
          className="w-full object-cover"
        />

        <p className="font-bold text-5xl absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          {boardTypeEnum.text}
        </p>
      </section>

      <section className={cn("container mt-[71px] px-5")}>
        <div className="w-full relative">
          <ul className="w-full flex flex-row gap-16">
            {getCommonBoardTypes(boardTypeEnum).map((it) => (
              <li
                key={it.code}
                className={cn(
                  "font-semibold text-xl",
                  it.code === boardTypeEnum.code
                    ? "text-krflea_text_primary underline underline-offset-[16px] decoration-krflea_text_primary decord"
                    : ""
                )}
              >
                <Link href={it.href}>{it.text}</Link>
              </li>
            ))}
          </ul>
          <div className="absolute w-full bg-[#E5E5E5] h-[2px] -bottom-[11px] -z-10"></div>
        </div>
      </section>

      <section className={cn("container px-5 mt-[71px] mb-[150px]")}>
        <h2 className="text-[27px] font-bold">{item.title}</h2>
        <div className="flex flex-row gap-12 py-5">
          <div className="flex flex-row gap-3">
            <span className="font-medium text-base">작성자</span>
            <span className="font-normal text-base text-[#888888]">관리자</span>
          </div>
          <div className="flex flex-row gap-3">
            <span className="font-medium text-base">등록일</span>
            <span className="font-normal text-base text-[#888888]">
              {yyyymmdd(item.createdAt)}
            </span>
          </div>
          <div className="flex flex-row gap-3">
            <span className="font-medium text-base">조회수</span>
            <span className="font-normal text-base text-[#888888]">99</span>
          </div>
        </div>

        <Divider className="!bg-black" />

        <div
          dangerouslySetInnerHTML={{ __html: item.content }}
          className="py-12"
        />

        <Divider className="!bg-[#E5E5E5]" />
        <div className="flex flex-col">
          {prevItem && (
            <>
              <div className="py-5 flex flex-row gap-12">
                <span className="font-medium text-base">이전글</span>
                <Link
                  href={`${boardTypeEnum.href}/${prevItem.id}`}
                  className="text-base font-normal text-[#555555] hover:opacity-50 active:opacity-50 transition-opacity"
                >
                  {prevItem.title}
                </Link>
                <span className="flex-none ml-auto text-base font-normal text-[#555555]">
                  {yyyymmdd(prevItem.createdAt)}
                </span>
              </div>
              <Divider className="!bg-[#E5E5E5]" />
            </>
          )}

          {nextItem && (
            <>
              <div className="py-5 flex flex-row gap-12">
                <span className="font-medium text-base">다음글</span>
                <Link
                  href={`${boardTypeEnum.href}/${nextItem.id}`}
                  className="text-base font-normal text-[#555555] hover:opacity-50 active:opacity-50 transition-opacity"
                >
                  {nextItem.title}
                </Link>
                <span className="flex-none ml-auto text-base font-normal text-[#555555]">
                  {yyyymmdd(nextItem.createdAt)}
                </span>
              </div>
              <Divider className="!bg-[#E5E5E5]" />
            </>
          )}
        </div>

        <div className="w-full flex justify-center mt-[71px]">
          <Link
            href={boardTypeEnum.href}
            className={cn(
              "px-28 bg-white py-4",
              "rounded-3xl border-krflea_text_primary border", // border
              "font-bold text-xl text-krflea_text_primary", // font
              "hover:opacity-50 active:opacity-50 transition-opacity"
            )}
          >
            목록
          </Link>
        </div>
      </section>
    </>
  );
}
