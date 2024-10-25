import CardProject from "../cards/CardProject";

const ListCardProjects = ({ projects }) => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
      {projects?.map((project) => (
        <CardProject key={project.id} project={project} />
      ))}
    </div>
  );
};

export default ListCardProjects;
