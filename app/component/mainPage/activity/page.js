import React from "react";
import Link from "next/link";
import Image from "next/image";

import { Calendars, Heart, Users } from "@/app/assets/page";

const Activity = () => {
  const SIDEBAR_CONTENT = [
    { id: 1, name: "Booking request", link: "/", icon: Calendars, description:"You accepted the Jon Doe's request.", time:"2d", },
    { id: 2, name: "Upload a profile picture", link: "/profile", icon: Users, description:"Let's put a face to your name!" , time:"1w",},
    {
      id: 3,
      name: "Welcome to CareerPaths",
      link: "/ careerPaths",
      icon: Heart,
      description:"You've created an account ",
      time:"1w",
    },
  ];

  return (
    <>
      <div className="mt-2 flex h-auto w-auto flex rounded-lg items-center justify-between border shadow-lg bg-white  py-6">
        <div className="space-y-4   p-4">
            <p className="font-semibold">Activity</p>
          {SIDEBAR_CONTENT.map(({ id, name, link, icon, description, time }) => (
            <span className="flex space-x-4" key={id}>
              <Link href={link} className="flex-col-center">
                <Image src={icon} alt={` ${name}`} className="mb-1  w-6" />
              </Link>
             <div className="w-44">
             <p className="text-xs  text-black font-bold">{name}</p>
              <p className="text-xs mt-1  text-gray-400 ">{description}</p>
             </div>
             <p className="text-x mx-auto text-gray-400">{time}</p>
            </span>
          ))}
        </div>
      </div>
    </>
  );
};

export default Activity;
