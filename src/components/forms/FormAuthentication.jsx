import { useState } from "react"
import { BounceInLeft } from "../animations/BounceAnimate"
import { ChevronDown } from "lucide-react"

const FormAuthentication = ({ formData }) => {
    const [selectValue, setSelectValue] = useState({})
    const [isDropdownOpen, setIsDropdownOpen] = useState({})

    const handleSelectValue = (id, value) => {
        setSelectValue((prev) => ({ ...prev, [id]: value }))
        setIsDropdownOpen((prev) => ({ ...prev, [id]: false }))
    }

    const toggleDropdown = (id) => {
        setIsDropdownOpen((prev) => ({ ...prev, [id]: !prev[id] }))
    }

    return (
        <BounceInLeft delayVal={0.5}>
            <div className="flex flex-col gap-y-5 mx-auto">
                {formData.map((field, index) => (
                    field.type === 'select' ?
                        <div key={index} className="relative">
                            <div className="border flex justify-between border-hijau rounded-xl pl-5 pr-16 lg:pr-72 py-3 cursor-pointer font-medium text-dark text-opacity-75"
                                onClick={() => toggleDropdown(field.id)}>
                                {selectValue[field.id] || field.placeholder}
                            </div>
                            <div
                                onClick={() => toggleDropdown(field.id)}
                                className="absolute right-10 inset-y-3 cursor-pointer">
                                <ChevronDown size={25} strokeWidth={1.5} className="text-dark text-opacity-75" />
                            </div>
                            {isDropdownOpen[field.id] && (
                                <div className="absolute z-10 bg-white border border-hijau rounded-lg mt-2 w-full max-h-48 overflow-y-auto">
                                    {field.option.map((optionValue, optionIndex) => (
                                        <div
                                            className="px-4 py-3 hover:bg-hijau hover:text-white cursor-pointer text-dark font-medium"
                                            key={optionIndex}
                                            onClick={() => handleSelectValue(field.id, optionValue)}>
                                            {optionValue}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                        :
                        <input
                            key={index}
                            placeholder={`${field.placeholder}`}
                            className='border border-hijau font-normal text-dark text-opacity-75
                    py-3 px-5 w-[300px] md:w-[400px] rounded-xl focus:outline-hijau outline-1
                    transition-all duration-500 ease-in-out' />
                ))}
            </div>
        </BounceInLeft>
    )
}

export default FormAuthentication