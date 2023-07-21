import Image from "next/image";
import Header from "./component/header/page";
import Sidebar from "./component/dashboard/page";
import MainPage from "./component/mainPage/page";
import ProfieRating from "./component/mainPage/profileRating/page";
import Activity from "./component/mainPage/activity/page";
import Advertisment from "./component/mainPage/adds/page";
export default function Home() {
  return (
    <div className="bg-gray-50">
      <Header />
      {/* <div className="flex mt-8 justify-center space-x-4 bg-gray-50 w-full "> */}
      <div className="flex w-full  mt-6 bg-gray-50  ">
        <div className="w-sidebar mx-10 ">
          <Sidebar />
          <Advertisment />
        </div>
        <div className="w-MainPage -mx-10  ">
          <MainPage />
        </div>

        <div className="mx-20">
          <ProfieRating />
          <Activity />
        </div>
      </div>
    </div>
  );
}
