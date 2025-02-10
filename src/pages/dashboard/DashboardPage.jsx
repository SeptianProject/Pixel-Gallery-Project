import StackImage from "../../components/images/StackImage";
import ProfileText from "../../components/text/ProfileText";
import SingleButton from "../../components/buttons/SingleButton";
import SingleCard from "../../components/cards/SingleCard";
import DashboardProjects from "../../components/DashboardProjects";
import { useNavigate } from "react-router-dom";
import { projectInfoAdmin, projectInfoUser } from "../../assets/assets";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../lib/context/AuthContext";
import { formatDateDashboard } from "../../lib/function/FormaterDate";
import { supabase } from "../../lib/helper/createClient";
import { fetchProjectsByUser } from "../../lib/services/ProjectService";
import { fetchProfile } from "../../lib/services/profileServices";

const DashboardPage = () => {
  const navigate = useNavigate();
  const { user, logout } = useContext(AuthContext);
  const [profile, setProfile] = useState({});
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchUser = async () => {
    try {
      setLoading(true);
      const response = await fetchProfile(user.id);
      setProfile(response);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const fetchProjects = async () => {
    try {
      setLoading(true);
      const data = await fetchProjectsByUser(user.id);
      setProjects(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUser();
    fetchProjects();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="flex flex-col mx-auto mb-20 px-14 lg:px-20 lg:mx-auto lg:max-w-7xl">
      <div className="mt-10">
        <StackImage image={profile.avatar_url} />
      </div>
      <div className="lg:flex lg:justify-between lg:items-center mt-24">
        <div className="">
          <div className="flex flex-col items-start gap-5">
            <div>
              <ProfileText
                name={profile?.name}
                role={profile?.role}
                instance={profile?.instances}
                date={`Joined On ${formatDateDashboard(profile?.created_at)}`}
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
            <SingleCard
              projectInfoList={
                profile?.entered_as === "Supervisor"
                  ? projectInfoAdmin
                  : projectInfoUser
              }
            />
          </div>
        </div>
        <div className="mt-20 lg:mt-0">
          <DashboardProjects projects={projects} />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
