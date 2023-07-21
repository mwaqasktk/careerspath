import Image from "next/image";
import Reviews from "./reviews/page";
import Comments from "./comments/page";
import Button from "./button/page";
import VideoCall from "./VideoCall/page";
export default function MainPage() {
  return (
    <div className="border w-auto rounded-lg ">
      <Button size="xl">Call Request</Button>
        <div className="p-12 ">
        <div className="">
        <Comments />
      </div>
      <div className="mt-8">
        <VideoCall/>
      </div>
        </div>
        </div>
  );
}
