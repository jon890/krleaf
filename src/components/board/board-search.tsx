"use client";

import { BoardSearchTypes } from "@/constants/board-search-type";
import SelectBox from "../common/select-box";
import { cn } from "@/lib/utils";
import { HOVER_CLASSNAME } from "@/lib/classname-util";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useRef, useState } from "react";

export default function BoardSearch() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const inputRef = useRef<HTMLInputElement>(null);

  const [searchType, setSearchType] = useState<string | undefined>();

  function onChangeSearchType(value: { code: string; text: string }) {
    setSearchType(value.code);
  }

  function onClickSearch() {
    if (!searchType) {
      alert("검색 조건을 선택해주세요");
      return;
    }

    const keyword = inputRef.current?.value;
    if (!keyword) {
      alert("검색어를 입력해주세요");
      inputRef?.current?.focus();
      return;
    }

    const urlSearchParams = new URLSearchParams(searchParams.toString());
    urlSearchParams.set("page", "1");
    urlSearchParams.set("search_type", searchType);
    urlSearchParams.set("keyword", keyword);
    router.push(`${pathname}?${urlSearchParams.toString()}`);
  }

  return (
    <div className="mt-10 bg-[#F7F8FB] w-full rounded-md flex flex-row py-10 justify-center items-center gap-[9px]">
      <SelectBox
        values={BoardSearchTypes}
        onChangeValue={onChangeSearchType}
        defaultValue={searchParams.get("search_type") ?? undefined}
      />
      <input
        type="text"
        placeholder="검색어를 입력해주세요"
        className="text-base w-[432px] bg-white rounded-md border border-[#DDDDDD] px-3 py-3 placeholder:text-base"
        ref={inputRef}
        defaultValue={searchParams.get("keyword") ?? ""}
      />
      <button
        className={cn(
          "font-bold text-base px-8 py-3 text-white bg-krflea_text_primary rounded-md",
          HOVER_CLASSNAME
        )}
        onClick={onClickSearch}
      >
        검색
      </button>
    </div>
  );
}
