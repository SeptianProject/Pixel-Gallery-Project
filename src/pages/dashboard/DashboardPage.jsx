import StackImage from "../../components/images/StackImage";
import ProfileText from "../../components/text/ProfileText";
import SingleButton from "../../components/buttons/SingleButton";
import SingleCard from "../../components/cards/SingleCard";
import DashboardProjects from "../../components/DashboardProjects";
import { useNavigate } from "react-router-dom";
import { projectInfoUser } from "../../assets/assets";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../lib/context/AuthContext";
import { formatDateDashboard } from "../../lib/function/FormaterDate";

const DashboardPage = () => {
  const navigate = useNavigate();
  const { user, logout, fetchUserProfile } = useContext(AuthContext);

  useEffect(() => {
    if (user?.id) {
      fetchUserProfile(user.id);
    }
  }, [user?.id]);

  return (
    <div className="flex flex-col mx-auto mb-20 px-14 lg:px-20 lg:mx-auto lg:max-w-7xl">
      <div className="mt-10">
        <StackImage />
      </div>
      <div className="lg:flex lg:justify-between lg:items-center mt-24">
        <div className="">
          <div className="flex flex-col items-start gap-5">
            <div>
              <ProfileText
                name={user.name}
                role={user.role}
                instance={user.instances}
                date={`Joined On ${formatDateDashboard(user.created_at)}`}
                gapCustom={"gap-y-3"}
              />
            </div>
            <div className="w-full md:w-72">
              <SingleButton
                text="Edit Profile"
                txtColor="white"
                bgColor="hijau"
                onclick={() => navigate("/profile/edit")}
              />
            </div>
            <div className="w-full md:w-72">
              <SingleButton
                text="Logout"
                txtColor="red-600"
                bgColor="white"
                border="hijau"
                onclick={() => logout()}
              />
            </div>
          </div>
          <div className="mt-16">
            <SingleCard projectInfoList={projectInfoUser} />
          </div>
        </div>
        <div className="mt-20 lg:mt-0">
          <DashboardProjects />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
