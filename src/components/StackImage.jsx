import { assets } from '../assets/assets'

const StackImage = () => {
    return (
        <div className='relative'>
            <div className='flex flex-col items-center justify-center'>
                <div className=''>
                    <img
                        src={assets.image_stack}
                        className='md:h-[350px] md:w-screen md:bg-cover md:bg-center md:bg-no-repeat rounded-3xl brightness-50 z-0' />
                </div>
                <div className='absolute -bottom-12'>
                    <img
                        src={assets.photo_profile}
                        className='h-[120px] w-[120px]' />
                </div>
            </div>
        </div>
    )
}

export default StackImage