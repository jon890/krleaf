import { FONT_PRETENDARD } from "@/lib/font-util";
import { cn } from "@/lib/utils";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";
import NavbarLogo from "./navbar-logo";
import MobileMenu from "./mobile-menu";

export default function NavBar() {
  return (
    <nav
      className={cn(
        "top-0 fixed w-full text-black font-bold flex flex-row items-center justify-center z-10 backdrop-blur",
        "pc lg:h-[100px] lg:bg-white lg:bg-opacity-50 lg:px-4",
        "mobile h-[80px] px-5",
        FONT_PRETENDARD.className
      )}
    >
      <NavbarLogo />

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

      <MobileMenu />
    </nav>
  );
}
