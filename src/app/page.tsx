import { cn } from "@/lib/utils";
import NavBar from "./navbar";
import { FONT_ONETWOTHREE_RF } from "@/lib/font-util";

export default function Home() {
  return (
    <main className="h-screen w-screen flex flex-col">
      <NavBar />

      <div className="bg-[url('/images/background/bg_main1.png')] h-[1000px] bg-no-repeat bg-cover flex flex-col justify-center items-center">
        <div
          className={cn(
            "container flex flex-col items-end",
            FONT_ONETWOTHREE_RF.className
          )}
        >
          <h1 className="text-[#2F5BC1] text-6xl">KRFLEA</h1>
          <h1 className="text-6xl mb-6">한국지방교육행정연구재단</h1>

          <h2 className="text-2xl">
            안정적 교육환경의 토대를 마련하고 건전하고
            <br /> 생산적인 교육재정 운영에 기여합니다.
          </h2>
        </div>
      </div>
    </main>
  );
}
