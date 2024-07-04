import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import Image from "next/image";
import MainCarouselContent from "./carousel/MainCarouselContent";
import { MainCarouselScrollButton } from "./carousel/MainCarouselScrollButton";
import MainCarouselButton from "./carousel/MainCarouselButton";

export default function MainCarousel() {
  return (
    <Carousel
      className="w-full h-screen relative"
      orientation="horizontal"
      opts={{ loop: true }}
    >
      <CarouselContent className="w-full h-full">
        <CarouselItem className="w-full">
          <div className="w-full h-screen relative overflow-hidden">
            <Image
              src="/images/background/bg_main1.png"
              width={0}
              height={0}
              sizes="100vh"
              className={cn(
                "absolute w-full h-full -z-10 opacity-80",
                "top-1/2 left-1/2 object-cover -translate-x-1/2 -translate-y-1/2",
                "pc lg:rounded-b-none",
                "mobile rounded-b-[210px]"
              )}
              alt="bg_main"
            />

            <MainCarouselContent />
            <MainCarouselScrollButton />
          </div>
        </CarouselItem>

        <CarouselItem className="w-full">
          <div className="w-full h-screen relative">
            <Image
              src="/images/background/bg_main2.png"
              width={0}
              height={0}
              sizes="100vh"
              className={cn(
                "absolute w-full h-full -z-10 opacity-80",
                "top-1/2 left-1/2 object-cover -translate-x-1/2 -translate-y-1/2",
                "pc lg:rounded-b-none",
                "mobile rounded-b-[210px]"
              )}
              alt="bg_main"
            />

            <MainCarouselContent />
            <MainCarouselScrollButton />
          </div>
        </CarouselItem>

        <CarouselItem className="w-full">
          <div className="w-full h-screen relative">
            <Image
              src="/images/background/bg_main3.png"
              width={0}
              height={0}
              sizes="100vh"
              className={cn(
                "absolute w-full h-full -z-10 opacity-80",
                "top-1/2 left-1/2 object-cover -translate-x-1/2 -translate-y-1/2",
                "pc lg:rounded-b-none",
                "mobile rounded-b-[210px]"
              )}
              alt="bg_main"
            />
            <MainCarouselContent />
            <MainCarouselScrollButton />
          </div>
        </CarouselItem>
      </CarouselContent>

      <MainCarouselButton />
    </Carousel>
  );
}
