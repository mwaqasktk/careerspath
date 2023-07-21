"use client";
import Image from "next/image";
import Reviews from "../reviews/page";
import { Logos } from "@/app/assets/page";


const activity = [
  
  {
    id: 1,
    type: "commented",
    person: {
      name: "Chelsea Hagon",
      imageUrl:
        "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    comment: "John Doe Requested ",
    date: "30min Call",
    dateTime: "2023-01-23T15:56",
  },
];
const activityResponce = [
    
    {
      id: 2,
      type: "commented",
      person: {
        name: "Elon Musk",
        imageUrl:
          "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
      comment: "Elon Musk accepted the request ",
      date: "30min Call",
      dateTime: "2023-01-23T15:56",
    },
    {
        id: 3,
        type: "Call Request",
        person: {
          name: "Elon Musk",
          imageUrl:
            "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
        comment: "Upcoming call in ",
        date: "12 Hours",
        dateTime: "2023-01-23T15:56",
      },
      {
        id: 3,
        type: "Call Request",
        person: {
          name: "Elon Musk",
          imageUrl:
            "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
        comment: "Upcoming call in  ",
        date: "30min Call",
        dateTime: "2023-01-23T15:56",
      },
  ];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Comments() {
  return (
    <>
      <main>
        <div className=" ">
          {activity.map((activityItem) => (
            <div key={activityItem.id} className=" ">
              {activityItem.type === "commented" ? (
                <>
                  <div className="flex space-x-2">
                    <img
                      src={activityItem.person.imageUrl}
                      alt=""
                      className="  h-6 w-6  rounded-full "
                    />
                    <div className=" bg-gray-200 rounded-r-full px-4 py-1 border-b-0 rounded-bl-full ring-1 ring-inset ring-gray-200">
                      <p className="text-xs  leading-6 text-gray-500">
                        {activityItem.comment}
                        {activityItem.date}
                      </p>
                    </div>
                  </div>

                  <div>
                    <time
                      dateTime={activityItem.dateTime}
                      className="mx-8  py-0.5 text-size leading-5 text-gray-500"
                    >
                      {activityItem.dateTime}
                    </time>
                  </div>
                  <div className="mt-8">
                  <Reviews/>

                  </div>
                </>
              ) : (
                <> </>
              )}
            </div>
          ))}
        </div>
        <div className=" mt-2">
          {activityResponce.map((activityItem) => (
            <div key={activityItem.id} className=" ">
              {activityItem.type === "commented" ? (
                <>
                  <div className="flex justify-end mt-8 space-x-2 w-full  ">
                   
                    <div className=" bg-careersPath-message rounded-l-full px-2   py-1  border-b-0 rounded-br-full ">
                      <p className="text-xs leading-6  text-white">
                        {activityItem.comment}
                        {activityItem.date}
                      </p>
                      
                    </div>
                    <img
                      src={activityItem.person.imageUrl}
                      alt=""
                      className="  h-6 w-6  rounded-full "
                    />
                  
                  </div>

                  <div className=" flex justify-end">
                    <time
                      dateTime={activityItem.dateTime}
                      className="mx-8 py-0.5 text-size leading-5 text-gray-400"
                    >
                      {activityItem.dateTime}
                    </time>
                  </div>
                </>
              ) : (
                <> </>
              )}
            </div>
          ))}
        </div>
        <div className=" ">
          {activityResponce.map((activityItem) => (
            <div key={activityItem.id} className=" ">
              {activityItem.type === "Call Request" ? (
                <>
                  <div className="flex justify-end mt-2 space-x-2 w-full  ">
                   
                    <div className=" bg-careersPath-message rounded-l-full px-2   py-1  border-b-0 rounded-br-full ">
                      <p className="text-xs leading-6  text-white">
                        {activityItem.comment}
                        {activityItem.date}
                      </p>
                      
                    </div>
                    
                    <Image
                      src={Logos}
                      alt=""
                      className="  h-6 w-6  rounded-full "
                    />
                    
                  </div>

                  <div className=" flex justify-end">
                    <time
                      dateTime={activityItem.dateTime}
                      className="mx-8 py-0.5 text-size leading-5 text-gray-400"
                    >
                      {activityItem.dateTime}
                    </time>
                  </div>
                </>
              ) : (
                <> </>
              )}
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
