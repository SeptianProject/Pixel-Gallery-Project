import MainText from "../../components/text/MainText"
import { projectButtons } from "../../assets/assets"
import RoundButton from "../../components/buttons/RoundButton"
import SecondaryText from "../../components/text/SecondaryText"
import ListCardProjects from "../../components/list-cards/ListCardProjects"
import { BounceInBottom, BounceInRight, BounceInTop } from "../../components/animations/BounceAnimate"

const ProjectPage = () => {
    return (
        <div className='flex flex-col mx-auto px-14 lg:px-20 lg:mx-auto lg:max-w-full'>
            <div className="mt-20 lg:px-60">
                <div className="flex flex-col items-center text-center gap-y-5">
                    <BounceInTop delayVal={0.5}>
                        <MainText
                            titleText='Showcasing your finest creative project.'
                            subText='Pixel Gallery Project'
                        />
                    </BounceInTop>
                    <BounceInRight delayVal={1}>
                        <SecondaryText
                            text='120 Websites'
                            text2='139 Design'
                            text3='12 Application'
                            gapMob="5"
                            gapTab="14"
                            gapDesk="16"
                        />
                    </BounceInRight>
                </div>
            </div>
            <BounceInBottom delayVal={1.5}>
                <div className="max-w-7xl my-16">
                    <RoundButton
                        arrButton={projectButtons}
                        maxMob='max-w-[150px]'
                    />
                </div>
            </BounceInBottom>
            <ListCardProjects />
        </div>
    )
}

export default ProjectPage