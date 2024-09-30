import { useLocation } from "react-router-dom";
import { assets } from "../../assets/assets";
import { useContext, useEffect, useRef, useState } from "react";
import { SquarePen } from "lucide-react";
import Modal from "../modal/Modal";
import { AuthContext } from "../../lib/context/AuthContext";

const StackImage = ({ setSelectedAvatar, modalOpen, setModalOpen }) => {
  const { user, fetchUserProfile } = useContext(AuthContext);
  const avatarUrl = useRef(user?.avatar_url || assets.profile);
  const location = useLocation();
  const [editProfile, setEditProfile] = useState(false);
  const updateAvatar = (imgSrc) => {
    avatarUrl.current = imgSrc;
  };

  const handleEditProfile = () => {
    if (location.pathname === "/profile/edit") {
      setEditProfile(true);
    }
  };

  useEffect(() => {
    handleEditProfile();
    if (user?.id) {
      fetchUserProfile(user.id);
    }
  }, [user?.id]);

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
              <img
                src={avatarUrl.current}
                // className="size-36"
                className="w-[150px] h-[150px] rounded-full border-2 border-gray-400"
              />
              <button
                className="absolute bottom-0 right-0 rounded-full border-2 border-hijau p-2 bg-white"
                onClick={() => setModalOpen(true)}
              >
                <SquarePen className="text-hijau" size={20} strokeWidth={2.1} />
              </button>
              {modalOpen && (
                <Modal
                  setSelectedAvatar={setSelectedAvatar}
                  updateAvatar={updateAvatar}
                  closeModal={() => setModalOpen(false)}
                />
              )}
            </div>
          ) : (
            <img
              src={user?.avatar_url || assets.profile}
              //  className="size-36"
              className="w-[150px] h-[150px] rounded-full border-2 border-gray-400"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default StackImage;
