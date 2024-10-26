import { useEffect, useState } from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const GroupGithub = ({ project }) => {
  const [onScroll, setOnScroll] = useState(false);
  const profile = project.profiles;

  const handleOnScroll = () => {
    if (window.scrollY > 100) {
      setOnScroll(true);
    } else {
      setOnScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleOnScroll);
    return () => {
      window.removeEventListener("scroll", handleOnScroll);
    };
  }, [onScroll]);

  return (
    <div
      className={`
        ${
          onScroll
            ? "fixed -top-2 mt-0 py-10 px-8 md:px-20 lg:px-32 right-0 w-full z-50 bg-white shadow-xl"
            : ""
        }
        flex items-center select-none transform transition-all duration-500 ease-in-out`}
    >
      <Link to="/dashboard/admin">
        <div className="flex gap-x-3 mr-auto rounded-full">
          <div>
            <img
              src={
                profile.avatar_url ? profile.avatar_url : assets.photo_profile
              }
              className="h-10 w-10 md:h-14 md:w-14 rounded-full"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h3 className="text-dark text-base font-bold md:text-lg">
              {profile.name}
            </h3>
            <p className="text-secondary text-xs font-semibold">
              {profile.role}
            </p>
          </div>
        </div>
      </Link>
      <div className="flex gap-x-3 ml-auto items-center">
        <div className="cursor-pointer">
          <img
            onClick={() => window.open(project.link_github)}
            src={assets.github_icon}
            className="border border-hijau rounded-2xl p-2 md:p-4"
          />
        </div>
        <div
          onClick={() => window.open(project.link_website)}
          className="border border-hijau rounded-xl hover:bg-hijau transition-all duration-500 cursor-pointer"
        >
          <p className="text-hijau text-center p-3 text-sm md:py-5 md:px-6 hover:text-white transition-all duration-500">
            Visit Website
          </p>
        </div>
      </div>
    </div>
  );
};

export default GroupGithub;
