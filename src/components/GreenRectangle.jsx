import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"

const GreenRectangle = () => {
    const location = useLocation()
    const [rectangleValue, setRectangleValue] = useState(false)

    const handleRectangleValue = () => {
        if (location.pathname === '/login') {
            setRectangleValue(true)
        } else {
            setRectangleValue(false)
        }
    }

    useEffect(() => {
        handleRectangleValue()
    })

    return (
        <>
            {
                rectangleValue
                    ?
                    <div>
                        <div className="absolute right-0 top-10">
                            <div className="bg-hijau w-[125px] h-14"></div>
                        </div>
                        <div className="absolute right-0 bottom-24">
                            <div className="bg-hijau w-[125px] h-14"></div>
                        </div>
                    </div>
                    :
                    <div>
                        <div className="absolute right-0 top-10">
                            <div className="bg-hijau w-[125px] h-14"></div>
                        </div>
                    </div>
            }
        </>
    )
}

export default GreenRectangle