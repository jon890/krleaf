import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@radix-ui/react-accordion";
import Image from "next/image";

export default function Home() {
  return (
    <main className="h-screen w-screen flex flex-row">
      <nav className="bg-primary h-full text-white font-bold">
        <ul className="*:px-8 text-xl divide-y *:py-8 *:cursor-pointer">
          <li>
            <Image
              src="/images/logo.png"
              alt="kilef_logo"
              width="200"
              height="100"
            />
          </li>
          <li>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>주요사업</AccordionTrigger>
                <AccordionContent>
                  <ul className="font-semibold text-sm py-2 *:py-2">
                    <li className="hover:opacity-50 transition-opacity">
                      사업소개
                    </li>
                    <li className="hover:opacity-50 transition-opacity">
                      지방교육행정기관
                      <br />
                      재정투자사업 <br />
                      투자심사 지원 관리
                    </li>
                    <li className="hover:opacity-50 transition-opacity">
                      교육행정기관 컨설팅
                      <br />및 시스템 운영관리
                    </li>
                    <li className="hover:opacity-50 transition-opacity">
                      지방교육행정기관 <br />
                      타당성조사
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </li>
          <li>KILEF 소식</li>
          <li>정보자료</li>
          <li>KILEF 소개</li>
          <li>
            <MagnifyingGlassIcon className="size-6" />
          </li>
        </ul>
      </nav>

      <section className="h-full flex-1">
        <Carousel
          className="w-full h-full"
          orientation="horizontal"
          opts={{
            loop: true,
          }}
        >
          <CarouselContent className="w-full h-full">
            {[
              "/images/bg_main1.jpg",
              "/images/bg_main2.jpg",
              "/images/bg_main3.jpg",
              "/images/bg_main4.jpg",
            ].map((image, index) => (
              <CarouselItem
                key={index}
                className="w-full h-[600px] relative flex justify-center items-center"
              >
                <Image src={image} fill alt={"main_" + index} className="z-0" />
                <div className="z-10 text-white flex gap-4 flex-col">
                  <p className="flex flex-row justify-center items-center gap-3 text-5xl font-bold">
                    <Image
                      src="/images/img_kilef.png"
                      width="80"
                      height="40"
                      alt="KILEF"
                    />
                    지방교육재정연구원
                  </p>
                  <p className="text-2xl font-semibold">
                    안정적 교육 환경의 토대를 마련하고 건전하고 생산적인
                    교육재정 운영에 기여합니다.
                  </p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </section>
    </main>
  );
}
