import React from "react";
import Link from "next/link";
import Image from "next/image";

import {
  Bell,
  Home,
  Calendar,
  Lock,
  Money,
  Profile,
  Envelope,
} from "@/app/assets/page";

const Sidebar = () => {
  const SIDEBAR_CONTENT = [
    { id: 1, name: "Home", link: "/", icon: Home },
    { id: 2, name: "Profile", link: "/profile", icon: Profile },
    { id: 3, name: "View Bookings", link: "/bookings", icon: Calendar },
    { id: 4, name: "Payments", link: "/payments", icon: Money },
    { id: 5, name: "Notification Settings", link: "/notification", icon: Bell },
    { id: 6, name: "Change Email", link: "/email", icon: Envelope },
    { id: 7, name: "Change Password", link: "/password", icon: Lock },
  ];

  return (
    <>
      <div className=" flex h-auto w-64 mx-auto flex-col items-center rounded-lg  justify-between border shadow-lg bg-white  py-6">
        <div className="space-y-4  ">
          {SIDEBAR_CONTENT.map(({ id, name, link, icon }) => (
            <span className="flex space-x-4 " key={id}>
              <Link href={link} className="flex-col-center mx-1">
                <Image src={icon} alt={` ${name}`} className="mb-1 w-5" />
              </Link>

              <p className="text-xs text-gray-400">{name}</p>
            </span>
          ))}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
