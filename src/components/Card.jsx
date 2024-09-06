import { assets } from '../assets/assets'
import { BounceInTop } from './animations/BounceAnimate'

const Card = () => {
    return (
        <BounceInTop>
            <div className='flex flex-col pt-12 select-none'>
                <div className='relative group rounded-2xl hover:shadow-bottom-dark hover:border-transparent hover:border-b transition-all duration-300'>
                    <img
                        src={assets.card_image}
                        className='aspect-video'
                    />
                    <div className='absolute rounded-b-2xl bottom-0 right-0 from-dark bg-gradient-to-t w-full h-1/2 to-transparent transition-all duration-300 opacity-0 group-hover:opacity-100'>
                    </div>
                    <div className='opacity-0 group-hover:opacity-100 flex absolute bottom-0 h-10'>
                        <h1 className='pl-6 text-white'>Pixel Gallery Project</h1>
                    </div>
                </div>
                <div className='flex items-center mt-4 gap-4'>
                    <img src={assets.photo_profile} className='h-8 w-auto block lg:hidden' />
                    <img src={assets.photo_profile2} className='h-8 w-auto hidden lg:block' />
                    <h4 className='text-dark font-semibold text-base'>Nugraha Jati Utama</h4>
                </div>
            </div>
        </BounceInTop>
    )
}

export default Card