import Footer from "@/components/main/Footer";
import MainBoard from "@/components/main/MainBoard";
import MainBusiness from "@/components/main/MainBusiness";
import MainCarousel from "@/components/main/MainCarousel";
import { FONT_ONETWOTHREE_RF } from "@/lib/font-util";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <MainCarousel />
      <MainBoard />
      <MainBusiness />

      <section
        className={cn(
          "container flex px-4 relative",
          "pc lg:flex-row lg:gap-5 lg:pt-20",
          "mobile flex-col gap-10 pt-14"
        )}
      >
        <article className="flex-1">
          <div className="text-center lg:text-start">
            <span
              className={cn("font-bold", "pc lg:text-4xl", "mobile text-3xl")}
            >
              <strong className="text-krflea_text_primary">소셜</strong>미디어
            </span>
          </div>

          <div className="mt-5">
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
          <div className="text-center lg:text-start">
            <span
              className={cn("font-bold", "pc lg:text-4xl", "mobile text-3xl")}
            >
              <strong className="text-krflea_text_primary">KRFLEA</strong>갤러리
            </span>
          </div>

          <div
            className={cn(
              "mt-5 flex gap-3",
              "pc lg:flex-row",
              "mobile flex-col"
            )}
          >
            <div
              className={cn(
                "flex-1 bg-[url('/images/gallery/gallery1.png')] rounded-xl bg-cover bg-center bg-no-repeat flex justify-end flex-col text-white",
                "pc",
                "mobile aspect-[2/1]"
              )}
            >
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

            <div
              className={cn(
                "flex-1 bg-[url('/images/gallery/gallery2.png')] rounded-xl bg-cover bg-center bg-no-repeat flex justify-end flex-col text-white",
                "pc",
                "mobile aspect-[2/1]"
              )}
            >
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

            <div
              className={cn(
                "flex-1 bg-[url('/images/gallery/gallery3.png')] rounded-xl bg-cover bg-center bg-no-repeat flex justify-end flex-col text-white",
                "pc",
                "mobile aspect-[2/1]"
              )}
            >
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

        <div className="lg:hidden bg-[#F4F7FF] absolute bottom-0 w-full h-full -z-10 left-0"></div>
      </section>

      <section className="container mt-20 px-4">
        <div className="max-w-[75%] lg:max-w-[800px] w-full mx-auto">
          <h2
            className={cn(
              "pc lg:text-5xl",
              "mobile text-2xl",
              FONT_ONETWOTHREE_RF.className
            )}
          >
            <strong className="text-krflea_text_primary">KRFLEA</strong>는
            모두가 만족하고 모두가 행복한 대한민국 교육의 지도를 만들어갑니다.
          </h2>
        </div>

        <div
          className={cn(
            "mt-16 flex gap-6 w-full flex-wrap",
            "pc lg:flex-row",
            "mobile flex-col"
          )}
        >
          <div
            className={cn(
              "flex-1 bg-[#F4F6F8] px-10 py-6 gap-8 flex flex-row items-center rounded-xl",
              "pc lg:justify-center",
              "mobile justify-between"
            )}
          >
            <span className="size-24 rounded-full bg-white p-1 inline-block relative">
              <Image src="/images/icons/icon_map.png" fill alt="map" />
            </span>
            <span className="font-bold text-xl text-[#333333]">
              학구도 안내서비스
            </span>
          </div>

          <div
            className={cn(
              "flex-1 bg-[#F4F6F8] px-10 py-6 gap-8 flex flex-row items-center rounded-xl",
              "pc lg:justify-center",
              "mobile justify-between"
            )}
          >
            <span className="size-24 rounded-full bg-white p-1 inline-block relative">
              <Image src="/images/icons/icon_map2.png" fill alt="map" />
            </span>
            <span className="font-bold text-xl text-[#333333]">
              학구도 관리시스템
            </span>
          </div>

          <div
            className={cn(
              "flex-1 bg-[#F4F6F8] px-10 py-6 gap-8 flex flex-row items-center rounded-xl",
              "pc lg:justify-center",
              "mobile justify-between"
            )}
          >
            <span className="size-24 rounded-full bg-white p-1 inline-block relative">
              <Image src="/images/icons/icon_map3.png" fill alt="map" />
            </span>
            <span className="font-bold text-xl text-[#333333]">
              학생배치·학교설립 지원시스템
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
    </>
  );
}
