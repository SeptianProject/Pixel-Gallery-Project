import { useNavigate } from "react-router-dom"
import { assets } from "../../assets/assets"
import SingleButton from "../../components/buttons/SingleButton"
import FormRegister from "../../components/forms/FormRegister"
import { BounceInBottom, BounceInRight, BounceInTop } from "../../components/animations/BounceAnimate"

const RegisterPage = () => {
    const navigate = useNavigate()

    return (
        <div>
            <div className="relative min-h-screen max-w-full flex justify-center items-center overflow-hidden">
                <div className="hidden lg:block lg:absolute left-0">
                    <div className="">
                        <img src={assets.image_register}
                            className="bg-cover max-w-7xl w-full h-full"
                        />
                    </div>
                </div>
                <div className="static lg:absolute right-40 inset-y-24">
                    <div className="flex flex-col items-center gap-y-8">
                        {/* title */}
                        <BounceInRight>
                            <div className="">
                                <h1 className="text-dark font-bold text-3xl md:text-5xl transition-all duration-700">Create an Account.</h1>
                            </div>
                        </BounceInRight>
                        {/* form */}
                        <div className="flex flex-col gap-y-3">
                            <FormRegister />
                            {/* desc */}
                            <BounceInBottom delayVal={1}>
                                <div className="mx-auto md:m-0 max-w-[250px] transition-all duration-500 ease-in-out text-center md:text-start">
                                    <p
                                        className="font-normal text-dark text-sm"
                                    >By clicking the <span className="font-semibold text-hijau cursor-pointer">Register</span> button, you agree to our terms and conditions.</p>
                                </div>
                            </BounceInBottom>
                        </div>
                        {/* button */}
                        <div className="w-full px-20 lg:w-auto">
                            <BounceInTop delayVal={1.5}>
                                <SingleButton
                                    onclick={() => navigate('/choose-role')}
                                    text='Register'
                                    bgColor='hijau'
                                    txtColor='white' />
                            </BounceInTop>
                        </div>
                    </div>
                </div>
            </div>
            {/* container hijau */}
            <div>
                <div className="absolute right-0 top-10">
                    <div className="bg-hijau w-[125px] h-14"></div>
                </div>
            </div>
        </div>
    )
}

export default RegisterPage