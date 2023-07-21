import React from "react";
import Link from "next/link";
import Image from "next/image";

import { Camera } from "@/app/assets/page";

const VideoCall = () => {
  const SIDEBAR_CONTENT = [
    { id: 1, name: "Jone Doe", link: "/", icon: Camera, description:"Start Video Call with " },
    
  ];

  return (
    <>
      <div className=" mx-auto rounded flex h-auto w-96 flex  items-center justify-between  shadow-lg bg-white  py-6">
        
        <div className="space-y-4 mx-auto py-">
      <p className="text-careersPath-background px-4 text-x">Start Video Call "button will b enabled 5 minutes before schedualed time</p>

          {SIDEBAR_CONTENT.map(({ id, name, link, icon, description }) => (
            <span className="flex h-auto mx-auto p-2 rounded bg-careersPath-background w-56 justify-center items-center  bg-black  text-white " key={id}>
              <Link href={link} className="mx-1">
                <Image src={icon} alt={` ${name}`} className="mb-1  w-4" />
              </Link>
             
              <p className="text-size  mx-1  text-gray-100 ">{description}</p>

             <p className="text-size  text-white ">{name}</p>
            </span>
          ))}
        </div>
      </div>
    </>
  );
};

export default VideoCall;
