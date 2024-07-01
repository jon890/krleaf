import { cn } from "@/lib/utils";

type Props = {
  title: string;
};

export default function MainBoardTitle({ title }: Props) {
  return (
    <h2
      className={cn(
        "flex-none font-bold",
        "pc lg:ml-0 lg:mr-auto lg:text-3xl",
        "mobile mx-auto text-2xl"
      )}
    >
      {title}
    </h2>
  );
}
