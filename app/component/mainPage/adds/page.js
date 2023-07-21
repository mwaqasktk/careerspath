import React from "react";
import Link from "next/link";
import Image from "next/image";

import { Apple, Google } from "@/app/assets/page";

const Advertisment = () => {
  const SIDEBAR_CONTENT = [
    { id: 1, name: "App Store", link: "/", icon: Apple, description:"Availible on the" },
    { id: 2, name: "Google Play", link: "/play", icon: Google, description:"Get it on" ,},
    
  ];

  return (
    <>
      {/* <div className="mt-2 flex h-auto w-72 flex  items-center justify-between border shadow-lg bg-white  py-6"> */}
        <div className="space-y-4 py-4">
          {SIDEBAR_CONTENT.map(({ id, name, link, icon, description }) => (
            <span className="flex h-auto mx-auto  p-1 rounded-lg w-64 justify-center items-center  bg-careersPath-message  text-white " key={id}>
              <Link href={link} className="mx-2">
                <Image src={icon} alt={` ${name}`} className="mb-1  w-5" />
              </Link>
             <div className="">
              <p className="text-size mt-1  text-gray-50 ">{description}</p>

             <p className="text-x  text-white font-bold">{name}</p>
             </div>
            </span>
          ))}
        </div>
      {/* </div> */}
    </>
  );
};

export default Advertisment;
