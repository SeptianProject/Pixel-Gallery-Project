import MainText from "../../components/text/MainText"
import { projectButtons } from "../../assets/assets"
import RoundButton from "../../components/buttons/RoundButton"
import SecondaryText from "../../components/text/SecondaryText"
import ListCardProjects from "../../components/list-cards/ListCardProjects"

const ProjectPage = () => {
    return (
        <div className='flex flex-col mx-auto px-14 lg:px-20 lg:mx-auto lg:max-w-full'>
            <div className="mt-20 lg:px-60">
                <div className="flex flex-col items-center text-center">
                    <MainText
                        titleText='Showcasing your finest creative project.'
                        subText='Pixel Gallery Project'
                    />
                    <SecondaryText
                        text='120 Websites'
                        text2='139 Design'
                        text3='12 Application'
                        gapMob="5"
                        gapTab="14"
                        gapDesk="16"
                    />
                </div>
            </div>
            <div className="max-w-7xl my-20">
                <RoundButton
                    arrButton={projectButtons}
                    maxMob='max-w-[150px]'
                />
            </div>
            <ListCardProjects />
        </div>
    )
}

export default ProjectPage