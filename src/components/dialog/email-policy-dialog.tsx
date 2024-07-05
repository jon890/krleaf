import { HOVER_CLASSNAME } from "@/lib/classname-util";
import { cn } from "@/lib/utils";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";

export default function EmailPolicyDialog() {
  return (
    <Dialog>
      <DialogTrigger
        className={cn(
          "bg-krflea_text_primary rounded-3xl px-5 py-3 text-base text-center cursor-pointer",
          HOVER_CLASSNAME
        )}
      >
        이메일무단수집거부
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            저작권 보호정책 본사이트의 이용과 관련하여 필요사항을 규정합니다.
          </DialogTitle>
          <DialogDescription>
            본 웹사이트에 게시된 이메일 주소가 전자우편 수집 프로그램이나 그
            밖의 기술적 장치를 이용하여 무단으로 수집되는 것을 거부하며, 이를
            위반시 정보통신망법에 의해 형사처벌됨을 유념하시기 바랍니다.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
