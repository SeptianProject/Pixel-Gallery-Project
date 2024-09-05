import StackImage from "../../components/StackImage";
import ProfileText from "../../components/text/ProfileText";
import SingleButton from "../../components/buttons/SingleButton";
import SingleCard from "../../components/cards/SingleCard";
import DashboardProjects from "../../components/DashboardProjects";

const DashboardPage = () => {
  return (
    <div className="flex flex-col mx-auto px-14 lg:px-20 lg:mx-auto lg:max-w-full">
      <div className="mt-10">
        <StackImage />
      </div>
      <div className="lg:flex lg:justify-between lg:items-center lg:mt-10">
        <div className="">
          <div className="mt-24 flex flex-col items-center gap-5">
            <ProfileText />
            <SingleButton
              text="Edit Profile"
              txtColor="white"
              bgColor="hijau"
            />
          </div>
          <div className="mt-16">
            <SingleCard />
          </div>
        </div>
        <div className="mt-12 lg:mt-24">
          <DashboardProjects />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
