import { useLocation, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";
import FormAuthentication from "./forms/FormAuthentication";
import SingleButton from "./buttons/SingleButton";
import { BounceInRight } from "./animations/BounceAnimate";
import { useRef, useState } from "react";

const AuthComponent = ({
  title,
  description,
  textBtn,
  pathName,
  textQuest,
  textLink,
  formData,
  LogPosition,
  RegPosition,
  changeHandler,
  Data,
  buttonFunction,
}) => {
  const navigate = useNavigate();
  const urlRef = useRef();
  const location = useLocation();
  const [formPosition, setFormPosition] = useState(urlRef);

  const handleFormPosition = () => {
    if (location.pathname === "/login") {
      setFormPosition(LogPosition);
    } else {
      setFormPosition(RegPosition);
    }
  };

  return (
    <>
      <div className="hidden lg:block lg:absolute left-0">
        <div className="">
          <img
            src={assets.image_register}
            className="bg-cover max-w-7xl w-full h-full"
          />
        </div>
      </div>
      <div
        ref={handleFormPosition}
        className={`static md:mt-0 lg:absolute right-40 ${formPosition}`}
      >
        <div className="flex flex-col items-center gap-y-8">
          {/* title */}

          <BounceInRight>
            <div className="">
              <h1 className="text-dark font-bold text-3xl md:text-5xl transition-all duration-700">
                {title}
              </h1>
            </div>
          </BounceInRight>

          {/* form */}
          <div className="flex flex-col gap-y-3">
            <FormAuthentication
              formData={formData}
              Data={Data}
              changeHandler={changeHandler}
            />
            {/* desc */}
            {description}
          </div>

          {/* button */}
          <div className="text-center">
            <div className="px-20 lg:w-auto">
              <SingleButton
                onclick={buttonFunction}
                text={textBtn}
                bgColor={"hijau"}
                txtColor={"white"}
                maxWMob={"px-10"}
                maxWTab={"px-20"}
              />
            </div>
            <div className="pt-2">
              <p className="text-sm md:text-base text-darkBlue font-medium tracking-wide">
                {textQuest} &nbsp;
                <span
                  onClick={() => navigate(pathName)}
                  className="text-hijau cursor-pointer font-bold"
                >
                  {textLink}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AuthComponent;
