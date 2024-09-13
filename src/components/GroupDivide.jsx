import { assets } from '../assets/assets'
import CardDetailAction from './cards/CardDetailAction'
import ArrowButton from './buttons/ArrowButton'
import { useState } from 'react';

const GroupDivide = () => {
    const [arrowClick, setArrowClick] = useState(0);
    const minClick = -1;
    const maxClick = 0;

    const handleArrowClick = (direction) => {
        if (direction === 'left' && arrowClick > minClick || arrowClick === maxClick) {
            setArrowClick(arrowClick - 1);
        } else if (direction === 'right' && arrowClick < maxClick || arrowClick === minClick) {
            setArrowClick(arrowClick + 1);
        }
    }

    return (
        <div className='my-10'>
            <div>
                <div className='flex relative justify-center items-center'>
                    <img
                        src={assets.photo_profile}
                        className='w-12 h-12 z-10 md:w-16 md:h-16 select-none'
                    />
                    <div className='container absolute bg-secondary bg-opacity-20 w-full h-[2px] max-w-7xl'>
                    </div>
                </div>
                <div className='flex flex-col justify-center items-center mt-3'>
                    <h1 className='text-dark text-lg tracking-wide'>Catalog Film Website</h1>
                    <p className='text-secondary text-[10px]'>Published on 19/08/2029</p>
                </div>
                <div className='flex items-center justify-center md:justify-between gap-x-5 mt-6 md:max-w-2xl lg:max-w-[70rem] mx-auto'>
                    <h1 className='text-dark font-semibold text-2xl'>More From Nasyfas</h1>
                    <div>
                        <ArrowButton
                            onClickLeft={() => handleArrowClick('left')}
                            onClickRight={() => handleArrowClick('right')}
                        />
                    </div>
                </div>
                <div className='flex flex-col items-center md:grid md:grid-cols-2 lg:grid-cols-3 md:px-10 lg:px-16 select-none'>
                    {arrowClick === 0 ?
                        <>
                            <CardDetailAction />
                            <CardDetailAction />
                            <CardDetailAction />
                        </>
                        :
                        <>
                            <CardDetailAction />
                            <CardDetailAction />
                            <CardDetailAction />
                            <CardDetailAction />
                            <CardDetailAction />
                        </>
                    }
                </div>
            </div>
        </div>
    )
}

export default GroupDivide