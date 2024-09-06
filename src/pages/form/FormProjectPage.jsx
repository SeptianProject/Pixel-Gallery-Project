import { useNavigate } from "react-router-dom"
import SingleButton from "../../components/buttons/SingleButton"
import FormField from "../../components/FormField"
import FormFieldUpload from "../../components/FormFieldUpload"
import GroupImage from "../../components/GroupImage"

const FormProjectPage = () => {
    const navigate = useNavigate()

    return (
        <div className='flex flex-col mx-auto px-14 lg:px-20 lg:mx-auto lg:max-w-full'>
            <div className='mt-10 flex justify-center relative'>
                <GroupImage />
            </div>
            <div className="mt-20">
                <FormField dropDown="" />
                <FormFieldUpload />
            </div>
            <div className="flex flex-col md:flex-row lg:justify-between justify-center items-center mt-10 gap-5">
                <SingleButton
                    text='Preview'
                    txtColor='hijau'
                    bgColor='white'
                    border='hijau'
                    hovText='white'
                    hovBg='hijau'
                    onclick={() => navigate('/project/detail')}
                />
                <SingleButton
                    text='Upload'
                    txtColor='white'
                    bgColor='hijau'
                    hovText='hijau'
                    hovBg='white'
                    hovBorder='hijau'
                    onclick={() => navigate('/project')}
                />
            </div>
        </div>
    )
}

export default FormProjectPage