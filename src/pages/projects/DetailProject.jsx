import { assets } from "../../assets/assets";
import GroupDivide from "../../components/GroupDivide";
import GroupGithub from "../../components/GroupGithub";
import DescriptionText from "../../components/text/DescriptionText";
import MainText from "../../components/text/MainText";
import XButton from "../../components/buttons/XButton.jsx";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchProject } from "../../lib/services/ProjectService.jsx";
import { fetchProfile } from "../../lib/services/profileServices.jsx";

const DetailProject = () => {
  const [searchParams] = useSearchParams();
  const uuid = searchParams.get("p");
  const userID = searchParams.get("u");
  const [previewData, setPreviewData] = useState({
    title: searchParams.get("title"),
    technology: searchParams.get("technology"),
    description: searchParams.get("description"),
    link_github: searchParams.get("link_github"),
    link_website: searchParams.get("link_website"),
    image_cover: searchParams.get("imageUrl"),
    profiles: {},
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [project, setProject] = useState({});

  console.log(previewData);

  const fetch = async () => {
    try {
      setLoading(true);
      const { data, error } = await fetchProject(uuid);

      if (error) throw error;

      console.log(data);
      setProject(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const fetchProfiles = async () => {
    try {
      setLoading(true);
      const { data, error } = await fetchProfile(userID);

      if (error) throw error;

      console.log(data);
      setPreviewData((prev) => ({
        ...prev,
        profiles: data,
      }));
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (uuid) {
      fetch();
    } else {
      fetchProfiles();
    }
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <div className="flex flex-col mx-auto px-8 md:px-16 lg:px-20 lg:mx-auto lg:max-w-full">
        <XButton />
        <div className="mt-16 mb-10 pr-5">
          <MainText titleText={uuid ? project.title : previewData.title} />
        </div>
        <GroupGithub project={uuid ? project : previewData} />
        <div className="mt-20 mb-5 select-none">
          <div className="flex justify-center items-center">
            <img
              src={
                uuid
                  ? project.image_cover
                    ? project.image_cover
                    : assets.card_image
                  : previewData.image_cover
                  ? previewData.image_cover
                  : assets.card_image
              }
              className="max-w-6xl w-full h-full"
            />
          </div>
        </div>
        <DescriptionText project={uuid ? project : previewData} />
      </div>
      <div className="w-full max-w-7xl">
        <GroupDivide project={uuid ? project : previewData} />
      </div>
    </div>
  );
};

export default DetailProject;
