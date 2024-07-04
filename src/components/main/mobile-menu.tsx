"use client";

import useWindowSize from "@/hooks/use-window-size";
import Image from "next/image";
import Divider from "../common/divider";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from "../ui/drawer";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
} from "@/components/ui/accordion";
import { AccordionTrigger } from "../ui/accordion";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { HOVER_CLASSNAME } from "@/lib/classname-util";

export default function MobileMenu() {
  const { isMobile } = useWindowSize();

  return (
    isMobile && (
      <Drawer direction="right">
        <DrawerTrigger
          className="ml-6 sm:ml-12 border-[#BBBBBB] border-2 rounded-2xl p-2 cursor-pointer
  group"
        >
          <Image
            src="/images/icons/icon_sitemap.png"
            width="34"
            height="34"
            alt="icon_sitemap"
            className="group-hover:opacity-50 group-active:opacity-50 transition-opacity"
          />
        </DrawerTrigger>

        <DrawerContent className="w-3/4 py-10">
          <div className="bg-white flex-1 h-auto">
            <div className="flex flex-row items-center pl-10">
              <Image
                src="/images/logo/logo_mobile_menu.png"
                alt="logo"
                width={0}
                height={0}
                sizes="100vw"
                priority
                className="w-2/3 h-[30px]"
              />
              <DrawerClose className="flex-none ml-auto mr-3 p-5">
                <Image
                  src="/images/icons/icon_x.png"
                  width="21"
                  height="21"
                  alt="icon_x"
                />
              </DrawerClose>
            </div>

            <Divider className="mt-4" />

            <div className="py-6 px-8">
              <div className="border-[#BBBBBB] border-2 rounded-3xl flex flex-row gap-3 justify-center items-center py-3 px-4">
                <MagnifyingGlassIcon className="size-7" />
                <input
                  type="text"
                  placeholder="검색어를 입력해주세요"
                  className="placeholder:text-[#AAAAAA] placeholder:font-bold placeholder:text-sm bg-transparent"
                />
              </div>
            </div>

            <Divider />

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1" className="">
                <AccordionTrigger className="font-bold text-2xl data-[state=open]:text-krflea_text_primary mx-6">
                  주요사업
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="*:font-semibold *:text-xl *:py-1 bg-[#F8F8F8] px-6 py-8">
                    <li>사업소개</li>
                    <li>
                      지방교육행정기관 재정투자사업 투자심사 지원 · 관리
                      <ul className="*:text-base *:before:w-[5px] *:before:h-[5px] *:before:rounded-full *:before:bg-black *:before:inline-block *:before:mx-1 *:font-normal *:py-1">
                        <li>재정투자심사 운영ㆍ관리</li>
                        <li>지방교육행정기관 설립 정책 지원</li>
                      </ul>
                    </li>
                    <li>
                      교육행정기관 컨설팅 및 시스템 운영관리
                      <ul className="*:text-base *:before:w-[5px] *:before:h-[5px] *:before:rounded-full *:before:bg-black *:before:inline-block *:before:mx-1 *:font-normal *:py-1">
                        <li>교육행정기관 설립 컨설팅 </li>
                        <li>학교설립 담당업무 교육지원 프로그램 운영 </li>
                        <li>학생배치 · 학교설립 지원시스템 운영 · 관리 </li>
                        <li>학구도 정보시스템 운영 · 관리</li>
                      </ul>
                    </li>
                    <li>지방교육행정기관 타당성 조사</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="">
                <AccordionTrigger className="font-bold text-2xl data-[state=open]:text-krflea_text_primary mx-6">
                  KRFLEA 소식
                </AccordionTrigger>
                <AccordionContent>
                  <ul
                    className={cn(
                      "*:font-semibold *:text-xl *:py-1 bg-[#F8F8F8] px-6 py-8"
                    )}
                  >
                    <li className={HOVER_CLASSNAME}>
                      <Link href="/board/notice">공지사항</Link>
                    </li>
                    <li className={HOVER_CLASSNAME}>
                      <Link href="/board/recruit">채용정보</Link>
                    </li>
                    <li className={HOVER_CLASSNAME}>
                      <Link href="/board/bidding">입찰공고</Link>
                    </li>
                    <li className={HOVER_CLASSNAME}>
                      <Link href="/board/gallery">갤러리</Link>
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="">
                <AccordionTrigger className="font-bold text-2xl data-[state=open]:text-krflea_text_primary mx-6">
                  정보자료
                </AccordionTrigger>
                <AccordionContent>
                  <ul
                    className={cn(
                      "*:font-semibold *:text-xl *:py-1 bg-[#F8F8F8] px-6 py-8"
                    )}
                  >
                    <li className={HOVER_CLASSNAME}>
                      <Link href="/#">정보시스템</Link>
                    </li>
                    <li className={HOVER_CLASSNAME}>
                      <Link href="/board/legal">법령자료</Link>
                    </li>
                    <li className={HOVER_CLASSNAME}>
                      <Link href="/board/press">보도자료</Link>
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="">
                <AccordionTrigger className="font-bold text-2xl data-[state=open]:text-krflea_text_primary mx-6">
                  KRFLEA 소개
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="*:font-semibold *:text-xl *:py-1 bg-[#F8F8F8] px-6 py-8">
                    <li>사업소개</li>
                    <li>
                      지방교육행정기관 재정투자사업 투자심사 지원 · 관리
                      <ul className="*:text-base *:before:w-[5px] *:before:h-[5px] *:before:rounded-full *:before:bg-black *:before:inline-block *:before:mx-1 *:font-normal *:py-1">
                        <li>재정투자심사 운영ㆍ관리</li>
                        <li>지방교육행정기관 설립 정책 지원</li>
                      </ul>
                    </li>
                    <li>
                      교육행정기관 컨설팅 및 시스템 운영관리
                      <ul className="*:text-base *:before:w-[5px] *:before:h-[5px] *:before:rounded-full *:before:bg-black *:before:inline-block *:before:mx-1 *:font-normal *:py-1">
                        <li>교육행정기관 설립 컨설팅 </li>
                        <li>학교설립 담당업무 교육지원 프로그램 운영 </li>
                        <li>학생배치 · 학교설립 지원시스템 운영 · 관리 </li>
                        <li>학구도 정보시스템 운영 · 관리</li>
                      </ul>
                    </li>
                    <li>지방교육행정기관 타당성 조사</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </DrawerContent>
      </Drawer>
    )
  );
}
