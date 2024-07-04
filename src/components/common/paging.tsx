import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

type Props = {
  totalPage: number;
  currentPage: number;
  baseUrl: string;
};

export default function Paging({ currentPage, totalPage, baseUrl }: Props) {
  const pageUnit = 10;
  const startPage = Math.floor(currentPage / pageUnit) * pageUnit;
  const pages = Array(10)
    .fill(undefined)
    .map((_, index) => startPage + index + 1)
    .filter((page) => page <= totalPage);

  return (
    <Pagination>
      <PaginationContent>
        {currentPage > 1 && (
          <PaginationItem>
            <PaginationPrevious href={`${baseUrl}?page=${currentPage - 1}`} />
          </PaginationItem>
        )}

        {pages.map((page) => (
          <PaginationItem key={page}>
            <PaginationLink
              href={`${baseUrl}?page=${page}`}
              isActive={page === currentPage ? true : false}
            >
              {page}
            </PaginationLink>
          </PaginationItem>
        ))}

        {currentPage < totalPage && (
          <PaginationItem>
            <PaginationNext href={`${baseUrl}?page=${currentPage + 1}`} />
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  );
}
