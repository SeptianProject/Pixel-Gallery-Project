
const MainText = ({ titleText, subText, maxWMob, maxWTab, maxWDesk }) => {

    return (
        <div>
            <h4 className='text-dark text-2xl font-extrabold mb-2 md:text-3xl'>
                {subText}
            </h4>
            <h1 className={`text-dark text-4xl font-extrabold leading-snug md:leading-tight max-w-[${maxWMob}] md:max-w-${maxWTab} lg:max-w-${maxWDesk} md:text-5xl`}>
                {titleText}
            </h1>
        </div>
    )
}

export default MainText