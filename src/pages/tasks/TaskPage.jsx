import { taskButtons } from "../../assets/assets"
import RoundButton from "../../components/buttons/RoundButton"
import CardTask from "../../components/cards/CardTask"
import MainText from "../../components/text/MainText"

const TaskPage = () => {
    return (
        <div className="flex flex-col items-center mx-auto md:px-14 lg:px-20 lg:mx-auto lg:max-w-full">
            <div className="mt-16 mx-auto flex flex-col px-5 text-center items-center lg:px-20">
                <MainText
                    titleText='Take on the Task and Build Your Skills Portfolio!'
                    subText='Pixel Asssignment Arena'
                    maxWMob='max-w-[360px]'
                    maxWTab='max-w-2xl'
                    maxWDesk='max-w-2xl'
                />
            </div>
            <div className="max-w-7xl w-full mt-16 px-5">
                <RoundButton
                    arrButton={taskButtons}
                    maxMob='max-w-[160px]'
                />
            </div>
            <div className="px-4 md:px-0 mt-28 grid md:grid-cols-2 md:gap-4 lg:grid-cols-3 lg:gap-4">
                {/* <ListCards /> */}
                <CardTask />
                <CardTask />
                <CardTask />
                <CardTask />
                <CardTask />
                <CardTask />
            </div>
        </div>
    )
}

export default TaskPage