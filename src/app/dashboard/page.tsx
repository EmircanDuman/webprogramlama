import React from "react";
import { PrismaClient } from "@prisma/client";
import PostCard from "../components/PostCard";

const page = async () => {
  const prisma = new PrismaClient();
  const posts = await prisma.post.findMany({
    take: 16,
    orderBy: {
      id: "desc",
    },
  });
  return (
    <div className="container h-full flex mt-24 justify-center flex-col items-center gap-6">
      <span className="text-gray-800 text-2xl font-bold">Latest posts</span>
      <div className="grid grid-flow-row grid-cols-4 w-3/4 gap-6">
        {posts.map(async (post) => {
          const author = await prisma.user.findUnique({
            where: {
              id: post.userId,
            },
          });
          return (
            <PostCard
              key={post.id}
              postId={post.id}
              title={post.title}
              content={post.content}
              authorName={author?.name as string}
              authorImage={author?.image as string}
            />
          );
        })}
      </div>
    </div>
  );
};

export default page;
