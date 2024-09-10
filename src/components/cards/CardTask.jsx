import { AlarmClock } from "lucide-react"
import { assets } from "../../assets/assets"
import { useNavigate } from "react-router-dom"
import { BounceInTop } from "../animations/BounceAnimate"


const CardTask = () => {
    const navigate = useNavigate()

    return (
        <BounceInTop delayVal={0.5}>
            <div
                onClick={() => navigate('/task/detail')}
                className="flex flex-col mb-10 cursor-pointer">
                <div className="relative h-auto max-w-[350px] md:max-w-[380px] lg:max-w-[400px]">
                    {/* image */}
                    <div className="">
                        <img src={assets.home_image} className="w-full" />
                    </div>
                    {/* bottom */}
                    <div className="absolute w-full bottom-0 h-1/2 flex items-center justify-between px-5 bg-white border-dark border-opacity-40 border rounded-b-3xl">
                        {/* Typography */}
                        <div className="flex flex-col gap-y-2">
                            <h1 className="text-dark font-bold text-sm md:text-md max-w-40 md:max-w-[250px] ">
                                Creating Login & Register pages from flutter
                            </h1>
                            <div className="flex items-center gap-x-2">
                                <AlarmClock size={17} />
                                <span className="text-xs md:text-sm text-normal">21 September 2050</span>
                            </div>
                        </div>
                        {/* button group */}
                        <div className="flex flex-col gap-y-1">
                            <div className="">
                                <button className="bg-hijau text-sm font-normal text-white py-2 px-5 w-full h-full rounded-xl">Selesai</button>
                            </div>
                            <div
                                onClick={() => navigate('/project/detail')}
                            >
                                <button className="bg-white text-hijau border-hijau hover:bg-hijau hover:text-white transition-all duration-300 border text-sm font-normal py-2 px-5 w-full rounded-xl">Detail</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex items-center mt-4 gap-4'>
                    <img src={assets.photo_profile2} className='h-8 w-auto' />
                    <h4 className='text-dark font-semibold text-base'>Nugraha Jati Utama</h4>
                </div>
            </div>
        </BounceInTop>
    )
}

export default CardTask