
import { formFieldRegis } from "../../assets/assets"
import { BounceInBottom } from "../../components/animations/BounceAnimate"
import AuthComponent from "../../components/AuthComponent"
import GreenRectangle from "../../components/GreenRectangle"

const RegisterPage = () => {

    return (
        <div>
            <div className="relative min-h-screen max-w-full flex justify-center items-center overflow-hidden">
                <AuthComponent
                    RegPosition=''
                    formData={formFieldRegis}
                    title='Create an Account.'
                    description={
                        <BounceInBottom delayVal={1}>
                            <div className="mx-auto md:m-0 max-w-[280px] transition-all duration-500 ease-in-out text-center md:text-start">
                                <p
                                    className="font-normal md:font-medium text-dark text-sm"
                                >By clicking the <span className="font-bold text-hijau cursor-pointer">Register</span> button, you agree to our terms and conditions.</p>
                            </div>
                        </BounceInBottom>
                    }
                    textBtn='Register'
                    pathName='/login'
                    textQuest='Already Have an Account?'
                    textLink='Login'
                />
            </div>
            <GreenRectangle />
        </div>
    )
}

export default RegisterPage