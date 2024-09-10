import { useRef, useState } from "react"

const RoundButton = ({ arrButton, maxMob, }) => {
  const ref = useRef()
  const [select, setSelect] = useState(-1)
  const [maxWMob, setMaxWMob] = useState(ref)

  const handleMaxWidth = () => {
    if (window.innerWidth <= 430) {
      setMaxWMob(maxMob)
    }
  }

  const handleSelect = (index) => {
    setSelect(index)
  }

  return (
    <div
      ref={handleMaxWidth}
      className="flex flex-wrap justify-between text-center items-center" >
      {
        arrButton.map((item, index) => (
          <button
            key={index}
            onClick={() => handleSelect(index)}
            className={`${select === index
              ? 'bg-hijau text-white'
              : 'hover:border hover:border-hijau'} rounded-3xl px-8 py-[14px] h-full w-full ${maxWMob} md:max-w-[200px] mx-auto font-semibold text-center my-4`} >
            {item.text}
          </button>
        ))
      }
    </div >
  )
}

export default RoundButton