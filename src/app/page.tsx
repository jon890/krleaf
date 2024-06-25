import { cn } from "@/lib/utils";
import NavBar from "./navbar";
import { FONT_ONETWOTHREE_RF } from "@/lib/font-util";
import Image from "next/image";

export default function Home() {
  return (
    <main className="h-screen w-screen flex flex-col">
      <NavBar />

      <div className="bg-[url('/images/background/bg_main1.png')] h-[1000px] bg-no-repeat bg-cover">
        <div
          className={cn(
            "container flex flex-col items-end h-[1000px] justify-center",
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

      <section className="mt-20 w-full container">
        <div className="flex flex-row items-baseline gap-5">
          <span className="font-bold text-4xl">
            <strong className="text-krflea_text_primary">주요사업</strong>안내
          </span>
          <span className="font-semibold text-lg">
            한국지방교육행정연구재단의 주요사업 정보를 안내합니다.
          </span>
        </div>

        <div className="mt-11 flex flex-row gap-4 h-[500px]">
          <div className="bg-[url('/images/background/bg_business1.png')] rounded-xl w-[900px] relative">
            <div className="bg-white rounded-tr-3xl rounded-bl-xl w-2/3 absolute bottom-0 left-0 px-12 py-12">
              <h3 className="text-2xl font-bold">
                지방교육행정기관 재정투자사업 투자심사 지원·관리
              </h3>

              <p className="font-medium text-base mt-5">
                학교신설수요를 적정하게 관리하기 위한 중앙투자심사 지원업무,
                학교설립 및 학교 통·폐합 관련 지원사업을 수행하고 있으며,
                시도교육청 업무담당자 전문성 제고를 위하여 국내외 연수, 교육
                등을 지원하고 있습니다.
              </p>

              <div className="flex flex-row gap-[10px]">
                <button className="border-krflea_text_primary border-2 px-4 py-[10px] flex flex-row justify-between items-center mt-12 text-base">
                  재정투자심사 운영·관리
                  <Image
                    src="/images/icons/icon_right_arrow.png"
                    width="14"
                    height="14"
                    alt="right_arrow"
                  />
                </button>

                <button className="border-krflea_text_primary border-2 px-4 py-[10px] flex flex-row justify-between items-center mt-12 text-base">
                  학교설립 및 학교 통·폐합 관련 정책 지원
                  <Image
                    src="/images/icons/icon_right_arrow.png"
                    width="14"
                    height="14"
                    alt="right_arrow"
                  />
                </button>
              </div>
            </div>
          </div>
          <div className="bg-[url('/images/background/bg_business2.png')] rounded-xl flex-1 relative bg-cover bg-center">
            <h3 className="text-white rotate-[270deg] origin-center translate-y-16 text-2xl font-bold">
              교육행정기관 컨설팅및 시스템 운영관리
            </h3>
            <button className="bg-black bg-opacity-30 size-14 flex items-center justify-center absolute bottom-10 rounded-full translate-x-3/4">
              <Image
                src="/images/icons/icon_plus.png"
                width="18"
                height="27"
                alt="plus_icon"
              />
            </button>
          </div>
          <div className="bg-[url('/images/background/bg_business3.png')] rounded-xl flex-1 relative bg-cover bg-center">
            <h3 className="text-white rotate-[270deg] origin-center translate-y-16 text-2xl font-bold">
              타당성 조사
            </h3>
            <button className="bg-black bg-opacity-30 size-14 flex items-center justify-center absolute bottom-10 rounded-full translate-x-3/4">
              <Image
                src="/images/icons/icon_plus.png"
                width="18"
                height="27"
                alt="plus_icon"
              />
            </button>
          </div>
        </div>
      </section>

      {/* TODO */}
      {/* <div className="bg-[#F4F7FF] absolute bottom-0 w-screen h-[900px] -z-10"></div> */}

      <section className="w-full container mt-20 flex flex-row gap-5">
        <article className="flex-1">
          <div>
            <span className="font-bold text-4xl">
              <strong className="text-krflea_text_primary">소셜</strong>미디어
            </span>
          </div>

          <div className="mt-7">
            <iframe
              className="w-full"
              height="300"
              src="https://www.youtube.com/embed/PZkPJG00dzU"
              title="지방교육재정연구원 홍보 동영상"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </article>

        <article className="flex-1">
          <div>
            <span className="font-bold text-4xl">
              <strong className="text-krflea_text_primary">KRFLEA</strong>갤러리
            </span>
          </div>

          <div className="mt-7 flex flex-row gap-3 h-[300px]">
            <div className="flex-1 bg-[url('/images/gallery/gallery1.png')] rounded-xl bg-cover bg-center bg-no-repeat flex justify-end flex-col text-white">
              <div className="mx-6 mb-5">
                <h3 className="text-base font-bold">
                  2024년 학생배치 · 학교설립 담당자 협의회
                </h3>
                <div className="flex flex-row gap-1 mt-1 items-center">
                  <Image
                    className="flex-none h-[10px]"
                    src="/images/icons/icon_clock.png"
                    width="10"
                    height="10"
                    alt="clock"
                  />
                  <span className="font-medium text-sm">2024.06.25</span>
                </div>
              </div>
            </div>
            <div className="flex-1 bg-[url('/images/gallery/gallery2.png')] rounded-xl bg-cover bg-center bg-no-repeat flex justify-end flex-col text-white">
              <div className="mx-6 mb-5">
                <h3 className="text-base font-bold">
                  2024년 학생배치 · 학교설립 담당자 협의회
                </h3>
                <div className="flex flex-row gap-1 mt-1 items-center">
                  <Image
                    className="flex-none h-[10px]"
                    src="/images/icons/icon_clock.png"
                    width="10"
                    height="10"
                    alt="clock"
                  />
                  <span className="font-medium text-sm">2024.06.25</span>
                </div>
              </div>
            </div>
            <div className="flex-1 bg-[url('/images/gallery/gallery3.png')] rounded-xl bg-cover bg-center bg-no-repeat flex justify-end flex-col text-white">
              <div className="mx-6 mb-5">
                <h3 className="text-base font-bold">
                  2024년 학생배치 · 학교설립 담당자 협의회
                </h3>
                <div className="flex flex-row gap-1 mt-1 items-center">
                  <Image
                    className="flex-none h-[10px]"
                    src="/images/icons/icon_clock.png"
                    width="10"
                    height="10"
                    alt="clock"
                  />
                  <span className="font-medium text-sm">2024.06.25</span>
                </div>
              </div>
            </div>
          </div>
        </article>
      </section>

      <section className="w-full container mt-20">
        <div className="max-w-[800px] w-full mx-auto">
          <h2 className={cn("text-5xl ", FONT_ONETWOTHREE_RF.className)}>
            <strong className="text-krflea_text_primary">KRFLEA</strong>는
            모두가 만족하고 모두가 행복한 대한민국 교육의 지도를 만들어갑니다.
          </h2>
        </div>

        <div className="mt-16 flex flex-row gap-6">
          <div className="flex-1 bg-[#F4F6F8] px-10 py-6 gap-8 flex flex-row justify-center items-center rounded-xl">
            <span className="size-24 rounded-full bg-white p-1 inline-block relative">
              <Image src="/images/icons/icon_map.png" fill alt="map" />
            </span>
            <span className="font-bold text-xl text-[#333333]">
              학구도 안내서비스
            </span>
          </div>
          <div className="flex-1 bg-[#F4F6F8] px-10 py-6 gap-8 flex flex-row justify-center items-center rounded-xl">
            <span className="size-24 rounded-full bg-white p-1 inline-block relative">
              <Image src="/images/icons/icon_map2.png" fill alt="map" />
            </span>
            <span className="font-bold text-xl text-[#333333]">
              학구도 안내서비스
            </span>
          </div>
          <div className="flex-1 bg-[#F4F6F8] px-10 py-6 gap-8 flex flex-row justify-center items-center rounded-xl">
            <span className="size-24 rounded-full bg-white p-1 inline-block relative">
              <Image src="/images/icons/icon_map3.png" fill alt="map" />
            </span>
            <span className="font-bold text-xl text-[#333333]">
              학구도 안내서비스
            </span>
          </div>
        </div>
      </section>

      <section className="w-full container mt-20 py-7">
        <div className="w-full flex flex-row gap-20">
          <Image
            className="flex-1"
            src="/images/logo/business_logo1.png"
            width="0"
            height="48"
            sizes="100vw"
            alt="business_logo"
          />
          <Image
            className="flex-1"
            src="/images/logo/business_logo1.png"
            width="0"
            height="48"
            sizes="100vw"
            alt="business_logo"
          />
          <Image
            className="flex-1"
            src="/images/logo/business_logo1.png"
            width="0"
            height="48"
            sizes="100vw"
            alt="business_logo"
          />
          <Image
            className="flex-1"
            src="/images/logo/business_logo1.png"
            width="0"
            height="48"
            sizes="100vw"
            alt="business_logo"
          />
          <Image
            className="flex-1"
            src="/images/logo/business_logo1.png"
            width="0"
            height="48"
            sizes="100vw"
            alt="business_logo"
          />
          <Image
            className="flex-1"
            src="/images/logo/business_logo1.png"
            width="0"
            height="48"
            sizes="100vw"
            alt="business_logo"
          />
          <Image
            className="flex-1"
            src="/images/logo/business_logo1.png"
            width="0"
            height="48"
            sizes="100vw"
            alt="business_logo"
          />
        </div>
      </section>

      <footer className="w-full bg-[#212B4E] py-10">
        <div className="container">
          <div className="flex flex-row justify-between items-center">
            <Image
              src="/images/logo/logo_white.png"
              width="338"
              height="53"
              alt="logo_white"
            />

            <div className="flex flex-row text-white text-base gap-[10px]">
              <div className="bg-krflea_text_primary rounded-3xl px-5 py-3">
                개인정보처리방침
              </div>
              <div className="border rounded-3xl px-5 py-3 border-opacity-30">
                저작권 보호정책
              </div>
              <div className="border rounded-3xl px-5 py-3 border-opacity-30">
                이메일 무단수집 거부
              </div>
              <div className="border rounded-3xl px-5 py-3 border-opacity-30">
                사이트맵
              </div>
            </div>
          </div>

          <div className="h-[1px] bg-white bg-opacity-30 my-8"></div>

          <div className="flex flex-col">
            <p className="text-base text-[#A0A8C2]">
              (30130) 세종특별자치시 한누리대로 193, 참미르빌딩 8층
              한국지방교육행정연구재단
            </p>
            <p className="text-base text-[#A0A8C2]">FAX : 044-550-5299</p>
            <p className="text-base text-[#A0A8C2]">Email : kilef@cju.ac.kr</p>
            <p className="mt-4 text-base text-[#677195]">
              Copyright 2024 KRFLEA All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
