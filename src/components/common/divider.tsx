import { cn } from "@/lib/utils";

type Props = {
  className?: string;
};

export default function Divider({ className }: Props) {
  return <div className={cn("w-full h-[1px] bg-[#EEEEEE]", className)}></div>;
}
