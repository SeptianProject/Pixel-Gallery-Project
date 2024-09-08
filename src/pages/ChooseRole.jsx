import { useNavigate } from "react-router-dom"
import RadioButton from "../components/buttons/RadioButton"
import SingleButton from "../components/buttons/SingleButton"

const ChooseRole = () => {
    const navigate = useNavigate()

    return (
        <div>
            <div className="max-w-7xl w-full min-h-screen gap-y-40 
            static lg:absolute -top-10 flex items-center justify-center overflow-hidden">
                <div className="flex flex-col mt-40 lg:mt-0 items-center gap-y-12">
                    <div>
                        <h1 className="font-bold text-dark text-center text-3xl md:text-5xl tracking-wide">Choose your role in Pixel</h1>
                    </div>
                    <div>
                        <RadioButton />
                    </div>
                    <div className="w-full px-10 md:px-40 lg:px-0 lg:w-auto">
                        <SingleButton
                            onclick={() => navigate('/home')}
                            txtColor='white'
                            bgColor='hijau'
                            text='Submit' />
                    </div>
                </div>
            </div>
            <div>
                <div className="absolute right-0 top-10">
                    <div className="bg-hijau w-[125px] h-14"></div>
                </div>
            </div>
        </div>
    )
}

export default ChooseRole