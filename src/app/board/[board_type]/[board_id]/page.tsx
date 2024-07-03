import BoardBreadcrumb from "@/components/board/board-breadcrumb";
import SelectBox from "@/components/common/select-box";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  getBoardTypeEnum,
  getCommonBoardTypes,
  isValidBoardType,
} from "@/constants/board-type";
import { cn } from "@/lib/utils";
import { getBoardItem } from "@/prisma/board.db";
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

  const boardItem = await getBoardItem(boardType, boardId);
  console.log(boardItem);

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

      <section
        className={cn(
          "container px-10",
          "pc lg:my-[100px]",
          "mobile my-[80px]"
        )}
      >
        <Table>
          {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
          <TableHeader>
            <TableRow>
              <TableHead>번호</TableHead>
              <TableHead>제목</TableHead>
              <TableHead>첨부</TableHead>
              <TableHead>작성자</TableHead>
              <TableHead>날짜</TableHead>
              <TableHead>조회</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {Array(10)
              .fill(undefined)
              .map((_, i) => (
                <TableRow key={i}>
                  <TableCell>{10 - i}</TableCell>
                  <TableCell>지방교육재정연구원 매거진 edumoa vol.6</TableCell>
                  <TableCell>지방교육재정연구원 매거진 edumoa vol.6</TableCell>
                  <TableCell>관리자</TableCell>
                  <TableCell>2024-04-05</TableCell>
                  <TableCell>480</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </section>
    </>
  );
}
