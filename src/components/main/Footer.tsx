import { HOVER_CLASSNAME } from "@/lib/classname-util";
import { cn } from "@/lib/utils";
import Image from "next/image";
import CopyrightPolicyDialog from "../dialog/copyright-policy-dialog";
import EmailPolicyDialog from "../dialog/email-policy-dialog";
import PrivacyPolicyDialog from "../dialog/privacy-policy-dialog";

export default function Footer() {
  return (
    <footer className="w-full bg-[#212B4E] py-12 lg:py-10">
      <div className="container px-4">
        <div className="flex justify-between items-center flex-col gap-12 lg:flex-row">
          <Image
            src="/images/logo/logo_white.png"
            width="338"
            height="53"
            alt="logo_white"
            className="lg:max-w-[338px]"
          />

          <div className="grid grid-cols-2 text-white text-base gap-[10px] lg:flex lg:flex-row">
            <PrivacyPolicyDialog />
            <CopyrightPolicyDialog />
            <EmailPolicyDialog />
            <div
              className={cn(
                "bg-krflea_text_primary rounded-3xl px-5 py-3 text-base text-center cursor-pointer",
                HOVER_CLASSNAME
              )}
            >
              사이트맵
            </div>
          </div>
        </div>

        <div className="hidden lg:block h-[1px] bg-white bg-opacity-30 my-8"></div>

        <div className="flex flex-col mt-8 lg:mt-0">
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
