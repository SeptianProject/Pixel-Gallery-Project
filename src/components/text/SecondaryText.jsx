const SecondaryText = ({ gapMob, gapTab, gapDesk, text, text2, text3, textMd, fontMd }) => {
    return (
        <div className={`mt-2 flex flex-row gap-${gapMob} md:gap-${gapTab} lg:gap-${gapDesk}`} >
            <p className={`text-secondary text-xs font-normal md:text-${textMd} md:font-${fontMd}`}>
                {text}
            </p>
            <p className="text-secondary text-xs font-normal">
                {text2}
            </p>
            <p className="text-secondary text-xs font-normal">
                {text3}
            </p>
        </div>
    )
}

export default SecondaryText