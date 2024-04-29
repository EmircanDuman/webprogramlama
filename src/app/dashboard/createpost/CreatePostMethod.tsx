"use server";

import { prisma } from "@/db";

interface handlePostSubmitProps {
  authorName: string;
  authorEmail: string;
  title: string;
  content: string;
}

export async function SubmitPost({
  authorName,
  authorEmail,
  title,
  content,
}: handlePostSubmitProps) {
  "use server";
  const authorId = await prisma.user.findUnique({
    where: {
      name: authorName,
      email: authorEmail,
    },
    select: {
      id: true,
    },
  });
  const res = await prisma.post.create({
    data: {
      userId: authorId?.id as string,
      title: title,
      content: content,
    },
  });
  return;
}
