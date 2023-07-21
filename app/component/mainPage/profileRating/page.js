"use client";
import Image from "next/image";

import { StarIcon } from "@heroicons/react/20/solid";
import { Calendar, Hash, Pen, Request } from "@/app/assets/page";

const reviews = {
  average: 4,
  featured: [
    {
      id: 1,
      rating: 4,
      reviews: 35,
      content: `
        <p>This icon pack is just what I need for my latest project. There's an icon for just about anything I could ever need. Love the playful look!</p>
      `,
      request: "Call Request Notes",
      balance: "$250",
      datetime: "2021-07-16",
      author: "Elon Musk",
      avatarSrc:
        "https://hips.hearstapps.com/hmg-prod/images/gettyimages-1229892983-square.jpg?crop=1.00xw:1.00xh;0,0&resize=1200:*",
    },
  ],
};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ProfieRating() {
  return (
    // <div className=" lg:grid lg:grid-cols-7 lg:grid-rows-1 lg:gap-x-8 lg:gap-y-10 xl:gap-x-16">

    <div className=" bg-white rounded-lg h-auto shadow-lg   w-auto mt-6">
      {reviews.featured.map((review, reviewIdx) => (
        <div
          key={review.id}
          className="flex space-x-4 mx-10 -mt-6 text-sm text-gray-500"
        >
          <div className="flex-none  py-10">
            <div className="border border-careersPath-button rounded-full p-0.5">
            <img
              src={review.avatarSrc}
              alt=""
              className="h-10 w-10 rounded-full bg-gray-100"
            />
          </div>
          </div>
          <div
            className={classNames(
              reviewIdx === 0 ? "" : "border-t  border-gray-200",
              "flex-1 py-10"
            )}
          >
            <h3 className="font-medium text-gray-900 ">{review.author}</h3>
              <Image
                src={Pen}
                alt=""
                className="h-2 mx-20 -mt-3   border rounded-full bg-gray-100"
              />
            <div className=" flex mt-2 items-center">
              {[0, 1, 2, 3, 4].map((rating) => (
                <StarIcon
                  key={rating}
                  className={classNames(
                    review.rating > rating
                      ? "text-yellow-400"
                      : "text-gray-300",
                    "h-5 w-5 flex-shrink-0"
                  )}
                  aria-hidden="true"
                />
              ))}
            </div>

            <p className="sr-only">{review.rating} out of 5 stars</p>
            <div className=" w-56 -mx-16  ">
              <div className="flex flex-wrap">
                <div className=" flex w-full flex-none gap-x-4  ">
                  <dd className="text-xs mx-16 font-medium leading-6 text-gray-500">
                    {review.reviews}reviews
                  </dd>
                </div>

                <div className=" text-xs  flex w-full justify-between gap-x-4 ">
                  <p className="mt-0.5">Balance</p>
                  <div className="font-bold text-sm">{review.balance}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
