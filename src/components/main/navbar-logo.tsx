"use client";

import useWindowSize from "@/hooks/use-window-size";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export default function NavbarLogo() {
  const { width } = useWindowSize();

  return (
    <Link
      className={cn(
        "flex-none mr-auto hover:opacity-50 active:opacity-50 transition-opacity",
        "pc lg:max-w-[250px] lg:min-w-[200px] lg:relative",
        "mobile w-[40vw] sm:w-[25vw] md:w-[22vw] h-auto"
      )}
      href="/"
    >
      {width && width > 1024 ? (
        <Image src="/images/logo.png" alt="logo" fill sizes="18vw" priority />
      ) : (
        <Image
          src="/images/logo/logo_mobile.png"
          alt="logo"
          width={0}
          height={0}
          sizes="100vw"
          priority
          className="w-full h-auto"
        />
      )}
    </Link>
  );
}
