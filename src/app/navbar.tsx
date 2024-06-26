import { FONT_PRETENDARD } from "@/lib/font-util";
import { cn } from "@/lib/utils";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";

export default function NavBar() {
  return (
    <nav
      className={cn(
        "top-0 fixed w-full text-black font-bold h-[100px] flex flex-row items-center justify-center z-10 bg-white bg-opacity-50 backdrop-blur",
        FONT_PRETENDARD.className
      )}
    >
      <Link
        className="flex-none mr-auto relative w-[18vw] h-[40px] max-w-[250px] min-w-[200px]"
        href="/"
      >
        <Image src="/images/logo.png" alt="logo" fill sizes="18vw" priority />
      </Link>

      <ul className="flex-row gap-16 justify-center text-xl md:text-base hidden md:flex">
        <li>주요사업</li>
        <li>KRFLEA 소식</li>
        <li>정보자료</li>
        <li>KRFLEA 소개</li>
      </ul>

      <div className="ml-32 md:ml-16 border-[#BBBBBB] border-2 rounded-3xl flex-row gap-3 justify-center items-center py-3 px-4 hidden xl:flex">
        <MagnifyingGlassIcon className="size-7" />
        <input
          type="text"
          placeholder="검색어를 입력해주세요"
          className="placeholder:text-[#AAAAAA] placeholder:font-bold placeholder:text-sm bg-transparent"
        />
      </div>

      <div className="ml-0 xl:ml-6 border-[#BBBBBB] border-2 rounded-2xl p-2 cursor-pointer">
        <Image
          src="/images/icons/icon_sitemap.png"
          width="34"
          height="34"
          alt="icon_sitemap"
        />
      </div>
    </nav>
  );
}
