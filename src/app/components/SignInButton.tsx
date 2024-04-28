"use client";

import React from "react";
import { signIn } from "next-auth/react";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

const SignInButton = () => {
  const { data: session } = useSession();

  if (session && session.user) {
    redirect("/dashboard");
  }

  return (
    <button
      className="bg-blue-800 text-white p-6 rounded-2xl hover:bg-blue-500"
      onClick={() => signIn()}
    >
      Sign in With Google
    </button>
  );
};

export default SignInButton;
