import SingleDescText from "./SingleDescText";
import SecondaryText from "./SecondaryText";

const DescriptionText = ({ project }) => {
  return (
    <div className="mt-10">
      <div>
        <SingleDescText text="Description" />
        <p className="text-dark py-5 md:text-lg md:font-medium ">
          {project.description}
        </p>
        <SingleDescText text="Technology" />
        <SecondaryText text={project.technology} textMd="lg" fontMd="medium" />
      </div>
    </div>
  );
};

export default DescriptionText;
