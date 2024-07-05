import BoardBreadcrumb from "@/components/board/board-breadcrumb";
import BoardSearch from "@/components/board/board-search";
import BoardTab from "@/components/board/board-tab";
import BoardTitle from "@/components/board/board-title";
import Paging from "@/components/common/paging";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getBoardTypeEnum, isValidBoardType } from "@/constants/board-type";
import { HOVER_CLASSNAME } from "@/lib/classname-util";
import { yyyymmdd } from "@/lib/time-util";
import { cn } from "@/lib/utils";
import { getBoardItems } from "@/prisma/board.db";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";

type Props = {
  params: {
    board_type?: string;
  };
  searchParams: {
    page?: string;
    search_type?: string;
    keyword?: string;
  };
};

export default async function BoardListPage({
  params: { board_type },
  searchParams: { page: _page = "1", search_type, keyword },
}: Props) {
  const boardType = board_type?.toUpperCase();
  const page = Number(_page);

  if (!boardType || !isValidBoardType(boardType)) {
    return notFound();
  }

  const boardTypeEnum = getBoardTypeEnum(boardType);
  if (!boardTypeEnum) {
    return notFound();
  }

  if (Number.isNaN(page) || page < 1) {
    return redirect(boardTypeEnum.href + "?page=1");
  }

  const { items, totalItemCount, totalPage } = await getBoardItems(
    boardTypeEnum,
    page,
    search_type,
    keyword
  );

  return (
    <>
      <section className={cn("container px-5", "pc lg:mt-24", "mobile mt-20")}>
        <BoardBreadcrumb breadcrumbs={boardTypeEnum.breadcrumbs} />
      </section>

      <BoardTitle boardType={boardTypeEnum} />

      <section className={cn("container mt-20 mb-20 px-5")}>
        <BoardTab boardType={boardTypeEnum} />
        <BoardSearch />

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
                  <TableCell className="text-center">
                    {totalItemCount - i - (page - 1) * 10}
                  </TableCell>
                  <TableCell>
                    <Link
                      href={`${boardTypeEnum.href}/${item.id}`}
                      className={HOVER_CLASSNAME}
                    >
                      {item.title}
                    </Link>
                  </TableCell>
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
                <TableCell colSpan={6} className="text-center">
                  아직 작성된 글이 없습니다.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>

        <div className="mt-16">
          <Paging
            currentPage={page}
            totalPage={totalPage}
            baseUrl={boardTypeEnum.href}
          />
        </div>
      </section>
    </>
  );
}
