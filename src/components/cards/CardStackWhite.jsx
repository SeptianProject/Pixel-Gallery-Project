import { assets } from "../../assets/assets"

const CardStackWhite = () => {
    return (
        <>
            <div className='relative flex justify-center flex-wrap mt-5'>
                <div className='relative'>
                    <img
                        src={assets.image2}
                        className='w-80 md:w-[21rem] h-auto lg:w-auto'
                    />
                    <div className='bg-white bg-opacity-30 blur-xl absolute bottom-0 z-10 w-full h-1/4'></div>
                </div>
                <h3 className='absolute bottom-0 left-20 md:left-12 lg:left-10 text-white mb-6 z-50'>Catalog Film Website</h3>
            </div>
        </>
    )
}

export default CardStackWhite