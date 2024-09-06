import { useRef, useState } from "react"

const SingleButton = ({ onclick, text, bgColor, txtColor, border, hovText, hovBg, hovBorder }) => {
    const ref = useRef
    const [maxMob, setMaxMob] = useState(ref)

    const handleMaxWidth = () => {
        if (window.innerWidth <= 430) {
            setMaxMob(maxMob)
        } else {
            return
        }
    }

    return (
        <button
            ref={handleMaxWidth}
            onClick={onclick} type='button'
            className={`
            text-${txtColor} 
            bg-${bgColor} 
            w-full
            lg:w-80
            lg:py-3
            hover:text-${hovText} 
            border-${border}
            hover:bg-${hovBg} 
            hover:border-${hovBorder} 
            transition-all duration-300
            py-4 rounded-2xl border`} >
            {text}
        </button>
    )
}

export default SingleButton