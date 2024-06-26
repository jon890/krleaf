import { FONT_PRETENDARD } from "@/lib/font-util";
import { cn } from "@/lib/utils";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";

export default function NavBar() {
  return (
    <nav
      className={cn(
        "top-0 fixed w-full text-black font-bold h-[100px] flex flex-row items-center justify-center z-10 bg-white bg-opacity-50 backdrop-blur px-4",
        FONT_PRETENDARD.className
      )}
    >
      <Link
        className="flex-none mr-auto relative w-[18vw] h-[40px] max-w-[250px] min-w-[200px]
        hover:opacity-50 active:opacity-50 transition-opacity"
        href="/"
      >
        <Image src="/images/logo.png" alt="logo" fill sizes="18vw" priority />
      </Link>

      <ul className="flex-row gap-16 justify-center text-xl md:text-base hidden md:flex">
        <li>
          <Link
            href="/"
            className="hover:text-gray-500 active:text-gray-500 transition-colors"
          >
            주요사업
          </Link>
        </li>
        <li>
          <Link
            href="/"
            className="hover:text-gray-500 active:text-gray-500 transition-colors"
          >
            KRFLEA 소식
          </Link>
        </li>
        <li>
          <Link
            href="/"
            className="hover:text-gray-500 active:text-gray-500 transition-colors"
          >
            정보자료
          </Link>
        </li>
        <li>
          <Link
            href="/"
            className="hover:text-gray-500 active:text-gray-500 transition-colors"
          >
            KRFLEA 소개
          </Link>
        </li>
      </ul>

      <div className="ml-32 md:ml-16 border-[#BBBBBB] border-2 rounded-3xl flex-row gap-3 justify-center items-center py-3 px-4 hidden xl:flex">
        <MagnifyingGlassIcon className="size-7" />
        <input
          type="text"
          placeholder="검색어를 입력해주세요"
          className="placeholder:text-[#AAAAAA] placeholder:font-bold placeholder:text-sm bg-transparent"
        />
      </div>

      <button
        className="ml-6 sm:ml-12 border-[#BBBBBB] border-2 rounded-2xl p-2 cursor-pointer
      group"
      >
        <Image
          src="/images/icons/icon_sitemap.png"
          width="34"
          height="34"
          alt="icon_sitemap"
          className="group-hover:opacity-50 group-active:opacity-50 transition-opacity"
        />
      </button>
    </nav>
  );
}
