// import { useNavigate } from "react-router-dom"
import { formEditProfileItems } from "../../assets/assets"
import SingleButton from "../../components/buttons/SingleButton"
import FormFieldItems from "../../components/forms/FormFieldItems"
import StackImage from "../../components/images/StackImage"


const ProfilePage = () => {
    // const navigate = useNavigate()

    return (
        <div className="flex flex-col items-center mx-auto px-14 lg:px-20 lg:mx-auto lg:max-w-7xl">
            <div className="mt-10">
                <StackImage />
            </div>
            <div className="mt-20 w-full">
                <FormFieldItems
                    formFields={formEditProfileItems}
                />
            </div>
            <div className="my-20 md:w-80 w-full">
                <SingleButton
                    text='Save' bgColor='hijau' txtColor='white'
                />
            </div>
        </div>
    )
}

export default ProfilePage