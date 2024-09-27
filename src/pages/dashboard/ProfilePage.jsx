// import { useNavigate } from "react-router-dom"
import { useContext, useEffect } from "react";
import { formEditProfileItems } from "../../assets/assets";
import SingleButton from "../../components/buttons/SingleButton";
import FormFieldItems from "../../components/forms/FormFieldItems";
import StackImage from "../../components/images/StackImage";
import { AuthContext } from "../../lib/context/AuthContext";
import { handleChange } from "../../lib/function/FormHandle";

const ProfilePage = () => {
  const { user } = useContext(AuthContext);

  if (!user) {
    return <div>Loading....</div>;
  }
  return (
    <div
      className={`flex flex-col items-center mx-auto px-14 lg:px-20 lg:mx-auto lg:max-w-7xl 
    ${modalOpen ? "fixed" : "static"}`}
    >
      <div className="mt-10">
        <StackImage />
      </div>
      <div className="mt-20 w-full">
        <FormFieldItems
          formFields={formEditProfileItems(user)}
          changeHandler={(e) => handleChange(e, setFormData)}
        />
      </div>
      <div className="my-20 md:w-80 w-full">
        <SingleButton text="Save" bgColor="hijau" txtColor="white" />
      </div>
    </div>
  );
};

export default ProfilePage;
