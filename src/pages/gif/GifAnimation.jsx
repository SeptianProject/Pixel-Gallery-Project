import { assets } from '../../assets/assets'

const GifAnimation = ({ title, subtitle, gif }) => {
    return (
        <div className='min-h-screen overflow-hidden'>
            <div className='flex flex-col place-items-center'>
                {/* gif */}
                <div className='mt-24'>
                    <img src={assets.home_image} />
                    {gif}
                </div>
                {/* text */}
                <div className='text-center mt-20'>
                    <h1 className='tex-dark font-extrabold text-4xl tracking-wide'>
                        Hello Nasyfa, Welcome to Pixel
                        {title}
                    </h1>
                    <p className='text-dark font-normal text-lg tracking-wide'>
                        Hang in there, your account is getting set up!
                        {subtitle}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default GifAnimation