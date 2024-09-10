import { assets } from "../assets/assets"
import MainText from "../components/text/MainText"
import SecondaryText from "../components/text/SecondaryText"
import { BounceInLeft, BounceInRight, BounceInTop } from "../components/animations/BounceAnimate"
import SortButton from "../components/buttons/SortButton"
import ListCardProjects from "../components/list-cards/ListCardProjects"

const HomePage = () => {

    return (
        <div className='flex flex-col mx-auto px-14 md:pr-8 lg:px-20 lg:mx-auto lg:max-w-full'>
            <div className="mt-16 lg:flex justify-between items-center lg:mx-auto lg:max-w-full w-full">
                <BounceInRight delayVal={0.5}>
                    <div className="lg:mr-auto">
                        <BounceInRight>
                            <MainText
                                titleText='Showcasing your finest creative project.'
                                subText='Pixel Gallery Project'
                                maxWMob='max-w-[200px]'
                                maxWTab='max-w-md'
                                maxWDesk='max-w-xl'
                            />
                        </BounceInRight>
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
                <BounceInLeft delayVal={0.5}>
                    <div className="hidden lg:block lg:ml-auto select-none">
                        <img src={assets.home_image} />
                    </div>
                </BounceInLeft>
            </div>
            <BounceInRight delayVal={1} >
                <div className="relative mt-14 mb-32 md:flex justify-between lg:mt-24 md:pr-5 md:mb-12">
                    <div>
                        <h1 className='text-dark text-4xl font-extrabold leading-snug md:text-5xl'>Latest Projects</h1>
                        <p className="text-secondary text-sm font-medium my-1">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    </div>
                    <div>
                        <SortButton />
                    </div>
                </div>
            </BounceInRight>
            <BounceInTop delayVal={1.5}>
                <ListCardProjects />
            </BounceInTop>
        </div >
    )
}

export default HomePage