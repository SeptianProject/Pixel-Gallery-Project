import { assets } from "../../assets/assets"

const GroupImage = ({ title, subtitle }) => {
    return (
        <>
            <div>
                <img src={assets.image_stack} className="h-full w-auto rounded-3xl brightness-50 md:h-64 md:object-cover md:w-full" />
            </div>
            <div className='absolute inset-y-1/4 flex flex-col text-center items-center md:'>
                <h1 className='text-white text-2xl font-semibold tracking-wide md:text-5xl'>
                    {title}
                </h1>
                <p className='w-full max-w-[245px] text-white opacity-70 text-xs font-light mt-4 md:max-w-md md:text-base'>
                    {subtitle}
                </p>
            </div>
        </>
    )
}

export default GroupImage