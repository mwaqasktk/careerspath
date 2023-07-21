"use client";

import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

import Image from "next/image";
import { Logo, Profile, Shape } from "@/app/assets/page";

export default function Header() {
  return (
    <header className="bg-white border h-20  shadow-sm w-full">
      <div className="flex items-center  gap-x-10 p-2 lg:px-12">
        <div className="flex lg:flex-1  ">
          <div className="-m-1.5 p-1.5  ">
            <Image
              className="mx-auto h-12 w-auto"
              src={Logo}
              alt="Your Company"
            />
          </div>
        </div>

        <div className=" w-2/4  flex justify-end items-end">
          <Image className=" text-gray-400  z-10 -mx-64 py-2   " src={Shape} />

          <input className="border absolute border-gray-200  py-2  w-96 rounded-3xl " />
          <label className="text-gray-400 px-2 z-10 mx-64 py-2   ">Search</label>
        
        </div>
        <div
          className="hidden lg:block lg:h-12  lg:w-px lg:bg-gray-200 "
          aria-hidden="true"
        />
        <div className="flex items-center  justify-end gap-x-4">
          <div className="border  p-4 rounded-full bg-gray-200">
            <Image
              className="mx-auto h-6 w-auto"
              src={Profile}
              alt="Your Company"
            />
          </div>

          <a
            href="#"
            className="hidden lg:block lg:text-sm -mx-2 lg:leading-6 lg:text-gray-400"
          >
            Log in
          </a>
          <a className="text-gray-400">/</a>
          <a
            href="#"
            className=" text-black   text-sm -mx-2  lg:block lg:text-sm  lg:leading-6 lg:text-gray-400  "
          >
            Sign up
          </a>
        </div>
      </div>
    </header>
  );
}
