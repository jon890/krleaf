import BoardBreadcrumb from "@/components/board/board-breadcrumb";
import SelectBox from "@/components/common/select-box";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { BoardSearchTypes } from "@/constants/board-search-type";
import {
  getBoardTypeEnum,
  getCommonBoardTypes,
  isValidBoardType,
} from "@/constants/board-type";
import { yyyymmdd } from "@/lib/time-util";
import { cn } from "@/lib/utils";
import { getBoardItems } from "@/prisma/board.db";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

type Props = {
  params: {
    board_type?: string;
  };
};

export default async function BoardListPage({ params: { board_type } }: Props) {
  const boardType = board_type?.toUpperCase();

  if (!boardType || !isValidBoardType(boardType)) {
    return notFound();
  }

  const boardTypeEnum = getBoardTypeEnum(boardType);
  if (!boardTypeEnum) {
    return notFound();
  }

  const { items, page, totalItemCount, totalPage } = await getBoardItems(
    boardTypeEnum,
    1
  );

  return (
    <>
      <section className={cn("container px-5", "pc lg:mt-24", "mobile mt-20")}>
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

      <section className={cn("container mt-20 mb-20 px-5")}>
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

        {/* 검색 */}
        <div className="mt-10 bg-[#F7F8FB] w-full rounded-md flex flex-row py-10 justify-center items-center gap-[9px]">
          <SelectBox values={BoardSearchTypes} />
          <input
            type="text"
            placeholder="검색어를 입력해주세요"
            className="text-base w-[432px] bg-white rounded-md border border-[#DDDDDD] px-8 py-3 placeholder:text-base"
          />
          <button className="font-bold text-base px-8 py-3 text-white bg-krflea_text_primary rounded-md">
            검색
          </button>
        </div>

        <div className="mt-16">
          <p className="text-base">
            총{" "}
            <strong className="text-krflea_text_primary">
              {totalItemCount}
            </strong>
            건 (<strong className="text-krflea_text_primary">{page}</strong> /{" "}
            {totalPage} 페이지)
          </p>
        </div>

        <Table className="mt-5">
          <TableHeader>
            <TableRow className="*:bg-[#E2E9FF] *:outline *:outline-1 *:outline-[#EEEEEE] *:text-center *:font-bold *:text-black">
              <TableHead>번호</TableHead>
              <TableHead>제목</TableHead>
              <TableHead>첨부파일</TableHead>
              <TableHead>작성자</TableHead>
              <TableHead>날짜</TableHead>
              <TableHead>조회</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {items.length > 0 ? (
              items.map((item, i) => (
                <TableRow key={i} className="*:border *:border-[#EEEEEE]">
                  <TableCell className="text-center">{page * 10 - i}</TableCell>
                  <TableCell>{item.title}</TableCell>
                  <TableCell className="text-center"></TableCell>
                  <TableCell className="text-center">관리자</TableCell>
                  <TableCell className="text-center">
                    {yyyymmdd(item.createdAt)}
                  </TableCell>
                  <TableCell className="text-center">480</TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={6}></TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>

        <div className="mt-16">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="1">1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="1">2</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="1">3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </section>
    </>
  );
}
