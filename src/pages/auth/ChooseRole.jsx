import { useNavigate } from "react-router-dom"
import RadioButton from "../../components/buttons/RadioButton"
import SingleButton from "../../components/buttons/SingleButton"
import { BounceInRight, BounceInTop } from "../../components/animations/BounceAnimate"

const ChooseRole = () => {
    const navigate = useNavigate()

    return (
        <div>
            <div className="max-w-7xl w-full md:min-h-screen gap-y-40 
            static lg:absolute -top-10 flex items-center justify-center overflow-hidden">
                <div className="flex flex-col my-24 lg:m-0 items-center gap-y-12">
                    <BounceInRight>
                        <div>
                            <h1 className="font-bold text-dark text-center text-3xl md:text-5xl tracking-wide">Choose your role in Pixel</h1>
                        </div>
                    </BounceInRight>
                    <div>
                        <RadioButton />
                    </div>
                    <div className="w-full px-10 md:px-40 lg:px-0 lg:w-auto">
                        <BounceInTop delayVal={3}>
                            <SingleButton
                                onclick={() => navigate('/welcome')}
                                txtColor='white'
                                bgColor='hijau'
                                text='Submit' />
                        </BounceInTop>
                    </div>
                </div>
            </div>
            <div>
                <div className="absolute right-0 top-5">
                    <div className="bg-hijau w-[125px] h-14"></div>
                </div>
            </div>
        </div>
    )
}

export default ChooseRole