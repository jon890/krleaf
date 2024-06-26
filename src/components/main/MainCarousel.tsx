import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { FONT_ONETWOTHREE_RF } from "@/lib/font-util";
import { cn } from "@/lib/utils";

export default function MainCarousel() {
  return (
    <Carousel
      className="w-full h-screen"
      orientation="horizontal"
      opts={{
        loop: true,
      }}
    >
      <CarouselContent className="w-full h-full">
        <CarouselItem className="w-full">
          <div
            className={cn(
              "w-full bg-center bg-no-repeat bg-cover h-screen",
              `bg-[url('/images/background/bg_main1.png')]`
            )}
          >
            <MainCarouselContent />
          </div>
        </CarouselItem>

        <CarouselItem className="w-full">
          <div
            className={cn(
              "w-full bg-center bg-no-repeat bg-cover h-screen",
              `bg-[url('/images/background/bg_main2.png')]`
            )}
          >
            <MainCarouselContent />
          </div>
        </CarouselItem>

        <CarouselItem className="w-full">
          <div
            className={cn(
              "w-full bg-center bg-no-repeat bg-cover h-screen",
              `bg-[url('/images/background/bg_main3.png')]`
            )}
          >
            <MainCarouselContent />
          </div>
        </CarouselItem>

        {/* <CarouselNext /> */}
        {/* <CarouselPrevious /> */}
      </CarouselContent>
    </Carousel>
  );
}

function MainCarouselContent() {
  return (
    <div
      className={cn(
        "container flex flex-col items-end h-full justify-center px-4",
        FONT_ONETWOTHREE_RF.className
      )}
    >
      <h1 className="text-[#2F5BC1] xl:text-6xl text-3xl sm:text-4xl md:text-5xl">
        KRFLEA
      </h1>
      <h1 className="xl:text-6xl text-3xl sm:text-4xl md:text-5xl mb-6">
        한국지방교육행정연구재단
      </h1>

      <h2 className="xl:text-2xl text-base sm:text-lg md:text-xl">
        안정적 교육환경의 토대를 마련하고 건전하고
        <br /> 생산적인 교육재정 운영에 기여합니다.
      </h2>
    </div>
  );
}
