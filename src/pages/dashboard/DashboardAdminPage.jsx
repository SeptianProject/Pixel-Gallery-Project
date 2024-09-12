import { useNavigate } from "react-router-dom"
import SingleButton from "../../components/buttons/SingleButton"
import StackImage from "../../components/images/StackImage"
import ProfileText from "../../components/text/ProfileText"
import SingleCard from "../../components/cards/SingleCard"
import DashboardProjects from "../../components/DashboardProjects"
import { projectInfoAdmin } from "../../assets/assets"


const DashboardAdminPage = () => {
    const navigate = useNavigate()

    return (
        <div className="flex flex-col mx-auto px-14 lg:px-20 lg:mx-auto lg:max-w-full">
            <div className="mt-10">
                <StackImage />
            </div>
            <div className="lg:flex lg:justify-between lg:items-center lg:mt-10">
                <div className="">
                    <div className="mt-24 flex flex-col items-start gap-5">
                        <ProfileText
                            name='Rehan Firmansyah'
                            role='UI/UEX Designer'
                            date='Joined On March 2022'
                            gapCustom={'gap-y-1'}
                        />
                        <SingleButton
                            text="Edit Profile"
                            txtColor="white"
                            bgColor="hijau"
                            onclick={() => navigate('/profile/edit')}
                        />
                    </div>
                    <div className="mt-16">
                        <SingleCard
                            projectInfoList={projectInfoAdmin}
                        />
                    </div>
                </div>
                <div className="mt-12 lg:mt-24">
                    <DashboardProjects />
                </div>
            </div>
        </div>
    )
}

export default DashboardAdminPage