"use client";
import Image from "next/image";

import { StarIcon } from "@heroicons/react/20/solid";
import { Calendar, Hash, Request } from "@/app/assets/page";

const reviews = {
  average: 4,
  featured: [
    {
      id: 1,
      rating: 5,
      content: `
        <p>This icon pack is just what I need for my latest project. There's an icon for just about anything I could ever need. Love the playful look!</p>
      `,
      request: "Call Request Notes",
      date: "July 21, 2023",
      datetime: "2021-07-16",
      author: "Muhammad Waqas",
      avatarSrc:
        "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80",
    },
  ],
};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Reviews() {
  return (
    // <div className=" lg:grid lg:grid-cols-7 lg:grid-rows-1 lg:gap-x-8 lg:gap-y-10 xl:gap-x-16">

    
      <div className="  bg-white rounded-lg  shadow-lg  w-72 max-w-2xl lg:col-span-4 lg:mt-0 lg:max-w-none">
        {reviews.featured.map((review, reviewIdx) => (
          <div
            key={review.id}
            className="flex space-x-4 mx-10 -mt-6 text-sm text-gray-500"
          >
            <div className="flex-none py-10">
              <img
                src={review.avatarSrc}
                alt=""
                className="h-10 w-10 rounded-full bg-gray-100"
              />
            </div>
            <div
              className={classNames(
                reviewIdx === 0 ? "" : "border-t border-gray-200",
                "flex-1 py-10"
              )}
            >
              <h3 className="font-medium text-gray-900">{review.author}</h3>

              <div className=" flex items-center">
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
              <div className="mt-2   w-56 -mx-12  ">
                <div className="flex flex-wrap">
                  <div className="mt-4 flex w-full flex-none gap-x-4 ">
                    <dt className="flex-none">
                      <span className="sr-only">Due date</span>
                      <Image
                        className="h-4 w-5 text-gray-400"
                        aria-hidden="true"
                        src={Calendar}
                      />
                    </dt>
                    <dd className="text-xs leading-6 text-gray-500">
                      <time dateTime="2023-01-31">{review.date}</time>
                    </dd>
                  </div>
                  <div className=" flex w-full flex-none gap-x-4  ">
                    <dt className="flex-none">
                      <Image
                        className="h-4 mt-1 w-5 text-gray-400"
                        aria-hidden="true"
                        src={Hash}
                      />
                    </dt>
                    <dd className="text-xs font-medium leading-6 text-gray-500">
                      {review.author}
                    </dd>
                  </div>

                  <div className=" flex w-full flex-none gap-x-4 ">
                    <dt className="flex-none">
                      <span className="sr-only">Status</span>
                      <Image
                        className="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                        src={Request}
                      />
                    </dt>
                    <dd className="text-xs leading-6 text-gray-500">
                      {review.request}
                    </dd>
                  </div>
                </div>

                <div
                  className=" mt-2  text-xs  text-gray-500"
                  dangerouslySetInnerHTML={{ __html: review.content }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
  );
}
