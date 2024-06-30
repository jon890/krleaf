import { cn } from "@/lib/utils";
import Image from "next/image";

export default function MainBusiness() {
  return (
    <section
      className={cn("container px-4", "pc lg:mt-20", "mobile mt-14 relative")}
    >
      <div
        className={cn(
          "flex flex-row items-end gap-5",
          "pc lg:justify-start",
          "mobile justify-center"
        )}
      >
        <span className={cn("font-bold", "pc xl:text-4xl", "moile text-3xl")}>
          <strong className="text-krflea_text_primary">주요사업</strong>안내
        </span>

        <span
          className={cn(
            "font-semibold",
            "pc lg:inline lg:text-lg",
            "mobile hidden"
          )}
        >
          한국지방교육행정연구재단의 주요사업 정보를 안내합니다.
        </span>
      </div>

      {/* PC , Tablet */}
      <div className="mt-11 lg:flex flex-row gap-4 h-[500px] hidden">
        <div className="bg-[url('/images/background/bg_business1.png')] rounded-xl w-[900px] relative">
          <div className="bg-white rounded-tr-3xl rounded-bl-xl w-2/3 absolute bottom-0 left-0 px-12 py-12">
            <h3 className="text-2xl font-bold">
              지방교육행정기관 재정투자사업 투자심사 지원·관리
            </h3>

            <p className="font-medium text-base mt-5">
              학교신설수요를 적정하게 관리하기 위한 중앙투자심사 지원업무,
              학교설립 및 학교 통·폐합 관련 지원사업을 수행하고 있으며,
              시도교육청 업무담당자 전문성 제고를 위하여 국내외 연수, 교육 등을
              지원하고 있습니다.
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

      {/* Mobile */}
      <div className="mt-5 flex flex-col gap-4 lg:hidden">
        <div className="bg-[url('/images/background/bg_business1.png')] rounded-xl w-full relative bg-cover bg-center h-[550px]">
          <div className="bg-white rounded-tr-3xl rounded-bl-xl w-full absolute bottom-0 left-0 px-8 py-10">
            <h3 className="text-2xl font-bold text-center">
              지방교육행정기관 재정투자사업 투자심사 지원·관리
            </h3>

            <p className="font-medium text-base mt-5">
              학교신설수요를 적정하게 관리하기 위한 중앙투자심사 지원업무,
              학교설립 및 학교 통·폐합 관련 지원사업을 수행하고 있으며,
              시도교육청 업무담당자 전문성 제고를 위하여 국내외 연수, 교육 등을
              지원하고 있습니다.
            </p>

            <div className="flex flex-col gap-[10px] mt-5">
              <button className="font-bold text-krflea_text_primary border-krflea_text_primary border-2 px-4 py-[10px] flex flex-row justify-between items-center text-base">
                재정투자심사 운영·관리
                <Image
                  src="/images/icons/icon_right_arrow.png"
                  width="14"
                  height="14"
                  alt="right_arrow"
                />
              </button>

              <button className="font-bold text-krflea_text_primary border-krflea_text_primary border-2 px-4 py-[10px] flex flex-row justify-between items-center text-base">
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

        <div className="bg-[url('/images/background/bg_business2.png')] rounded-xl relative bg-cover bg-center h-[200px] flex flex-row justify-between items-center px-12">
          <button className="bg-black bg-opacity-30 size-14 flex items-center justify-center bottom-10 rounded-full min-w-[56px]">
            <Image
              src="/images/icons/icon_plus.png"
              width="18"
              height="27"
              alt="plus_icon"
            />
          </button>
          <h3 className="text-white text-2xl font-bold max-w-[50%]">
            교육행정기관 컨설팅및 시스템 운영관리
          </h3>
        </div>

        <div className="bg-[url('/images/background/bg_business3.png')] rounded-xl relative bg-cover bg-center h-[200px] flex flex-row justify-between items-center px-12">
          <button className="bg-black bg-opacity-30 size-14 flex items-center justify-center bottom-10 rounded-full">
            <Image
              src="/images/icons/icon_plus.png"
              width="18"
              height="27"
              alt="plus_icon"
            />
          </button>

          <h3 className="text-white text-2xl font-bold">타당성 조사</h3>
        </div>
      </div>

      <div className="lg:hidden bg-[#F4F7FF] absolute bottom-0 w-full h-2/3 -z-10 left-0"></div>
    </section>
  );
}
