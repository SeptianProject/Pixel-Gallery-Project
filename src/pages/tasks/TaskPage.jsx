import { taskButtons } from "../../assets/assets"
import RoundButton from "../../components/buttons/RoundButton"
import ListCardTasks from "../../components/list-cards/ListCardTasks"
import MainText from "../../components/text/MainText"
import { BounceInBottom, BounceInTop } from '../../components/animations/BounceAnimate'

const TaskPage = () => {
    return (
        <div className="flex flex-col items-center mx-auto md:px-14 lg:px-20 lg:mx-auto lg:max-w-full">
            <div className="mt-20 mx-auto text-center lg:px-20">
                <BounceInTop delayVal={0.5}>
                    <MainText
                        titleText='Take on the Task and Build Your Skills Portfolio!'
                        subText='Pixel Asssignment Arena'
                        maxWMob='max-w-[360px]'
                        maxWTab='max-w-2xl'
                        maxWDesk='max-w-2xl'
                    />
                </BounceInTop>
            </div>
            <div className="max-w-7xl md:w-full mt-20 px-5 md:px-0">
                <BounceInBottom delayVal={1}>
                    <RoundButton
                        arrButton={taskButtons}
                        maxMob='max-w-[160px]'
                    />
                </BounceInBottom>
            </div>
            <BounceInTop delayVal={1.5}>
                <ListCardTasks />
            </BounceInTop>
        </div>
    )
}

export default TaskPage