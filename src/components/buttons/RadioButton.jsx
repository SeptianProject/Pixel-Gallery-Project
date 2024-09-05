import { useState } from "react"
import { radioItems } from "../../assets/assets"

const RadioButton = () => {
    const [selectRadio, setSelectRadio] = useState(null)

    const handleSelectRadio = (id) => {
        setSelectRadio(id)
    }

    return (
        <div className='grid grid-cols-3 gap-10'>
            {
                radioItems.map((item, index) => (
                    <div
                        key={index}
                        onClick={() => handleSelectRadio(item.id)}
                        className={`flex group cursor-pointer hover:shadow-bottom-green hover:transition-all items-center gap-x-5 border  duration-700 ease-in-out border-hijau rounded-2xl w-[300px] py-4
                                ${selectRadio === item.id ? '' : ''}`}>
                        <input
                            type='radio'
                            id={`radio-${item.id}`}
                            checked={selectRadio === item.id}
                            onChange={() => handleSelectRadio(item.id)}
                            className="hidden"
                        />
                        <label
                            htmlFor={`radio-${item.id}`}
                            className={`cursor-pointer group relative flex ml-5 items-center justify-center w-5 h-5 rounded-full border
                                group-hover:bg-white group-hover:border-hijau group-hover:transition-all duration-700
                                ${selectRadio === item.id ? 'bg-white border-hijau' : 'border-hijau'}`}
                        >
                            {selectRadio === item.id && (
                                <div className="w-3 h-3 bg-hijau rounded-full group-hover:bg-hijau group-hover:transition-all duration-700"></div>
                            )}
                        </label>
                        <button
                            className="ml-3">{item.label}</button>
                    </div>
                ))
            }
        </div>
    )
}

export default RadioButton