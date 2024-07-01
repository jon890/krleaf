"use server";

import prisma from "@/prisma/prisma.client";
import { z } from "zod";

const CreateBoardSchema = z.object({
  title: z.string(),
  content: z.string(),
  boardType: z.string(),
});

export default async function createBoardAction(
  param: z.infer<typeof CreateBoardSchema>
) {
  const validatedParam = CreateBoardSchema.safeParse(param);
  if (!validatedParam.success) {
    return {
      ok: false,
      message: "오류가 발생했습니다",
      error: validatedParam.error.flatten(),
    };
  }

  await prisma.board.create({
    data: validatedParam.data,
  });
  return {
    ok: true,
    message: "성공적으로 저장되었습니다",
  };
}
