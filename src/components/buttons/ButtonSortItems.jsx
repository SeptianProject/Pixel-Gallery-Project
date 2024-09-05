import { sortItems } from '../../assets/assets'

const ButtonSortItems = () => {
    return (
        <>
            {sortItems.map((item, index) => (
                <div
                    key={index}
                    className="flex justify-center items-center border border-hijau py-3 md:py-5 rounded-2xl mt-2">
                    <button className=''>
                        {item.category}
                    </button>
                </div>
            ))}
        </>
    )
}

export default ButtonSortItems