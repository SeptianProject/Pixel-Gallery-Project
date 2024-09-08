import { assets } from "../../assets/assets"
import GroupDivide from "../../components/GroupDivide"
import GroupGithub from "../../components/GroupGithub"
import DescriptionText from "../../components/text/DescriptionText"
import MainText from "../../components/text/MainText"
import XButton from "../../components/buttons/XButton.jsx"

const DetailProject = () => {

    return (
        <div>
            <div className="flex flex-col mx-auto px-8 md:px-16 lg:px-20 lg:mx-auto lg:max-w-full">
                <XButton />
                <div className="mt-16 mb-10 pr-5">
                    <MainText
                        titleText='Catalog Film Website'
                    />
                </div>
                <GroupGithub />
                <div className='mt-20 mb-5 select-none'>
                    <div className='flex justify-center items-center'>
                        <img
                            src={assets.detail_image}
                            className='max-w-6xl w-full h-full'
                        />
                    </div>
                </div>
                <DescriptionText />
            </div>
            <div className="w-full max-w-7xl">
                <GroupDivide />
            </div>
        </div>
    )
}

export default DetailProject