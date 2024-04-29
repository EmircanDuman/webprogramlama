import React from "react";

interface PostCardProps {
  title: string;
  content: string;
  postId: number;
  authorName: string;
  authorImage: string;
}

const PostCard = ({
  title,
  content,
  postId,
  authorName,
  authorImage,
}: PostCardProps) => {
  return (
    <div className="flex flex-col border-2 p-3 gap-6 rounded-xl border-slate-400">
      <div className="flex flex-row items-center gap-4">
        <span className="font-semibold text-gray-800 border-2 p-1 rounded-xl">
          {authorName}
        </span>
      </div>
      <div className="flex flex-col gap-2">
        <span className="font-extrabold text-xl text-orange-900">{title}</span>
        <span className="font-semibold">{content}</span>
      </div>
    </div>
  );
};

export default PostCard;
