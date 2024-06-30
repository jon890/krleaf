"use client";

import useWindowSize from "@/hooks/use-window-size";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useState } from "react";
import Divider from "../common/divider";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/navigation";

export default function PcMenu() {
  const [visibleMenu, setVisibleMenu] = useState(false);
  const router = useRouter();

  const { isMobile } = useWindowSize();
  if (isMobile) return null;

  function toggleMenu() {
    setVisibleMenu((prev) => !prev);
  }

  function movePage(event: React.SyntheticEvent, url: string) {
    event.preventDefault();
    setVisibleMenu(false);
    router.push(url);
  }

  return (
    <>
      <ul className="flex-row gap-16 justify-center text-xl md:text-base hidden md:flex">
        <li>
          <button
            onClick={() => toggleMenu()}
            className="hover:text-gray-500 active:text-gray-500 transition-colors"
          >
            주요사업
          </button>
        </li>
        <li>
          <button
            onClick={() => toggleMenu()}
            className="hover:text-gray-500 active:text-gray-500 transition-colors"
          >
            KRFLEA 소식
          </button>
        </li>
        <li>
          <button
            onClick={() => toggleMenu()}
            className="hover:text-gray-500 active:text-gray-500 transition-colors"
          >
            정보자료
          </button>
        </li>
        <li>
          <button
            onClick={() => toggleMenu()}
            className="hover:text-gray-500 active:text-gray-500 transition-colors"
          >
            KRFLEA 소개
          </button>
        </li>
      </ul>

      <div
        className={cn(
          "absolute -bottom-[478px] w-full bg-white shadow-xl",
          visibleMenu ? "block" : "hidden"
        )}
      >
        <Divider />

        <div className="container h-full w-full pt-5 pb-10 flex flex-row gap-5">
          <div>
            <div className="flex flex-row gap-1 items-center justify-start">
              <span className="font-bold text-base text-[#AAAAAA]">
                주요사업
              </span>
              <ChevronRightIcon className="size-[10px] text-[#AAAAAA]" />
            </div>

            <div className="border-krflea_box_border border mt-3 rounded-md">
              <ul className="*:font-semibold *:text-[18px] *:py-1 px-6 py-6">
                <li>사업소개</li>
                <li>
                  지방교육행정기관 재정투자사업 투자심사 지원 · 관리
                  <ul className="*:text-base *:before:w-[5px] *:before:h-[5px] *:before:rounded-full *:before:bg-black *:before:inline-block *:before:mx-2 *:font-normal *:py-1">
                    <li>재정투자심사 운영ㆍ관리</li>
                    <li>지방교육행정기관 설립 정책 지원</li>
                  </ul>
                </li>
                <li>
                  교육행정기관 컨설팅 및 시스템 운영관리
                  <ul className="*:text-base *:before:w-[5px] *:before:h-[5px] *:before:rounded-full *:before:bg-black *:before:inline-block *:before:mx-2 *:font-normal *:py-1">
                    <li>교육행정기관 설립 컨설팅 </li>
                    <li>학교설립 담당업무 교육지원 프로그램 운영 </li>
                    <li>학생배치 · 학교설립 지원시스템 운영 · 관리 </li>
                    <li>학구도 정보시스템 운영 · 관리</li>
                  </ul>
                </li>
                <li>지방교육행정기관 타당성 조사</li>
              </ul>
            </div>
          </div>

          <div>
            <div className="flex flex-row gap-1 items-center justify-start">
              <span className="font-bold text-base text-[#AAAAAA]">
                KRFLEA 소식
              </span>
              <ChevronRightIcon className="size-[10px] text-[#AAAAAA]" />
            </div>

            <div className="border-krflea_box_border border mt-3 rounded-md min-w-[270px]">
              <ul className="*:font-semibold *:text-[18px] *:py-1 px-6 py-6 flex flex-col items-center">
                <li>
                  <Link
                    href="/notice"
                    onClick={(event) => movePage(event, "/notice")}
                    className="hover:opacity-50 active:opacity-50 transition-opacity"
                  >
                    공지사항
                  </Link>
                </li>
                <li>
                  <Link
                    href="/recruit"
                    onClick={(event) => movePage(event, "/recruit")}
                    className="hover:opacity-50 active:opacity-50 transition-opacity"
                  >
                    채용정보
                  </Link>
                </li>
                <li>
                  <Link
                    href="/bidding"
                    onClick={(event) => movePage(event, "/bidding")}
                    className="hover:opacity-50 active:opacity-50 transition-opacity"
                  >
                    입찰공고
                  </Link>
                </li>
                <li>
                  <Link
                    href="/gallery"
                    onClick={(event) => movePage(event, "/gallery")}
                    className="hover:opacity-50 active:opacity-50 transition-opacity"
                  >
                    갤러리
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <div className="flex flex-row gap-1 items-center justify-start">
              <span className="font-bold text-base text-[#AAAAAA]">
                정보자료
              </span>
              <ChevronRightIcon className="size-[10px] text-[#AAAAAA]" />
            </div>

            <div className="border-krflea_box_border border mt-3 rounded-md min-w-[270px]">
              <ul className="*:font-semibold *:text-[18px] *:py-1 px-6 py-6 flex flex-col items-center">
                <li>정보시스템</li>
                <li>법령자료</li>
                <li>보도자료</li>
              </ul>
            </div>
          </div>

          <div>
            <div className="flex flex-row gap-1 items-center justify-start">
              <span className="font-bold text-base text-[#AAAAAA]">
                KRFLEA 소개
              </span>
              <ChevronRightIcon className="size-[10px] text-[#AAAAAA]" />
            </div>

            <div className="border-krflea_box_border border mt-3 rounded-md min-w-[270px]">
              <ul className="*:font-semibold *:text-[18px] *:py-1 px-6 py-6 flex flex-col items-center">
                <li>소개</li>
                <li>연혁</li>
                <li>조직 및 업부</li>
                <li>로고 소개</li>
                <li>찾아오시는 길</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
