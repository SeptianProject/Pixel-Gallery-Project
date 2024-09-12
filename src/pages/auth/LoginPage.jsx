import { formFieldLogin } from '../../assets/assets'
import AuthComponent from '../../components/AuthComponent'
import GreenRectangle from '../../components/GreenRectangle'

const LoginPage = () => {
    return (
        <div>
            <div className="relative min-h-screen max-w-full flex justify-center items-center overflow-hidden">
                <AuthComponent
                    LogPosition='-mt-10'
                    formData={formFieldLogin}
                    title='Welcome Back!'
                    textBtn='Login'
                    pathName='/register'
                    textQuest="Don't Have Account?"
                    textLink='Register'
                />
            </div>
            <GreenRectangle />
        </div>
    )
}

export default LoginPage