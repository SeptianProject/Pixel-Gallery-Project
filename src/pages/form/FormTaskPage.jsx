import FormFieldUpload from '../../components/forms/FormFieldUpload'
import SingleButton from '../../components/buttons/SingleButton'
import { useNavigate } from 'react-router-dom'
import FormTaskItems from '../../components/forms/FormTaskItems'
import GroupImage from '../../components/images/GroupImage'

const FormTaskPage = () => {
    const navigate = useNavigate()

    return (
        <form>
            <div className='flex flex-col mx-auto px-14 lg:px-20 lg:mx-auto lg:max-w-full'>
                <div className='mt-10 flex justify-center relative'>
                    <GroupImage
                        title='Assign New Tasks!'
                        subtitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur hahahah adipiscing.'
                    />
                </div>
                <div className="mt-20">
                    <FormTaskItems />
                    <FormFieldUpload />
                </div>
                <div className="flex flex-col md:flex-row lg:justify-between justify-center items-center mt-10 gap-5">
                    <SingleButton
                        text='Upload' txtColor='white' bgColor='hijau'
                        onclick={() => navigate('/upload-task')}
                    />
                </div>
            </div>
        </form>
    )
}

export default FormTaskPage