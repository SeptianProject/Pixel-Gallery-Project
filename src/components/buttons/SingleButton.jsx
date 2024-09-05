
const SingleButton = ({ onclick, text, bgColor, txtColor, border, hovText, hovBg, hovBorder }) => {
    return (
        <button onClick={onclick} type='button'
            className={`
            text-${txtColor} 
            bg-${bgColor} w-[250px] 
            hover:text-${hovText} 
            border-${border}
            hover:bg-${hovBg} 
            hover:border-${hovBorder} 
            transition-all duration-300 
            py-3 rounded-2xl border`} >
            {text}
        </button>
    )
}

export default SingleButton