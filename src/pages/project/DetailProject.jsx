import GroupDivide from "../../components/GroupDivide"
import GroupGithub from "../../components/GroupGithub"
import RoundImage from "../../components/RoundImage"
import DescriptionText from "../../components/text/DescriptionText"
import MainText from "../../components/text/MainText"

const DetailProject = () => {
    return (
        <div>
            <div className="flex flex-col mx-auto px-8 md:px-16 lg:px-20 lg:mx-auto lg:max-w-full">
                <div className="mt-16 pr-5">
                    <MainText
                        titleText='Catalog Film Website'
                    />
                </div>
                <GroupGithub />
                <RoundImage />
                <DescriptionText />
            </div>
            <div className="w-full max-w-7xl">
                <GroupDivide />
            </div>
        </div>
    )
}

export default DetailProject