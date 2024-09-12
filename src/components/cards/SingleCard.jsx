

const SingleCard = ({ projectInfoList }) => {
    return (
        <div className='bg-white shadow-right md:w-[300px] rounded-2xl py-10 px-6'>
            <div className='flex flex-col gap-y-3'>
                <div>
                    <h3 className='text-dark font-bold text-3xl'>Project Info</h3>
                </div>
                {
                    projectInfoList.map((item, index) => (
                        <div
                            key={index}
                            className='flex flex-col gap-y-3'>
                            <h5 className='text-dark text-xl font-normal flex '>
                                {item.title}
                                <span className='mx-auto'>:</span>
                                <span> {item.value} </span>
                            </h5>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default SingleCard