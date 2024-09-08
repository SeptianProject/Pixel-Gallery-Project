import { assets } from "../../assets/assets"
import SmallButton from "../buttons/SmallButton"

const CardStackWhite = () => {
    return (
        <div className="">
            <div className='relative group cursor-default flex justify-center flex-wrap mt-5'>
                <div className='relative group-hover:brightness-50 transition-all duration-500 ease-in-out'>
                    <img
                        src={assets.card_image}
                        className='w-80 md:w-[21rem] h-auto rounded-3xl'
                    />
                </div>
                <div className="opacity-0 -top-5 group-hover:top-5 group-hover:opacity-100 transition-all duration-500 ease-in-out absolute z-50 flex flex-col gap-y-3 items-center">
                    <div className="text-center">
                        <h3 className="text-lg font-medium text-white">Catalog Film Website</h3>
                        <p className="text-sm font-medium text-white">Detail from project</p>
                    </div>
                    <div className="flex flex-col gap-y-1">
                        <SmallButton text='Update' />
                        <SmallButton text='Delete' />
                        <SmallButton text='Detail' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardStackWhite