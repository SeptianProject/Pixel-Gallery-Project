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
            className={`w-32 md:w-[200px] transition-all duration-300 md:max-w-40 select-none cursor-pointer absolute md:right-0 z-50
                ${sortCLick ? 'bg-white' : 'bg-transparent'}`}>
            <div className="flex justify-around items-center border border-hijau rounded-2xl py-[10px] mt-5 md:m-auto md:py-5" >
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