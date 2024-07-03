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
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  getBoardTypeEnum,
  getCommonBoardTypes,
  isValidBoardType,
} from "@/constants/board-type";
import { cn } from "@/lib/utils";
import { TabsContent } from "@radix-ui/react-tabs";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

type Props = {
  params: {
    board_type?: string;
  };
};
export default function BoardListPage({ params: { board_type } }: Props) {
  const boardType = board_type?.toUpperCase();

  if (!boardType || !isValidBoardType(boardType)) {
    return notFound();
  }

  const boardTypeEnum = getBoardTypeEnum(boardType);
  if (!boardTypeEnum) {
    return notFound();
  }

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
          <SelectBox />
          <input
            type="text"
            placeholder="검색어를 입력해주세요"
            className="w-[432px] bg-white rounded-md border border-[#DDDDDD] px-8 py-3 placeholder:text-xl"
          />
          <button className="font-bold text-xl px-8 py-3 text-white bg-krflea_text_primary rounded-md">
            검색
          </button>
        </div>

        <div className="mt-16">
          <p className="text-base">
            총 <strong className="text-krflea_text_primary">514</strong>건 (
            <strong className="text-krflea_text_primary">1</strong> / 52 페이지)
          </p>
        </div>

        <Table className="mt-5">
          {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
          <TableHeader>
            <TableRow className="*:bg-[#E2E9FF] *:outline *:outline-1 *:outline-[#EEEEEE] *:text-center">
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
                <TableRow key={i} className="*:border *:border-[#EEEEEE]">
                  <TableCell className="text-center">{10 - i}</TableCell>
                  <TableCell>지방교육재정연구원 매거진 edumoa vol.6</TableCell>
                  <TableCell className="text-center"></TableCell>
                  <TableCell className="text-center">관리자</TableCell>
                  <TableCell className="text-center">2024-04-05</TableCell>
                  <TableCell className="text-center">480</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>

        <div className="mt-16"></div>
      </section>
    </>
  );
}
