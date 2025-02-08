import { ChevronDown, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import ButtonSortItems from "./ButtonSortItems";

const SortButton = ({ selectedCategory, setSelectedCategory }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSortClick = useCallback((e) => {
    e.stopPropagation();
    setIsOpen((prev) => !prev);
  }, []);

  const handleClickOutside = useCallback(() => {
    setIsOpen(false);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen, handleClickOutside]);

  return (
    <div
      onClick={handleSortClick}
      className={`w-32 md:w-full transition-all duration-500 md:max-w-[140px] select-none cursor-pointer absolute md:right-0 z-50
                ${isOpen ? "bg-white rounded-xl" : "bg-transparent"}`}
    >
      <div className="flex justify-around items-center border border-hijau rounded-xl md:rounded-2xl py-[10px] mt-5 md:m-0 md:py-4">
        <button className="font-medium text-hijau text-lg" type="button">
          {selectedCategory.name}
        </button>
        {isOpen ? (
          <ChevronDown className="text-hijau w-6 h-6" strokeWidth={2.25} />
        ) : (
          <ChevronRight className="text-hijau w-6 h-6" strokeWidth={2.25} />
        )}
      </div>
      <div
        className={`${
          isOpen ? "flex translate-y-0 opacity-1" : "opacity-0 -translate-y-10"
        }
                transition-all duration-500 transform ease-in-out flex-col`}
      >
        <ButtonSortItems
          setSelectedCategory={setSelectedCategory}
          onSelect={() => setIsOpen(false)}
        />
      </div>
    </div>
  );
};

export default SortButton;
