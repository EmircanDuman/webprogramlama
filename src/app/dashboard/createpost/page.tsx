"use client";

import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import React, { useState } from "react";
import { SubmitPost } from "./CreatePostMethod";

const page = () => {
  const { data: session } = useSession();
  if (!session) redirect("/");

  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");

  return (
    <div className="flex flex-row justify-around items-center">
      <div className="ml-24 mt-28 border-[10px] p-10 border-purple-700 rounded-2xl w-1/2 relative">
        <div className="flex flex-row gap-5 items-center">
          <div className="flex justify-between flex-row items-center relative w-full">
            <div className="flex flex-row gap-5 items-center">
              <span className="inline-block font-extrabold">Author:</span>
              <span className="inline-block">{session.user?.name}</span>
            </div>
            <button
              className="bg-purple-800 text-white p-4 text-xl font-bold rounded-xl border-2 border-slate-500 hover:bg-purple-700"
              onClick={async () =>
                SubmitPost({
                  authorName: session.user?.name as string,
                  authorEmail: session.user?.email as string,
                  title: title,
                  content: content,
                }).then(() => redirect("/dashboard"))
              }
            >
              Create Post
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-5 mt-12">
          <input
            className="text-xl font-bold border-2 border-slate-800 py-2 px-4 rounded-lg"
            placeholder="title"
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            className="h-60 text-lg font-semibold resize-none border-2 border-slate-800 py-2 px-4 rounded-lg"
            placeholder="Write here..."
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
      </div>
      <div className="flex flex-col gap-10">
        <span className="text-3xl font-bold">Post your content</span>
        <p className="max-w-[40vh]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          mollitia, molestiae quas vel sint commodi repudiandae consequuntur
          voluptatum laborum numquam blanditiis harum quisquam eius sed odit
          fugiat iusto fuga praesentium optio, eaque rerum! Provident similique
          accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut
          molestias architecto voluptate aliquam nihil, eveniet aliquid culpa
          officia aut! Impedit sit sunt quaerat, odit, tenetur error, harum
          nesciunt ipsum debitis quas aliquid. Reprehenderit, quia. Quo neq
        </p>
      </div>
    </div>
  );
};

export default page;
