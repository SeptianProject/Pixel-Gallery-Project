import { useEffect, useState } from 'react'
import { assets, userDummies } from '../../assets/assets'
import { Square, SquareCheckBig } from 'lucide-react'
import { BounceInBottom, BounceInLeft } from '../animations/BounceAnimate'

const SharedButton = () => {
    const [select, setSelect] = useState({})
    const [isMobile, setIsMobile] = useState(false)

    const handleSelect = (id) => {
        setSelect((prev) => ({
            ...prev, [id]: !prev[id]
        }))
    }

    const handleResize = () => {
        if (window.innerWidth <= 784) {
            setIsMobile(true)
        } else {
            setIsMobile(false)
        }
    }

    useEffect(() => {
        handleResize()
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return (
        <div className='lg:grid lg:gap-4 lg:grid-cols-2 select-none'>
            {
                userDummies.map((user, index) => (
                    isMobile
                        ?
                        <BounceInLeft key={index} delayVal={index * 0.5}>
                            <div className='flex items-center gap-5 border border-hijau px-6 py-4 rounded-2xl my-3'>
                                <div
                                    onClick={() => handleSelect(user.id)} className='text-hijau'>
                                    {select[user.id] ? <SquareCheckBig size={20} strokeWidth={1.7} /> : <Square size={20} strokeWidth={1.7} />}
                                </div>
                                <div className='flex items-center gap-2 select-none'>
                                    <img src={assets.photo_profile2} />
                                    <h3 className='font-semibold text-dark'>
                                        {user.name}
                                    </h3>
                                </div>
                            </div>
                        </BounceInLeft>
                        :
                        <BounceInBottom key={index} delayVal={index * 0.5}>
                            <div className='flex items-center gap-5 border border-hijau px-6 py-4 rounded-2xl my-3'>
                                <div
                                    onClick={() => handleSelect(user.id)} className='text-hijau'>
                                    {select[user.id] ? <SquareCheckBig size={20} strokeWidth={1.7} /> : <Square size={20} strokeWidth={1.7} />}
                                </div>
                                <div className='flex items-center gap-2 select-none'>
                                    <img src={assets.photo_profile2} />
                                    <h3 className='font-semibold text-dark'>
                                        {user.name}
                                    </h3>
                                </div>
                            </div>
                        </BounceInBottom>
                ))
            }
        </div>
    )
}

export default SharedButton