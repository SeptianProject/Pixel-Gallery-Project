import { assets } from "../assets/assets";
import CardDetailAction from "./cards/CardDetailAction";
import ArrowButton from "./buttons/ArrowButton";
import { useEffect, useState } from "react";
import { supabase } from "../lib/helper/createClient";

const GroupDivide = ({ project }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemPerPage = 3;
  const profile = project.profiles;
  const [userProjects, setUserProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
  };

  const totalPages = Math.ceil(userProjects.length / itemPerPage);
  const minPage = 0;
  const maxPage = Math.max(0, totalPages - 1);

  const handleArrowClick = (direction) => {
    if (direction === "left" && currentPage > minPage) {
      setCurrentPage(currentPage - 1);
    } else if (direction === "right" && currentPage < maxPage) {
      setCurrentPage(currentPage + 1);
    }
  };

  const getCurrentPageItems = () => {
    const startIndex = currentPage * itemPerPage;
    const endIndex = startIndex + itemPerPage;
    return userProjects.slice(startIndex, endIndex);
  };

  const fetchUserProjects = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from("projects")
        .select(
          `*, profiles:owner_id ( id, name, avatar_url, entered_as, instances, role )`
        )
        .eq("owner_id", profile.id);

      if (error) throw error;

      setUserProjects(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUserProjects();
  }, [profile?.id]);

  if (error) return <p>Error: {error}</p>;

  return (
    <div className="my-10">
      <div>
        <div className="flex relative justify-center items-center">
          <img
            src={profile?.avatar_url || assets.profile}
            className="w-12 h-12 z-10 md:w-16 md:h-16 select-none rounded-full"
          />
          <div className="container absolute bg-secondary bg-opacity-20 w-full h-[2px] max-w-7xl"></div>
        </div>
        <div className="flex flex-col justify-center items-center mt-3">
          <h1 className="text-dark text-lg tracking-wide">{project.title}</h1>
          <p className="text-secondary text-[10px]">
            Published on {formatDate(project.created_at)}
          </p>
        </div>
        <div className="flex items-center justify-center md:justify-between gap-x-5 mt-6 md:max-w-2xl lg:max-w-[70rem] mx-auto">
          <h1 className="text-dark font-semibold text-2xl">
            More From {profile?.name}
          </h1>
          <div>
            <ArrowButton
              onClickLeft={() => handleArrowClick("left")}
              onClickRight={() => handleArrowClick("right")}
              disableLeft={currentPage === minPage}
              disableRight={currentPage === maxPage}
            />
          </div>
        </div>
        <div className="flex flex-col items-center md:grid md:grid-cols-2 lg:grid-cols-3 md:px-10 lg:px-16 select-none">
          {loading ? (
            <div className="col-span-full text-center py-4">Loading...</div>
          ) : userProjects.length > 0 ? (
            getCurrentPageItems().map((projectItem) => (
              <CardDetailAction key={projectItem.id} project={projectItem} />
            ))
          ) : (
            <div className="col-span-full text-center py-4">
              No other projects found
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GroupDivide;
