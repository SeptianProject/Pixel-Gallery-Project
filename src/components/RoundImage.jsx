import { assets } from '../assets/assets'

const RoundImage = () => {
    return (
        <div className='mt-14 mb-2'>
            <div className='flex justify-center items-center'>
                <img
                    src={assets.detail_image}
                    className='max-w-6xl w-full h-full'
                />
            </div>
        </div>
    )
}

export default RoundImage