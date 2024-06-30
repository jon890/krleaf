import { cn } from "@/lib/utils";

export default function MainBoard() {
  return (
    <section
      className={cn(
        "w-full container flex px-4",
        "pc lg:mt-20 lg:gap-4 lg:flex-row",
        "mobile mt-14 gap-10 flex-col"
      )}
    >
      <article
        className={cn(
          "border-krflea_box_border border py-10 flex-1 rounded-xl flex flex-col",
          "pc lg:px-8",
          "mobile px-6"
        )}
      >
        <div
          className={cn(
            "flex items-center",
            "pc lg:flex-row lg:justify-start",
            "mobile flex-col justify-center gap-6"
          )}
        >
          <MainBoardTitle title={"KRFLEA 소식"} />
          <MainBoardTab />
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
          <li className="h-[1px] border-dotted border border-[#DDDDDD] my-5 hidden xl:block"></li>
          <li className="flex-row justify-start items-center hidden xl:flex">
            <span className="bg-[#E5E5E5] rounded-xl py-1 px-4 text-base font-bold text-[#333333]">
              채용
            </span>
            <span className="ml-2 text-base flex-1 overflow-hidden whitespace-nowrap text-ellipsis">
              2024년 지방교육재정연구원 1차 정규직 연구원 채용 공고
            </span>
            <span className="ml-auto">2024.06.25</span>
          </li>
          <li className="h-[1px] border-dotted border border-[#DDDDDD] my-5 hidden xl:block"></li>
          <li className="flex-row justify-start items-center hidden xl:flex">
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

      <MainBoardArticle />
    </section>
  );
}

function MainBoardTitle({ title }: { title: string }) {
  return (
    <h2
      className={cn(
        "flex-none font-bold",
        "pc lg:mr-auto lg:text-3xl",
        "mobile mx-auto text-2xl"
      )}
    >
      {title}
    </h2>
  );
}

function MainBoardTab({ type = 1 }: { type?: 1 | 2 }) {
  return (
    <ul className="flex flex-row xl:gap-10 gap-2">
      <li
        className={cn(
          "font-bold xl:text-xl text-sm underline underline-offset-8",
          type === 2 ? "decoration-[#2F5BC1]" : ""
        )}
      >
        전체
      </li>
      <li className="text-[#AAAAAA]">/</li>
      <li className="font-bold xl:text-xl text-sm text-krflea_text_disabled">
        공지사항
      </li>
      <li className="text-[#AAAAAA]">/</li>
      <li className="font-bold xl:text-xl text-sm text-krflea_text_disabled">
        채용정보
      </li>
      <li className="text-[#AAAAAA]">/</li>
      <li className="font-bold xl:text-xl text-sm text-krflea_text_disabled">
        입찰공고
      </li>
    </ul>
  );
}

function MainBoardArticle() {
  return (
    <article
      className={cn(
        "border-krflea_box_border border py-10 flex-1 rounded-xl flex flex-col",
        "bg-[#ECF0F5]",
        "pc lg:px-8",
        "mobile px-6"
      )}
    >
      <div
        className={cn(
          "flex items-center",
          "pc lg:flex-row lg:justify-start",
          "mobile flex-col justify-center gap-6"
        )}
      >
        <MainBoardTitle title={"정보자료"} />
        <MainBoardTab type={2} />
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
        <li className="h-[1px] border-dotted border border-[#DDDDDD] my-5 hidden xl:block"></li>
        <li className="flex-row justify-start items-center hidden xl:flex">
          <span className="bg-[#FFFFFF] rounded-xl py-1 px-4 text-base font-bold text-[#333333]">
            보도
          </span>
          <span className="ml-2 text-base flex-1 overflow-hidden whitespace-nowrap text-ellipsis">
            ‘함께차담회’, 현장 의견을 정책에 담는다 논의된 과제 54건(66%...
          </span>
          <span className="ml-auto">2024.06.25</span>
        </li>
        <li className="h-[1px] border-dotted border border-[#DDDDDD] my-5 hidden xl:block"></li>
        <li className="flex-row justify-start items-center hidden xl:flex">
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
  );
}
