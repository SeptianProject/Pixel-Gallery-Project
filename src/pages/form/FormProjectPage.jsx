import { useLocation, useNavigate } from "react-router-dom";
import SingleButton from "../../components/buttons/SingleButton";
import FormFieldUpload from "../../components/forms/FormFieldUpload";
import FormFIeldItems from "../../components/forms/FormFieldItems";
import GroupImage from "../../components/images/GroupImage";
import { formFieldProjects } from "../../assets/assets";
import { handleChange } from "../../lib/function/FormHandle";

const FormProjectPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isUpload = location.pathname.includes("upload");

  return (
    <form>
      <div className="flex flex-col mx-auto px-14 lg:px-20 lg:max-w-7xl">
        <div className="mt-10">
          {isUpload ? (
            <GroupImage
              title="Upload your Project"
              subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur hahahah adipiscing."
            />
          ) : (
            <GroupImage
              title="Update your Project"
              subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur hahahah adipiscing."
            />
          )}
        </div>
        <div className="mt-20">
          <FormFIeldItems
            formFields={formFieldProjects}
            changeHandler={handleChange}
          />
          <FormFieldUpload />
        </div>
        <div className="flex flex-col md:flex-row lg:justify-between justify-center items-center mt-10 gap-5">
          <SingleButton
            text="Preview"
            txtColor="hijau"
            bgColor="white"
            border="hijau"
            hovText="white"
            hovBg="hijau"
            onclick={() => navigate("/project/detail")}
          />
          <SingleButton
            text="Upload"
            txtColor="white"
            bgColor="hijau"
            onclick={() => navigate("/upload-project")}
          />
        </div>
      </div>
    </form>
  );
};

export default FormProjectPage;
