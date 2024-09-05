import { useState } from 'react'
import { assets, userDummy } from '../../assets/assets'
import { Square, SquareCheckBig } from 'lucide-react'

const SharedButton = () => {
    const [select, setSelect] = useState({})

    const handleSelect = (id) => {
        setSelect((prev) => ({
            ...prev, [id]: !prev[id]
        }))
    }

    return (
        <div className='lg:grid lg:gap-4 md:grid-cols-2 select-none'>
            {
                userDummy.map((user, index) => (
                    <fieldset key={index}>
                        <div className='flex items-center gap-5 border border-hijau px-6 py-4 rounded-2xl my-3'>
                            <div
                                onClick={() => handleSelect(user.id)}>
                                {select[user.id] ? <SquareCheckBig size={20} strokeWidth={1.7} /> : <Square size={20} strokeWidth={1.7} />}
                            </div>
                            <div className='flex items-center gap-2 select-none'>
                                <img src={assets.photo_profile2} />
                                <h3 className='font-semibold text-dark'>
                                    {user.name}
                                </h3>
                            </div>
                        </div>
                    </fieldset>
                ))
            }
        </div>
    )
}

export default SharedButton