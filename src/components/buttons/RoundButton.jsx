import { useRef, useState } from "react";

const RoundButton = ({ arrButton, maxMob, setSelected, selected }) => {
  const ref = useRef();
  const [maxWMob, setMaxWMob] = useState(ref);

  const handleMaxWidth = () => {
    if (window.innerWidth <= 430) {
      setMaxWMob(maxMob);
    }
  };

  const handleSelect = (index) => {
    setSelected({ id: index });
  };

  return (
    <div
      ref={handleMaxWidth}
      className="flex flex-wrap justify-between text-center items-center"
    >
      {arrButton?.map((item) => (
        <button
          key={item.id}
          onClick={() => handleSelect(item.id)}
          className={`${
            selected === item.id
              ? "bg-hijau text-white"
              : "hover:border hover:border-hijau"
          } rounded-3xl px-8 py-[14px] h-full w-full ${maxWMob} md:max-w-[200px] mx-auto font-semibold text-center my-4`}
        >
          {item.name}
        </button>
      ))}
    </div>
  );
};

export default RoundButton;
