import { cn } from "@/lib/utils";
import NavBar from "./navbar";
import { FONT_ONETWOTHREE_RF } from "@/lib/font-util";
import Image from "next/image";
import MainBoard from "@/components/main/MainBoard";
import MainBusiness from "@/components/main/MainBusiness";
import Footer from "@/components/main/Footer";

export default function Home() {
  return (
    <main className="w-screen flex flex-col relative">
      <NavBar />

      <div className="w-full bg-[url('/images/background/bg_main1.png')] bg-center bg-no-repeat bg-cover h-screen">
        <div
          className={cn(
            "container flex flex-col items-end h-full justify-center",
            FONT_ONETWOTHREE_RF.className
          )}
        >
          <h1 className="text-[#2F5BC1] xl:text-6xl text-3xl">KRFLEA</h1>
          <h1 className="xl:text-6xl text-3xl mb-6">
            한국지방교육행정연구재단
          </h1>

          <h2 className="xl:text-2xl text-base">
            안정적 교육환경의 토대를 마련하고 건전하고
            <br /> 생산적인 교육재정 운영에 기여합니다.
          </h2>
        </div>
      </div>

      <MainBoard />
      <MainBusiness />

      {/* TODO */}
      {/* <div className="bg-[#F4F7FF] absolute bottom-0 w-screen h-[900px] -z-10"></div> */}

      <section className="container mt-20 flex xl:flex-row xl:gap-5 flex-col px-4 gap-10">
        <article className="flex-1">
          <div>
            <span className="font-bold xl:text-4xl text-2xl">
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
            <span className="font-bold text-2xl xl:text-4xl">
              <strong className="text-krflea_text_primary">KRFLEA</strong>갤러리
            </span>
          </div>

          <div className="mt-7 flex xl:flex-row flex-col gap-3 xl:h-[300px]">
            <div className="flex-1 bg-[url('/images/gallery/gallery1.png')] rounded-xl bg-cover bg-center bg-no-repeat flex justify-end flex-col text-white py-10 xl:py-0">
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

            <div className="flex-1 bg-[url('/images/gallery/gallery2.png')] rounded-xl bg-cover bg-center bg-no-repeat flex justify-end flex-col text-white py-10 xl:py-0">
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

            <div className="flex-1 bg-[url('/images/gallery/gallery3.png')] rounded-xl bg-cover bg-center bg-no-repeat flex justify-end flex-col text-white py-10 xl:py-0">
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

      <section className="container mt-20 px-4">
        <div className="max-w-[600px] lg:max-w-[800px] w-full mx-auto">
          <h2
            className={cn(
              "text-2xl xl:text-5xl ",
              FONT_ONETWOTHREE_RF.className
            )}
          >
            <strong className="text-krflea_text_primary">KRFLEA</strong>는
            모두가 만족하고 모두가 행복한 대한민국 교육의 지도를 만들어갑니다.
          </h2>
        </div>

        <div className="mt-16 flex flex-row gap-6 w-full flex-wrap">
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

      <section className="container mt-20 py-7 px-4">
        <div className="w-full flex flex-row gap-20 flex-wrap">
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

      <Footer />
    </main>
  );
}
