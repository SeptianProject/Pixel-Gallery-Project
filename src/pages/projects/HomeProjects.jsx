import React, { useCallback, useEffect, useState } from "react";
import { supabase } from "../../lib/helper/createClient";
import {
  BounceInRight,
  BounceInTop,
} from "../../components/animations/BounceAnimate";
import ListCardProjects from "../../components/list-cards/ListCardProjects";
import SortButton from "../../components/buttons/SortButton";
import {
  fetchAllProjects,
  fetchProjectsByCategory,
} from "../../lib/services/ProjectService";

const HomeProjects = () => {
  const [projects, setProjects] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetch = async () => {
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

  useEffect(() => {
    fetch();
  }, [selectedCategory.id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  return (
    <>
      {/* <BounceInRight delayVal={1}> */}
      <div className="relative mt-14 mb-32 md:flex justify-between lg:mt-24 md:pr-5 md:mb-12">
        <div>
          <h1 className="text-dark text-4xl font-extrabold leading-snug md:text-5xl">
            Latest Projects
          </h1>
          <p className="text-secondary text-sm font-medium my-1">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>
        <div>
          <SortButton
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        </div>
      </div>
      {/* </BounceInRight> */}
      <BounceInTop delayVal={0.8}>
        <ListCardProjects projects={projects} />
      </BounceInTop>
    </>
  );
};

export default HomeProjects;
