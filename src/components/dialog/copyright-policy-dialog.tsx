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

export default function CopyrightPolicyDialog() {
  return (
    <Dialog>
      <DialogTrigger
        className={cn(
          "bg-krflea_text_primary rounded-3xl px-5 py-3 text-base text-center cursor-pointer",
          HOVER_CLASSNAME
        )}
      >
        저작권 보호정책
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            저작권 보호정책 본사이트의 이용과 관련하여 필요사항을 규정합니다.
          </DialogTitle>
          <DialogDescription>
            ○ 저작권 보호정책 지방교육재정연구원 홈페이지에서 제공하는 정보,
            사진, 동영상, 이미지(이하 &apos;컨텐츠&apos;)의 저작권과 판권은
            별도의 표시가 없는 한 지방교육재정연구원 소유이며, 저작권법의 보호를
            받는 저작물로 무단 복제 및 배포를 원칙적으로 금합니다.
            지방교육재정연구원이 제공하는 컨텐츠를 이용하고자 할 경우에는 다음의
            규정을 따라야 합니다. • 지방교육재정연구원의 서비스를 통해 제공받는
            컨텐츠는 개인열람의 목적으로만 사용해야 합니다. •
            지방교육재정연구원의 서면에 의한 명시적 동의 없이
            지방교육재정연구원이 제공하는 컨텐츠의 전부 혹은 일부를 전재, 복사,
            양도, 재배포, 변조, 출판, 판매, 게시하거나 인터넷 사이트 제작/구성
            및 데이터베이스 구축에 이용하는 것, 상품제작, 광고, 기타 영리적
            목적으로 활용하는 것은 법으로 금지되어 있으며, 이를 위반할 경우
            민사상의 책임뿐만 아니라 형사처벌을 받을 수도 있습니다. • 저작권법
            제24조의2에 따라 지방교육재정연구원에서 저작재산권의 전부를 보유한
            저작물의 경우에는 별도의 허락 없이 이용이 가능합니다. 단, 이용이
            가능한 자료는 “공공저작물 자유이용허락 표시 기준(공공누리,KOGL)
            제4유형”을 부착하여 개방하고 있으므로 공공누리 표시가 부착된
            저작물인지를 확인한 이후에 이용하시기 바랍니다. • 공공누리 마크가
            부착된 저작물을 이용하실 경우에는, 반드시 저작물의 출처를 구체적으로
            표시하여야 하며, 공공누리가 부착되지 않은 자료들을 사용하고자 할
            경우에는 담당자와 사전에 협의한 이후에 이용하여 주시기 바랍니다. •
            상기의 내용과 관련하여 궁금한 사항이 있으시면 지방교육재정연구원
            홈페이지 운영자에게 문의하시기 바랍니다. 전화번호 : 044-550-5241 Fax
            : 044-550-5299 주소 : 30130&#41; 세종특별자치시 한누리대로 193
            참미르빌딩 지방교육재정연구원
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
