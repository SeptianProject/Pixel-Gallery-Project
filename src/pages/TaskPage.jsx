import { taskButtons } from "../assets/assets"
import RoundButton from "../components/buttons/RoundButton"
import CardTask from "../components/cards/CardTask"
import MainText from "../components/text/MainText"

const TaskPage = () => {
    return (
        <div className="flex flex-col mx-auto px-10 md:px-14 lg:px-20 lg:mx-auto lg:max-w-full">
            <div className="mt-16 mx-auto flex flex-col text-center items-center lg:px-20">
                <MainText
                    titleText='Take on the Task and Build Your Skills Portfolio!'
                    subText='Pixel Asssignment Arena'
                    maxWMob='max-w-[350px]'
                    maxWTab='max-w-7xl'
                    maxWDesk='max-w-2xl'
                />
            </div>
            <div className="max-w-7xl mt-16 md:mx-0 lg:px-24">
                <RoundButton arrButton={taskButtons}
                    maxMob='max-w-[170px]' />
            </div>
            <div className="px-4 mt-28 grid md:grid-cols-2 md:gap-4 lg:grid-cols-3 lg:gap-4">
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