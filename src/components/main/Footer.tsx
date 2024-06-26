import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-[#212B4E] py-10">
      <div className="container px-4">
        <div className="flex flex-row justify-between items-center">
          <Image
            src="/images/logo/logo_white.png"
            width="338"
            height="53"
            alt="logo_white"
            className="max-w-[200px] xl:max-w-[338px]"
          />

          <div className="flex xl:flex-row text-white text-base gap-[10px] flex-col">
            <div className="bg-krflea_text_primary rounded-3xl px-5 py-3 text-xs xl:text-base">
              개인정보처리방침
            </div>
            <div className="border rounded-3xl px-5 py-3 border-opacity-30 text-xs xl:text-base">
              저작권 보호정책
            </div>
            <div className="border rounded-3xl px-5 py-3 border-opacity-30 text-xs xl:text-base">
              이메일 무단수집 거부
            </div>
            <div className="border rounded-3xl px-5 py-3 border-opacity-30 text-xs xl:text-base">
              사이트맵
            </div>
          </div>
        </div>

        <div className="h-[1px] bg-white bg-opacity-30 my-8"></div>

        <div className="flex flex-col">
          <p className="text-sm xl:text-base text-[#A0A8C2]">
            (30130) 세종특별자치시 한누리대로 193, 참미르빌딩 8층
            한국지방교육행정연구재단
          </p>
          <p className="text-sm xl:text-base text-[#A0A8C2]">
            FAX : 044-550-5299
          </p>
          <p className="text-sm xl:text-base text-[#A0A8C2]">
            Email : kilef@cju.ac.kr
          </p>
          <p className="mt-4 text-sm xl:text-base text-[#677195]">
            Copyright 2024 KRFLEA All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
