import { ChevronLeft, ChevronRight } from 'lucide-react'
import { assets } from '../assets/assets'
import CardStackWhite from './cards/CardStackWhite'
import { useNavigate } from 'react-router-dom'

const GroupDivide = () => {
    const navigate = useNavigate()

    return (
        <div className='my-10'>
            <div>
                <div className='flex relative justify-center items-center'>
                    <img
                        src={assets.photo_profile}
                        className='w-12 h-12 z-10 md:w-16 md:h-16'
                    />
                    <div className='container absolute bg-secondary bg-opacity-20 w-full h-[2px] max-w-7xl'>
                    </div>
                </div>
                <div className='flex flex-col justify-center items-center mt-3'>
                    <h1 className='text-dark text-lg tracking-wide'>Catalog Film Website</h1>
                    <p className='text-secondary text-[10px]'>Published on 19/08/2029</p>
                </div>
                <div className='flex items-center justify-center md:justify-between gap-x-5 mt-6 md:max-w-2xl lg:max-w-[70rem] mx-auto'>
                    <h1 className='text-dark font-semibold text-2xl'>More From Nasyfas</h1>
                    <div className='flex items-center gap-x-2'>
                        <button
                            onClick={() => navigate(-1)}
                            className='rounded-full border border-hijau hover:bg-hijau hover:text-white transition-all duration-300  p-3'>
                            <ChevronLeft className='' />
                        </button>
                        <button
                            onClick={() => navigate(1)}
                            className='rounded-full border border-hijau p-3  hover:bg-hijau hover:text-white transition-all duration-300'>
                            <ChevronRight />
                        </button>
                    </div>
                </div>
                <div className='md:grid md:grid-cols-2 lg:grid-cols-3 mx-auto md:px-10 lg:px-16'>
                    <CardStackWhite />
                    <CardStackWhite />
                    <CardStackWhite />
                </div>
            </div>
        </div>
    )
}

export default GroupDivide