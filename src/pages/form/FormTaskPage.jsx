import FormFieldUpload from '../../components/forms/FormFieldUpload'
import SingleButton from '../../components/buttons/SingleButton'
import { useNavigate } from 'react-router-dom'
import FormFIeldItems from '../../components/forms/FormFieldItems'
import GroupImage from '../../components/images/GroupImage'
import { formFieldTasks } from '../../assets/assets'

const FormTaskPage = () => {
    const navigate = useNavigate()

    return (
        <form>
            <div className='flex flex-col mx-auto px-14 lg:px-20 lg:max-w-7xl'>
                <div className='mt-10'>
                    <GroupImage
                        title='Assign New Tasks!'
                        subtitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur hahahah adipiscing.'
                    />
                </div>
                <div className="mt-20">
                    <FormFIeldItems formFields={formFieldTasks} />
                    <FormFieldUpload />
                </div>
                <div className="md:w-80 mx-auto w-full max-w-7xl mt-10">
                    <SingleButton
                        text='Upload'
                        txtColor='white'
                        bgColor='hijau'
                        maxWMob=''
                        maxWTab='w-40'
                        onclick={() => navigate('/upload-task')}
                    />
                </div>
            </div>
        </form>
    )
}

export default FormTaskPage