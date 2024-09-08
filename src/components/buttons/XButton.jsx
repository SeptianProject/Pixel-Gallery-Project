import { X } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const XButton = () => {
    const navigate = useNavigate()

    return (
        <div className="relative mt-10">
            <X
                onClick={() => navigate(-1)}
                className="cursor-pointer absolute right-0 top-0 size-10 text-dark
                    transition-all duration-700 p-0 m-0 ease-in-out
                    hover:rotate-180 " />
        </div>
    )
}

export default XButton