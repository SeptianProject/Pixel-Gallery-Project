import { ChevronDown } from "lucide-react";
import { useState } from "react";

const FormFieldItems = ({ formData, formFields, changeHandler }) => {
  const [selectValue, setSelectValue] = useState({});
  const [isDropdownOpen, setIsDropdownOpen] = useState({});

  const handleSelectValue = (id, value) => {
    setSelectValue((prev) => ({ ...prev, [id]: value }));
    setIsDropdownOpen((prev) => ({ ...prev, [id]: false }));
  };

  const toggleDropdown = (id) => {
    setIsDropdownOpen((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="flex flex-wrap flex-col mx-auto gap-5 w-full lg:flex-row">
      {formFields.map((item, index) => (
        <div
          key={index}
          className="w-full relative flex flex-col gap-2 lg:mx-auto lg:w-[550px]"
        >
          <label
            htmlFor={item.id}
            className="text-dark opacity-75 font-bold text-lg"
          >
            {item.title}
          </label>
          {
            item.type === "select" ? (
              <div className="relative">
                <div
                  className="border flex justify-between border-hijau rounded-2xl pl-7 pr-16 lg:pr-72 py-4 cursor-pointer"
                  onClick={() => toggleDropdown(item.id)}
                >
                  {selectValue[item.id] || item.placeholder || item.value}
                </div>
                <div
                  onClick={() => toggleDropdown(item.id)}
                  className="absolute right-10 inset-y-4 cursor-pointer"
                >
                  <ChevronDown
                    size={30}
                    strokeWidth={1.5}
                    className="text-dark"
                  />
                </div>
                {isDropdownOpen[item.id] && (
                  <div className="absolute z-10 bg-white border border-hijau rounded-lg mt-2 w-full max-h-48 overflow-y-auto">
                    {item.option.map((optionValue, optionIndex) => (
                      <div
                        className="px-4 py-2 hover:bg-hijau hover:text-white cursor-pointer"
                        key={optionIndex}
                        onClick={() => handleSelectValue(item.id, optionValue)}
                      >
                        {optionValue}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ) : item.type === "textArea" ? (
              <textarea
                id={item.id}
                name={item.id}
                placeholder={item.placeholder}
                className="border border-hijau focus:border-hijau rounded-2xl pl-7 pr-16 lg:pr-72 py-4 placeholder:text-dark placeholder:opacity-70 placeholder:text-sm overflow-y-auto resize-y break-words"
              />
            ) : item.blocked === true ? (
              <input
                id={item.id}
                name={item.id}
                value={item?.value}
                type="text"
                disabled={true}
                placeholder={item.placeholder}
                className="border border-hijau rounded-2xl pl-7 pr-16  py-4 placeholder:text-dark bg-dark bg-opacity-30 placeholder:opacity-80 placeholder:text-sm font-medium"
              />
            ) : (
              <input
                id={item.id}
                name={item.id}
                value={formData ? formData[item.value] || "" : ""}
                required={item.required}
                type="text"
                onChange={changeHandler ? changeHandler : ""}
                className="border border-hijau rounded-2xl pl-7 pr-16 py-4 placeholder:text-dark placeholder:opacity-70 placeholder:text-sm font-normal"
              />
            )
            // : (
            //   <input
            //     id={item.id}
            //     name={item.id}
            //     value={item?.value}
            //     type="text"
            //     onChange={changeHandler}
            //     className="border border-hijau rounded-2xl pl-7 pr-16 py-4 placeholder:text-dark placeholder:opacity-70 placeholder:text-sm font-normal"
            //   />
            // )
          }
        </div>
      ))}
    </div>
  );
};

export default FormFieldItems;
