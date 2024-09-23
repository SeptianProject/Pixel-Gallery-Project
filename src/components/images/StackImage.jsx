import { useLocation } from "react-router-dom";
import { assets } from "../../assets/assets";
import { useEffect, useState } from "react";
import { SquarePen } from "lucide-react";

const StackImage = ({ userProfile }) => {
  const location = useLocation();
  const [editProfile, setEditProfile] = useState(false);

  const handleEditProfile = () => {
    if (location.pathname === "/profile/edit") {
      setEditProfile(true);
    }
  };

  useEffect(() => {
    handleEditProfile();
  });

  return (
    <div className="relative">
      <div className="flex flex-col items-center justify-center">
        <div className="">
          <img
            src={assets.image_stack}
            className="sm:h-60 sm:w-screen md:h-[350px] md:w-screen sm:object-cover rounded-3xl brightness-50 z-0"
          />
        </div>
        <div className="absolute -bottom-12">
          {editProfile ? (
            <div className="relative">
              <img src={assets.photo_profile} className="size-36" />
              <button className="absolute z-20 bottom-0 right-0 rounded-full border-2 border-hijau p-2 bg-white">
                <SquarePen className="text-hijau" size={20} strokeWidth={2.1} />
              </button>
            </div>
          ) : (
            <img src={assets.photo_profile} className="size-36" />
          )}
        </div>
      </div>
    </div>
  );
};

export default StackImage;
