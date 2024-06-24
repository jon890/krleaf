import Image from "next/image";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

export default function Home() {
  return (
    <main className="h-screen w-screen flex flex-row">
      <nav className="bg-mainBlue h-full text-white font-bold">
        <ul className="*:px-8 text-xl divide-y *:py-8 *:cursor-pointer">
          <li>
            <Image
              src="/images/logo.png"
              alt="kilef_logo"
              width="200"
              height="100"
            />
          </li>
          <li>주요사업</li>
          <li>KILEF 소식</li>
          <li>정보자료</li>
          <li>KILEF 소개</li>
          <li>
            <MagnifyingGlassIcon className="size-6" />
          </li>
        </ul>
      </nav>

      <section></section>
    </main>
  );
}
