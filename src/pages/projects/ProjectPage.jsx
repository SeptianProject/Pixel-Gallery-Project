import MainText from "../../components/text/MainText";
import { projectButtons } from "../../assets/assets";
import RoundButton from "../../components/buttons/RoundButton";
import SecondaryText from "../../components/text/SecondaryText";
import ListCardProjects from "../../components/list-cards/ListCardProjects";
import {
  BounceInBottom,
  BounceInRight,
  BounceInTop,
} from "../../components/animations/BounceAnimate";
import { useEffect, useState } from "react";
import { supabase } from "../../lib/helper/createClient";

const ProjectPage = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchProjects = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from("projects")
        .select(
          `*, profiles:owner_id ( id, name, avatar_url, entered_as, instances, role )`
        );

      if (error) throw error;

      setProjects(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  console.log(projects);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="flex flex-col mx-auto px-14 lg:px-20 lg:mx-auto lg:max-w-full">
      <div className="mt-20 lg:px-60">
        <div className="flex flex-col items-center text-center gap-y-5">
          <BounceInTop delayVal={0.5}>
            <MainText
              titleText="Showcasing your finest creative project."
              subText="Pixel Gallery Project"
            />
          </BounceInTop>
          <BounceInRight delayVal={1}>
            <SecondaryText
              text="120 Websites"
              text2="139 Design"
              text3="12 Application"
              gapMob="5"
              gapTab="14"
              gapDesk="16"
            />
          </BounceInRight>
        </div>
      </div>
      <BounceInBottom delayVal={1.5}>
        <div className="max-w-7xl my-16">
          <RoundButton arrButton={projectButtons} maxMob="max-w-[150px]" />
        </div>
      </BounceInBottom>
      <ListCardProjects projects={projects} />
    </div>
  );
};

export default ProjectPage;
