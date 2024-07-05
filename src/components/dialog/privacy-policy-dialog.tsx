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

export default function PrivacyPolicyDialog() {
  return (
    <Dialog>
      <DialogTrigger
        className={cn(
          "bg-krflea_text_primary rounded-3xl px-5 py-3 text-base text-center cursor-pointer",
          HOVER_CLASSNAME
        )}
      >
        개인정보처리방침
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            개인정보처리방침 본사이트를 이용하시는 모든 이용자들의 개인정보를
            소중히 다루고 있습니다.
          </DialogTitle>
          <DialogDescription>
            ○개인정보처리방침 지방교육재정연구원은 (이하 ‘연구원’은) 홈페이지
            이용자의 개인정보를 중요시하며, “정보통신망 이용촉진 및 정보보호”에
            관한 법률을 준수하고 있습니다. 연구원은 홈페이지를 통해 그 어떤
            개인정보도 수집하고 있지 않으며, 추후 개인정보수집이 필요한 경우
            연구원 개인정보취급방침을 통하여 이용자의 개인정보가 어떠한 용도와
            방식으로 이용되고 있으며 개인정보보호를 위해 어떠한 조치가 취해지고
            있는지 알려드릴 예정입니다. 연구원의 개인정보취급방침을 개정하는
            경우 웹사이트 공지사항을 통하여 공지할 것입니다. 귀하께서는 연구원의
            서비스를 이용하시며 발생하는 모든 개인정보보호 관련 민원을 개인정보
            관리책임자 혹은 담당부서로 신고하실 수 있습니다. 연구원은 이용자들의
            신고사항에 대해 신속하게 충분한 답변을 드릴 것입니다.
            지방교육재정연구원은 개인정보 처리에 관한 업무를 총괄해서 책임지고,
            개인정보 처리와 관련한 정보주체의 불만처리 및 피해구제 등을 위하여
            같이 개인정보 보호책임자를 지정하고 있습니다. 개인정보 관리책임자
            부서명 : 시스템운영팀 직책 : 팀장 성명 : 김재균 연락처 :
            044-550-5241 정보주체께서는 지방교육재정연구원의 서비스(또는 사업)을
            이용하시면서 발생한 모든 개인정보 보호 관련 문의, 불만처리, 피해구제
            등에 관한 사항을 개인정보 관리책임자로 문의하실 수 있습니다.
            지방교육재정연구원은 정보주체의 문의에 대해 지체 없이 답변 및
            처리해드릴 것입니다. 기타 개인정보침해에 대한 신고나 상담이 필요하신
            경우에는 아래 기관에 문의하시기 바랍니다. 1. 개인정보 분쟁조정위원회
            (kopico.go.kr / 국번없이 1833-6972) 2. 개인정보 침해신고센터
            (privacy.kisa.or.kr / 국번없이 118) 3. 대검찰청 사이버수사과
            (spo.go.kr / 국번없이 1301) 4. 경찰청 사이버안전국 (ecrm.cyber.go.kr
            / 국번없이 182)
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
