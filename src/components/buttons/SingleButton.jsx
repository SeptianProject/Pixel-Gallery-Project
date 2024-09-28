import { useRef, useState } from "react";

const SingleButton = ({
  onclick,
  text,
  bgColor,
  txtColor,
  border,
  hovText,
  hovBg,
  type,
  hovBorder,
  maxWMob,
  maxWTab,
}) => {
  const ref = useRef();
  const ref2 = useRef();
  const [maxMob, setMaxMob] = useState(ref);
  const [maxTab, setMaxTab] = useState(ref2);

  const handleMaxWidth = () => {
    if (window.innerWidth <= 430) {
      setMaxMob(maxWMob);
    } else if (window.innerWidth <= 784) {
      setMaxTab(maxWTab);
    }
  };

  return (
    <button
      ref={handleMaxWidth}
      onClick={onclick}
      type={type ? type : "button"}
      className={`
            text-${txtColor} bg-${bgColor} w-full lg:w-80 lg:py-4 hover:text-${hovText} border-${border} hover:bg-${hovBg} hover:border-${hovBorder} transition-all duration-300
            py-4 rounded-2xl border 
            ${maxMob} 
            md:${maxTab}`}
    >
      {text}
    </button>
  );
};

export default SingleButton;
