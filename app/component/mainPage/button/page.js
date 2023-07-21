"use client"

export default function (props) {
  if (props.size === "xl") {
    return (
      <button
        {...props}
        className=" w-full bg-careersPath-button  rounded-t px-2 py-4 text-sm  text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
      >
        {props.children}
      </button>
    );
  } else{

  }
}
