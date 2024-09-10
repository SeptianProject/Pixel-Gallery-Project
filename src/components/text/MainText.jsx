import { useRef, useState } from "react"

const MainText = ({ titleText, subText, maxWMob, maxWTab, maxWDesk }) => {
    const ref = useRef()
    const [maxMob, setMaxMob] = useState(ref);
    const [maxTab, setMaxTab] = useState(ref);
    const [maxDesk, setMaxDesk] = useState(ref);

    const handleMaxWidth = () => {
        if (window.innerWidth <= 430) {
            setMaxMob(maxWMob)
        } else if (window.innerWidth <= 784) {
            setMaxTab(maxWTab)
        } else {
            setMaxDesk(maxWDesk)
        }
    }

    return (
        <div ref={handleMaxWidth}>
            <h4 className='text-dark text-2xl font-extrabold mb-2 md:text-3xl'>
                {subText}
            </h4>
            <h1 className={`text-dark text-4xl font-extrabold leading-snug md:leading-tight md:text-5xl ${maxMob} ${maxTab} ${maxDesk}`}>
                {titleText}
            </h1>
        </div>
    )
}

export default MainText