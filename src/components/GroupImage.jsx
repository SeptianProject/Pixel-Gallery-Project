import { assets } from "../assets/assets"

const GroupImage = () => {
    return (
        <>
            <img src={assets.image_stack} className="h-full w-auto rounded-3xl brightness-50 md:h-64 md:object-cover md:w-full"></img>
            <div className='absolute inset-y-1/4 flex flex-col text-center items-center md:'>
                <h1 className='text-white text-2xl font-semibold tracking-wide md:text-5xl'>Upload your project!</h1>
                <p className='w-full max-w-[245px] text-white opacity-70 text-xs font-light mt-4 md:max-w-md md:text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur hahahah adipiscing.</p>
            </div>
        </>
    )
}

export default GroupImage