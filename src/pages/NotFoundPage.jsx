import { CircleAlert } from 'lucide-react'

const NotFoundPage = () => {
    return (
        <div className='bg-white container m-auto'>
            <div className='relative w-full max-w-screen-lg min-h-screen'>
                <div className='absolute w-full h-full flex flex-col gap-5 justify-center items-center'>
                    <CircleAlert className='h-10 md:h-12 lg:h-16 w-auto' />
                    <h1 className='font-extrabold text-3xl md:text-5xl lg:text-6xl text-dark'>Not Found Broh</h1>
                </div>
            </div>
        </div>
    )
}

export default NotFoundPage 