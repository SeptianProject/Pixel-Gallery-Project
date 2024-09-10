import { assets } from '../../assets/assets'

const StackImage = () => {
    return (
        <div className='relative'>
            <div className='flex flex-col items-center justify-center'>
                <div className=''>
                    <img
                        src={assets.image_stack}
                        className='sm:h-60 sm:w-screen md:h-[350px] md:w-screen sm:object-cover rounded-3xl brightness-50 z-0' />
                </div>
                <div className='absolute -bottom-12'>
                    <img
                        src={assets.photo_profile}
                        className='size-36' />
                </div>
            </div>
        </div>
    )
}

export default StackImage