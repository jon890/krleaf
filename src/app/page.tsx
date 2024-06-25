import { cn } from "@/lib/utils";
import NavBar from "./navbar";
import { FONT_ONETWOTHREE_RF } from "@/lib/font-util";

export default function Home() {
  return (
    <main className="h-screen w-screen flex flex-col">
      <NavBar />

      <div className="bg-[url('/images/background/bg_main1.png')] h-[1000px] bg-no-repeat bg-cover flex flex-col justify-center items-center">
        <div
          className={cn(
            "container flex flex-col items-end",
            FONT_ONETWOTHREE_RF.className
          )}
        >
          <h1 className="text-[#2F5BC1] text-6xl">KRFLEA</h1>
          <h1 className="text-6xl mb-6">한국지방교육행정연구재단</h1>

          <h2 className="text-2xl">
            안정적 교육환경의 토대를 마련하고 건전하고
            <br /> 생산적인 교육재정 운영에 기여합니다.
          </h2>
        </div>
      </div>

      <section className="w-full container mt-20 flex flex-row gap-4">
        <article className="border-krflea_border border px-8 py-10 flex-1 rounded-xl flex flex-col">
          <div className="flex flex-row items-center">
            <h2 className="flex-none mr-auto text-3xl font-bold">
              KRFLEA 소식
            </h2>
            <ul className="flex flex-row gap-10">
              <li className="font-bold text-xl underline underline-offset-8">
                전체
              </li>
              <li className="font-bold text-xl text-krflea_text_disabled">
                공지사항
              </li>
              <li className="font-bold text-xl text-krflea_text_disabled">
                채용정보
              </li>
              <li className="font-bold text-xl text-krflea_text_disabled">
                입찰공고
              </li>
            </ul>
          </div>

          <ul className="mt-11">
            <li className="flex flex-row justify-start items-center">
              <span className="bg-[#DEE8FF] rounded-xl py-1 px-4 text-base font-bold text-[#2F5BC1]">
                공지
              </span>
              <span className="ml-2 text-base flex-1 overflow-hidden whitespace-nowrap text-ellipsis">
                지방교육재정연구원 매거진 EDUMOA vol.6
              </span>
              <span className="ml-auto">2024.06.25</span>
            </li>
            <li className="h-[1px] border-dotted border border-[#DDDDDD] my-5"></li>
            <li className="flex flex-row justify-start items-center">
              <span className="bg-[#DEE8FF] rounded-xl py-1 px-4 text-base font-bold text-[#2F5BC1]">
                공지
              </span>
              <span className="ml-2 text-base flex-1 overflow-hidden whitespace-nowrap text-ellipsis">
                지방교육재정연구원 매거진 EDUMOA vol.5
              </span>
              <span className="ml-auto">2024.06.25</span>
            </li>
            <li className="h-[1px] border-dotted border border-[#DDDDDD] my-5"></li>
            <li className="flex flex-row justify-start items-center">
              <span className="bg-[#DEE8FF] rounded-xl py-1 px-4 text-base font-bold text-[#2F5BC1]">
                공지
              </span>
              <span className="ml-2 text-base flex-1 overflow-hidden whitespace-nowrap text-ellipsis">
                2023년도 시·도교육청 업무담당자 역량강화 직무연수(4회차)...
              </span>
              <span className="ml-auto">2024.06.25</span>
            </li>
            <li className="h-[1px] border-dotted border border-[#DDDDDD] my-5"></li>
            <li className="flex flex-row justify-start items-center">
              <span className="bg-[#E5E5E5] rounded-xl py-1 px-4 text-base font-bold text-[#333333]">
                채용
              </span>
              <span className="ml-2 text-base flex-1 overflow-hidden whitespace-nowrap text-ellipsis">
                2024년 지방교육재정연구원 1차 정규직 연구원 채용 합격자 발...
              </span>
              <span className="ml-auto">2024.06.25</span>
            </li>
            <li className="h-[1px] border-dotted border border-[#DDDDDD] my-5"></li>
            <li className="flex flex-row justify-start items-center">
              <span className="bg-[#E5E5E5] rounded-xl py-1 px-4 text-base font-bold text-[#333333]">
                채용
              </span>
              <span className="ml-2 text-base flex-1 overflow-hidden whitespace-nowrap text-ellipsis">
                2024년 지방교육재정연구원 1차 정규직 연구원 채용 공고
              </span>
              <span className="ml-auto">2024.06.25</span>
            </li>
            <li className="h-[1px] border-dotted border border-[#DDDDDD] my-5"></li>
            <li className="flex flex-row justify-start items-center">
              <span className="bg-[#FFE6A3] rounded-xl py-1 px-4 text-base font-bold text-[#5F4500]">
                공고
              </span>
              <span className="ml-2 text-base flex-1 overflow-hidden whitespace-nowrap text-ellipsis">
                [재공고] 2024년 제5차 민간참여 공공주택건설사업 민간사업...
              </span>
              <span className="ml-auto">2024.06.25</span>
            </li>
          </ul>
        </article>

        <article className="bg-[#ECF0F5] px-8 py-10 flex-1 rounded-xl flex flex-col">
          <div className="flex flex-row items-center">
            <h2 className="flex-none mr-auto text-3xl font-bold">정보자료</h2>
            <ul className="flex flex-row gap-10">
              <li className="font-bold text-xl underline underline-offset-8 decoration-[#2F5BC1]">
                전체
              </li>
              <li className="font-bold text-xl text-krflea_text_disabled">
                공지사항
              </li>
              <li className="font-bold text-xl text-krflea_text_disabled">
                채용정보
              </li>
              <li className="font-bold text-xl text-krflea_text_disabled">
                입찰공고
              </li>
            </ul>
          </div>

          <ul className="mt-11">
            <li className="flex flex-row justify-start items-center">
              <span className="bg-[#FFFFFF] rounded-xl py-1 px-4 text-base font-bold text-[#2F5BC1]">
                법령
              </span>
              <span className="ml-2 text-base flex-1 overflow-hidden whitespace-nowrap text-ellipsis">
                교원의 지위 향상 및 교육활동 보호를 위한 특별법 시행령 일부개...
              </span>
              <span className="ml-auto">2024.06.25</span>
            </li>
            <li className="h-[1px] border-dotted border border-[#DDDDDD] my-5"></li>
            <li className="flex flex-row justify-start items-center">
              <span className="bg-[#FFFFFF] rounded-xl py-1 px-4 text-base font-bold text-[#2F5BC1]">
                법령
              </span>
              <span className="ml-2 text-base flex-1 overflow-hidden whitespace-nowrap text-ellipsis">
                교원의 지위 향상 및 교육활동 보호를 위한 특별법 시행령 일부개...
              </span>
              <span className="ml-auto">2024.06.25</span>
            </li>
            <li className="h-[1px] border-dotted border border-[#DDDDDD] my-5"></li>
            <li className="flex flex-row justify-start items-center">
              <span className="bg-[#FFFFFF] rounded-xl py-1 px-4 text-base font-bold text-[#2F5BC1]">
                법령
              </span>
              <span className="ml-2 text-base flex-1 overflow-hidden whitespace-nowrap text-ellipsis">
                교원의 지위 향상 및 교육활동 보호를 위한 특별법 시행령 일부개...
              </span>
              <span className="ml-auto">2024.06.25</span>
            </li>
            <li className="h-[1px] border-dotted border border-[#DDDDDD] my-5"></li>
            <li className="flex flex-row justify-start items-center">
              <span className="bg-[#FFFFFF] rounded-xl py-1 px-4 text-base font-bold text-[#333333]">
                보도
              </span>
              <span className="ml-2 text-base flex-1 overflow-hidden whitespace-nowrap text-ellipsis">
                ‘함께차담회’, 현장 의견을 정책에 담는다 논의된 과제 54건(66%...
              </span>
              <span className="ml-auto">2024.06.25</span>
            </li>
            <li className="h-[1px] border-dotted border border-[#DDDDDD] my-5"></li>
            <li className="flex flex-row justify-start items-center">
              <span className="bg-[#FFFFFF] rounded-xl py-1 px-4 text-base font-bold text-[#333333]">
                보도
              </span>
              <span className="ml-2 text-base flex-1 overflow-hidden whitespace-nowrap text-ellipsis">
                ‘함께차담회’, 현장 의견을 정책에 담는다 논의된 과제 54건(66%...
              </span>
              <span className="ml-auto">2024.06.25</span>
            </li>
            <li className="h-[1px] border-dotted border border-[#DDDDDD] my-5"></li>
            <li className="flex flex-row justify-start items-center">
              <span className="bg-[#FFFFFF] rounded-xl py-1 px-4 text-base font-bold text-[#5F4500]">
                보도
              </span>
              <span className="ml-2 text-base flex-1 overflow-hidden whitespace-nowrap text-ellipsis">
                ‘함께차담회’, 현장 의견을 정책에 담는다 논의된 과제 54건(66%...
              </span>
              <span className="ml-auto">2024.06.25</span>
            </li>
          </ul>
        </article>
      </section>
    </main>
  );
}
