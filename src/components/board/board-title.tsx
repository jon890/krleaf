import { BoardType } from "@/constants/board-type";
import Image from "next/image";

type Props = {
  boardType: BoardType;
};

export default function BoardTitle({ boardType }: Props) {
  return (
    <section className="w-screen mt-5 relative">
      <Image
        src="/images/background/bg_notice.png"
        width={0}
        height={0}
        sizes="100vw"
        alt="bg_notice"
        className="w-full object-cover aspect-[5/1] lg:aspect-auto"
      />

      <p className="font-bold lg:text-5xl text-3xl absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        {boardType.text}
      </p>
    </section>
  );
}
