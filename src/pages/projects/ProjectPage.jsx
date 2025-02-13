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
import { fetchAllCategories } from "../../lib/services/CategoryService";
import {
  fetchAllProjects,
  fetchProjectsByCategory,
} from "../../lib/services/ProjectService";

const ProjectPage = () => {
  const [projects, setProjects] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchProjects = async () => {
    try {
      setLoading(true);
      if (selectedCategory?.id) {
        const { data, error } = await fetchProjectsByCategory(
          selectedCategory.id
        );
        if (error) throw error;
        setProjects(data);
      } else {
        const { data, error } = await fetchAllProjects();
        if (error) throw error;
        setProjects(data);
      }
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const fetchCategories = async () => {
    try {
      setLoading(true);
      const { data, error } = await fetchAllCategories();

      if (error) throw error;

      if (data) {
        setCategories(data);
      }
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    fetchProjects();
  }, [selectedCategory]);

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
          <RoundButton
            setSelected={setSelectedCategory}
            selected={selectedCategory}
            arrButton={categories}
            maxMob="max-w-[150px]"
          />
        </div>
      </BounceInBottom>
      <ListCardProjects projects={projects} />
    </div>
  );
};

export default ProjectPage;
