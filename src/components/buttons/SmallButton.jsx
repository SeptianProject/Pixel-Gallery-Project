
const SmallButton = ({ text, onClick }) => {
    return (
        <>
            <button
                onClick={onClick}
                className='bg-white text-hijau hover:bg-hijau hover:text-white transition-all duration-300 text-sm rounded-xl font-semibold py-1 w-20'>
                {text}
            </button>
        </>
    )
}

export default SmallButton