import { ChevronDown, ChevronRight } from "lucide-react"
import { useState } from "react"
import ButtonSortItems from "./ButtonSortItems"

const SortButton = () => {
    const [sortCLick, setSortClick] = useState(false)

    const handleSortClick = () => {
        setSortClick(!sortCLick)
    }

    return (
        <div
            onClick={handleSortClick}
            className={`w-32 md:w-full transition-all duration-500 md:max-w-[140px] select-none cursor-pointer absolute md:right-0 z-50
                ${sortCLick ? 'bg-white rounded-xl' : 'bg-transparent'}`}>
            <div className="flex justify-around items-center border border-hijau rounded-xl md:rounded-2xl py-[10px] mt-5 md:m-0 md:py-4" >
                <button className="font-medium text-hijau text-lg" type="button">Sort</button>
                {sortCLick ? <ChevronDown
                    className="text-hijau w-6 h-6" strokeWidth={2.25} />
                    : <ChevronRight
                        className="text-hijau w-6 h-6" strokeWidth={2.25} />
                }
            </div>
            <div
                className={`${sortCLick ? 'flex translate-y-0 opacity-1' : 'opacity-0 -translate-y-10'}
                transition-all duration-500 transform ease-in-out flex-col`} >
                <ButtonSortItems />
            </div>
        </div>
    )
}

export default SortButton

// item.type === 'select' ? (
//     <div className="relative">
//         {/* Div untuk custom dropdown */}
//         <div
//             className="border border-hijau rounded-2xl pl-7 pr-16 lg:pr-72 py-4 cursor-pointer"
//             onClick={() => setSelectedValue((prev) => ({
//                 ...prev,
//                 [item.id]: !prev[item.id]  // toggle dropdown
//             }))}>
//             {selectedValue[item.id] || item.placeholder}
//         </div>
//         {selectedValue[item.id] && (
//             <div className="absolute z-10 bg-white border border-hijau rounded-lg mt-2 w-full max-h-48 overflow-y-auto">
//                 {item.option.map((optionValue, optionIndex) => (
//                     <div
//                         key={optionIndex}
//                         className="px-4 py-2 hover:bg-hijau hover:text-white cursor-pointer"
//                         onClick={() => handleSelectChange(item.id, optionValue)}>
//                         {optionValue}
//                     </div>
//                 ))}
//             </div>
//         )}
//     </div>