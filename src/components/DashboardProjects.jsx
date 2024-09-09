import { ChevronLeftCircle, ChevronRightCircle } from "lucide-react";
import CardStackWhite from "./cards/CardStackWhite";

const DashboardProjects = () => {
  return (
    <>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-dark font-bold text-3xl">Your Projects</h1>
        </div>
        <div className="flex items-center gap-x-1">
          <ChevronLeftCircle className="text-dark hover:text-white rounded-full hover:bg-hijau" size={50} strokeWidth={1} />
          <ChevronRightCircle className="text-dark hover:text-white rounded-full hover:bg-hijau" size={50} strokeWidth={1} />
        </div>
      </div>
      <div className="relative">
        <div className=" w-full h-[30rem] overflow-y-auto md:grid md:grid-cols-2 md:gap-x-5">
          <CardStackWhite />
          <CardStackWhite />
          <CardStackWhite />
          <CardStackWhite />
          <CardStackWhite />
          <CardStackWhite />
        </div>
      </div>
    </>
  );
};

export default DashboardProjects;
