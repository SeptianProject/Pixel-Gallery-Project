import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { BounceInBottom, BounceInTop } from "./animations/BounceAnimate"


const GifComponent = ({ title, subtitle, gif }) => {
    const navigate = useNavigate()
    const [showGif, setShowGif] = useState(true)

    useEffect(() => {
        const gifDuration = 3000

        const timer = setTimeout(() => {
            setShowGif(false)
        }, gifDuration)

        if (!showGif) {
            navigate('/home')
            clearTimeout(timer)
        }
    })

    return (
        <div className='min-h-screen overflow-hidden'>
            <div className='flex flex-col items-center'>
                {/* gif */}
                <div className='mt-32 md:mt-5'>
                    {showGif ? <img src={gif} /> : ''}
                </div>
                {/* text */}
                <div className='text-center mt-6'>
                    <BounceInTop delayVal={0.5}>
                        <h1 className='text-dark w-60 mx-auto font-extrabold text-2xl md:w-auto md:text-5xl md:max-w-lg lg:max-w-full tracking-wide'>
                            {showGif ? title : ''}
                        </h1>
                    </BounceInTop>
                    <BounceInBottom delayVal={1}>
                        <p className='text-dark w-60 mx-auto mt-3 font-medium text-base md:w-auto md:text-xl tracking-wide'>
                            {showGif ? subtitle : ''}
                        </p>
                    </BounceInBottom>
                </div>
            </div>
        </div>
    )
}

export default GifComponent