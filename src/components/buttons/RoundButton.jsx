import { useState } from "react"

const RoundButton = ({ arrButton, maxMob, }) => {
  const [select, setSelect] = useState(-1)

  const handleSelect = (index) => {
    setSelect(index)
  }

  return (
    <div className="flex flex-wrap justify-between text-center items-center md:px-0">
      {
        arrButton.map((item, index) => (
          <button
            key={index}
            onClick={() => handleSelect(index)}
            className={`${select === index
              ? 'bg-hijau text-white'
              : 'hover:border hover:border-hijau'} rounded-3xl px-8 py-[14px] h-full w-full max-w-[${maxMob}] md:max-w-[200px] mx-auto font-semibold text-center cursor-pointer my-4`} >
            {item.text}
          </button>
        ))
      }
    </div>
  )
}

export default RoundButton