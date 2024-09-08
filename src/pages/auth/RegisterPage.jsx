import { useNavigate } from "react-router-dom"
import { assets } from "../../assets/assets"
import SingleButton from "../../components/buttons/SingleButton"
import FormRegister from "../../components/forms/FormRegister"

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
                        <div className="">
                            <h1 className="text-dark font-bold text-3xl md:text-5xl transition-all duration-700">Create an Account.</h1>
                        </div>
                        {/* form */}
                        <div className="flex flex-col gap-y-3">
                            <div className="">
                                <FormRegister />
                            </div>
                            {/* desc */}
                            <div className="lg:max-w-[250px] w-full text-center flex justify-center lg:text-start">
                                <p
                                    className="font-normal text-dark text-xs"
                                >By clicking the <span className="font-semibold text-hijau cursor-pointer">Register</span> button, you agree to our terms and conditions.</p>
                            </div>
                        </div>
                        {/* button */}
                        <div className="w-full px-20 lg:w-auto">
                            <SingleButton
                                onclick={() => navigate('/choose-role')}
                                text='Register'
                                bgColor='hijau'
                                txtColor='white' />
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