import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { TabsContent } from "@radix-ui/react-tabs";

export default function NoticePage() {
  return (
    <>
      <section
        className={cn(
          "container px-10",
          "pc lg:mt-[100px]",
          "mobile mt-[80px]"
        )}
      >
        <h1 className="mt-20 text-3xl font-bold">채용정보</h1>

        <Breadcrumb className="mt-10">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">홈</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />

            <BreadcrumbItem>KRFLEA 소식</BreadcrumbItem>
            <BreadcrumbSeparator />

            <BreadcrumbItem>
              <BreadcrumbLink href="/gallery">채용정보</BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <h2 className="mt-10 text-2xl font-semibold">KRFLEA 소식</h2>
        <p className="mt-5 text-xl font-normal">
          KRFLEA의 다양한 소식 정보를 만나보실 수 있습니다.
        </p>

        <Tabs defaultValue="notice" className="w-[400px]">
          <TabsList>
            <TabsTrigger value="notice">공지사항</TabsTrigger>
            <TabsTrigger value="recruit">채용정보</TabsTrigger>
            <TabsTrigger value="bidding">입찰정보</TabsTrigger>
            <TabsTrigger value="gallery">갤러리</TabsTrigger>
          </TabsList>

          <TabsContent value="notice">공지사항</TabsContent>
          <TabsContent value="recruit">채용정보</TabsContent>
          <TabsContent value="bidding">입찰정보</TabsContent>
          <TabsContent value="gallery">갤러리</TabsContent>
        </Tabs>
      </section>

      <section
        className={cn(
          "container px-10",
          "pc lg:mb-[100px]",
          "mobile mb-[80px]"
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
