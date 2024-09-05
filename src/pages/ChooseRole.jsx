import { useNavigate } from "react-router-dom"
import RadioButton from "../components/buttons/RadioButton"
import SingleButton from "../components/buttons/SingleButton"

const ChooseRole = () => {
    const navigate = useNavigate()

    return (
        <>
            <div className="max-w-7xl w-full min-h-screen gap-y-40 absolute -top-10 flex items-center justify-center overflow-hidden">
                <div className="flex flex-col items-center gap-y-12">
                    <div>
                        <h1 className="font-bold text-dark text-5xl tracking-wide">Choose your role in Pixel</h1>
                    </div>
                    <div>
                        <RadioButton />
                    </div>
                    <div className="">
                        <SingleButton
                            onclick={() => navigate('/')}
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
        </>
    )
}

export default ChooseRole