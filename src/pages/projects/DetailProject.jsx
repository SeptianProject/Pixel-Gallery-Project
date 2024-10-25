import { assets } from "../../assets/assets";
import GroupDivide from "../../components/GroupDivide";
import GroupGithub from "../../components/GroupGithub";
import DescriptionText from "../../components/text/DescriptionText";
import MainText from "../../components/text/MainText";
import XButton from "../../components/buttons/XButton.jsx";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "../../lib/helper/createClient.js";

const DetailProject = () => {
  const [searchParams] = useSearchParams();
  const uuid = searchParams.get("p");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [project, setProject] = useState();

  const fetchProject = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from("projects")
        .select(
          `*, profiles:owner_id ( id, name, avatar_url, entered_as, instances, role )`
        )
        .eq("id", uuid)
        .single();

      if (error) throw error;

      setProject(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProject();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <div className="flex flex-col mx-auto px-8 md:px-16 lg:px-20 lg:mx-auto lg:max-w-full">
        <XButton />
        <div className="mt-16 mb-10 pr-5">
          <MainText titleText={project.title} />
        </div>
        <GroupGithub project={project} />
        <div className="mt-20 mb-5 select-none">
          <div className="flex justify-center items-center">
            <img
              src={
                project.image_cover ? project.image_cover : assets.card_image
              }
              className="max-w-6xl w-full h-full"
            />
          </div>
        </div>
        <DescriptionText project={project} />
      </div>
      <div className="w-full max-w-7xl">
        <GroupDivide project={project} />
      </div>
    </div>
  );
};

export default DetailProject;
