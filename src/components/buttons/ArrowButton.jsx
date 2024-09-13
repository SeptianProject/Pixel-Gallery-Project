import { ChevronLeftCircle, ChevronRightCircle } from 'lucide-react'

const ArrowButton = ({ onClickLeft, onClickRight }) => {
    return (
        <div className="flex items-center gap-x-1">
            <ChevronLeftCircle
                onClick={onClickLeft}
                className="text-dark hover:text-white rounded-full hover:bg-hijau cursor-pointer transition-all duration-300"
                size={50}
                strokeWidth={1} />
            <ChevronRightCircle
                onClick={onClickRight}
                className="text-dark hover:text-white rounded-full hover:bg-hijau cursor-pointer transition-all duration-300"
                size={50}
                strokeWidth={1} />
        </div>
    )
}

export default ArrowButton