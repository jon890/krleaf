import { FONT_PRETENDARD } from "@/lib/font-util";
import { cn } from "@/lib/utils";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import MobileMenu from "./mobile-menu";
import NavbarLogo from "./navbar-logo";
import PcMenu from "./pc-menu";

export default function NavBar() {
  return (
    <nav
      className={cn(
        "top-0 w-full text-black z-10 backdrop-blur relative",
        "pc lg:h-[100px] lg:bg-white lg:bg-opacity-50 lg:px-4",
        "mobile h-[80px] px-5",
        FONT_PRETENDARD.className
      )}
    >
      <div className="container font-bold flex flex-row items-center justify-center h-full">
        <NavbarLogo />

        <PcMenu />

        <div className="ml-32 md:ml-16 border-[#BBBBBB] border-2 rounded-3xl flex-row gap-3 justify-center items-center py-3 px-4 hidden xl:flex">
          <MagnifyingGlassIcon className="size-7" />
          <input
            type="text"
            placeholder="검색어를 입력해주세요"
            className="placeholder:text-[#AAAAAA] placeholder:font-bold placeholder:text-sm bg-transparent"
          />
        </div>

        <MobileMenu />
      </div>
    </nav>
  );
}
