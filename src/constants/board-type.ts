export const BoardType = {
  NOTICE: { code: "NOTICE", text: "공지사항" },
  RECRUIT: { code: "RECRUIT", text: "채용정보" },
  BIDDING: { code: "BIDDING", text: "입찰공고" },
  GALLERY: { code: "GALLERY", text: "갤러리" },
};

export const BoardTypes = [
  BoardType.NOTICE,
  BoardType.RECRUIT,
  BoardType.BIDDING,
  BoardType.GALLERY,
];

export type BoardType = (typeof BoardType)[keyof typeof BoardType];
