import { assets } from "../assets/assets"
import ProjectList from "../components/ProjectList"
import MainText from "../components/text/MainText"
import ListCards from "../components/ListCards"
import SecondaryText from "../components/text/SecondaryText"
import { BounceInLeft, BounceInRight } from "../components/animations/BounceAnimate"

const HomePage = () => {

    return (
        <div className='flex flex-col mx-auto px-14 md:pr-8 lg:px-20 lg:mx-auto lg:max-w-full'>
            <div className="mt-16 lg:flex justify-between items-center lg:mx-auto lg:max-w-full w-full">
                <BounceInRight delayVal={0.8}>
                    <div className="lg:mr-auto">
                        <MainText
                            titleText='Showcasing your finest creative project.'
                            subText='Pixel Gallery Project'
                            maxWMob={'200px'}
                            maxWTab='md'
                            maxWDesk='xl'
                        />
                        <SecondaryText
                            text='120 Websites'
                            text2='139 Design'
                            text3='12 Application'
                            gapMob="5"
                            gapTab="12"
                            gapDesk="16"
                        />
                    </div>
                </BounceInRight>
                <BounceInLeft delayVal={0.8}>
                    <div className="hidden lg:block lg:ml-auto select-none">
                        <img src={assets.home_image} />
                    </div>
                </BounceInLeft>
            </div>
            <BounceInRight delayVal={1.3} >
                <ProjectList />
            </BounceInRight>
            <ListCards />
        </div >
    )
}

export default HomePage