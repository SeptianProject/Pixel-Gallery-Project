import { assets } from '../assets/assets'

const GroupGithub = () => {
    return (
        <div className="flex items-center mt-4">
            <div className='flex gap-x-3 mr-auto'>
                <div>
                    <img src={assets.photo_profile} className='h-10 w-10 md:h-14 md:w-14' />
                </div>
                <div className='flex flex-col justify-center'>
                    <h3 className='text-dark text-base font-bold md:text-lg'>Septianzz A.</h3>
                    <p className='text-secondary text-xs font-semibold'>Mobile Dev</p>
                </div>
            </div>
            <div className='flex gap-x-3 ml-auto items-center'>
                <div className=''>
                    <img src={assets.github_icon} className='border border-hijau rounded-2xl p-2 md:p-4' />
                </div>
                <div className='border border-hijau rounded-xl hover:bg-hijau transition-all duration-500'>
                    <p className='text-hijau text-center p-3 text-sm md:py-5 md:px-6 hover:text-white transition-all duration-500'>Visit Website</p>
                </div>
            </div>
        </div >
    )
}

export default GroupGithub