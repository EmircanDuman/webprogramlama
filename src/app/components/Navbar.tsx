"use client";

import React, { Fragment } from "react";
import { signOut, useSession } from "next-auth/react";
import { Menu, Transition } from "@headlessui/react";
import Link from "next/link";
import { redirect } from "next/navigation";

const Navbar = () => {
  const { data: session } = useSession();

  if (!session) redirect("/");

  return (
    <nav className="flex flex-row justify-between items-center sticky pb-2 pt-4">
      <div className="w-full">
        <Link
          href="/dashboard"
          className="bg-gradient-to-r from-pink-500 via-red-500 ml-5 to-yellow-500 bg-clip-text text-transparent font-extrabold text-3xl"
        >
          BlogSQL
        </Link>
      </div>
      <div className="w-full">
        <input
          type="text"
          className="relative border-gray-700 w-3/4 border-2 font-semibold py-2 px-4 rounded-2xl"
          placeholder="Search for authors, tags, posts..."
        />
      </div>
      <div className="w-full flex flex-row justify-between items-center">
        <Link
          href="/dashboard/createpost"
          className="bg-pink-600 text-white px-5 py-2 rounded-xl border-gray-100 border-4 hover:bg-pink-500 w-1/3 text-center"
        >
          New Post
        </Link>
        <div className="flex flex-row gap-4 items-center mr-6">
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
                {session?.user?.name as string}
              </Menu.Button>
            </div>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="origin-top-right absolute right-0 mt-2 w-44 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none">
                <div className="py-1">
                  <Menu.Item as="div" className="py-2 hover:bg-gray-100">
                    <Link href="/dashboard" className="flex justify-center">
                      Profile
                    </Link>
                  </Menu.Item>
                  <Menu.Item as="div" className="py-2 hover:bg-gray-100">
                    <Link
                      href="/dashboard"
                      className="flex justify-center text-red-500 font-bold"
                      onClick={() => signOut()}
                    >
                      Logout
                    </Link>
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
