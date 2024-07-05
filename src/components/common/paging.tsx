"use client";

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { url } from "inspector";
import { useSearchParams } from "next/navigation";

type Props = {
  totalPage: number;
  currentPage: number;
  baseUrl: string;
};

export default function Paging({ currentPage, totalPage, baseUrl }: Props) {
  const searchParmas = useSearchParams();

  const pageUnit = 10;
  const startPage = Math.floor(currentPage / pageUnit) * pageUnit;
  const pages = Array(10)
    .fill(undefined)
    .map((_, index) => startPage + index + 1)
    .filter((page) => page <= totalPage);

  function getSearchParamsWithoutPage() {
    const urlSearchParams = new URLSearchParams(searchParmas);
    urlSearchParams.delete("page");
    return urlSearchParams.toString();
  }

  return (
    <Pagination>
      <PaginationContent>
        {currentPage > 1 && (
          <PaginationItem>
            <PaginationPrevious
              href={`${baseUrl}?${getSearchParamsWithoutPage()}&page=${
                currentPage - 1
              }`}
            />
          </PaginationItem>
        )}

        {pages.map((page) => (
          <PaginationItem key={page}>
            <PaginationLink
              href={`${baseUrl}?${getSearchParamsWithoutPage()}&page=${page}`}
              isActive={page === currentPage ? true : false}
            >
              {page}
            </PaginationLink>
          </PaginationItem>
        ))}

        {currentPage < totalPage && (
          <PaginationItem>
            <PaginationNext
              href={`${baseUrl}?${getSearchParamsWithoutPage()}&page=${
                currentPage + 1
              }`}
            />
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  );
}
