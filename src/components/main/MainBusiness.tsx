import Image from "next/image";

export default function MainBusiness() {
  return (
    <section className="mt-20 container px-4">
      <div className="flex flex-row items-end gap-5">
        <span className="font-bold xl:text-4xl text-2xl min-w-[33%]">
          <strong className="text-krflea_text_primary">주요사업</strong>안내
        </span>
        <span className="font-semibold xl:text-lg text-sm">
          한국지방교육행정연구재단의 주요사업 정보를 안내합니다.
        </span>
      </div>

      {/* PC , Tablet */}
      <div className="mt-11 xl:flex flex-row gap-4 h-[500px] hidden">
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
      <div className="mt-11 flex flex-col gap-4 xl:hidden">
        <div className="bg-[url('/images/background/bg_business1.png')] rounded-xl w-full relative bg-cover bg-center h-[200px]"></div>

        <div className="bg-[url('/images/background/bg_business2.png')] rounded-xl relative bg-cover bg-center h-[200px] flex flex-row justify-between items-center px-12">
          <h3 className="text-white xl:text-2xl text-xl font-bold">
            교육행정기관 컨설팅및 시스템 운영관리
          </h3>

          <button className="bg-black bg-opacity-30 size-14 flex items-center justify-center bottom-10 rounded-full min-w-[56px]">
            <Image
              src="/images/icons/icon_plus.png"
              width="18"
              height="27"
              alt="plus_icon"
            />
          </button>
        </div>

        <div className="bg-[url('/images/background/bg_business3.png')] rounded-xl relative bg-cover bg-center h-[200px] flex flex-row justify-between items-center px-12">
          <h3 className="text-white xl:text-2xl text-xl font-bold">
            타당성 조사
          </h3>

          <button className="bg-black bg-opacity-30 size-14 flex items-center justify-center bottom-10 rounded-full">
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
  );
}
