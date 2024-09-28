// import { useNavigate } from "react-router-dom"
import { useContext, useState } from "react";
import { formEditProfileItems } from "../../assets/assets";
import SingleButton from "../../components/buttons/SingleButton";
import FormFieldItems from "../../components/forms/FormFieldItems";
import StackImage from "../../components/images/StackImage";
import { AuthContext } from "../../lib/context/AuthContext";
import { handleChange } from "../../lib/function/FormHandle";
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const [modalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    avatar_url: user.avatar_url,
    name: user.name,
    role: user.role,
    instances: user.instances,
  });
  console.log(formData);

  const [avatar, setAvatar] = useState(null);

  const handleSelectAvatar = (selectedAvatar) => {
    setAvatar(selectedAvatar);
  };

  if (!user) {
    return <div>Loading....</div>;
  }
  return (
    <div
      className={`flex flex-col items-center mx-auto px-14 lg:px-20 lg:mx-auto lg:max-w-7xl
    ${modalOpen ? "fixed" : "static"}`}
    >
      <div className="mt-10">
        <StackImage
          setSelectedAvatar={handleSelectAvatar}
          modalOpen={modalOpen}
          setModalOpen={setModalOpen}
        />
      </div>
      <form action="">
        <div className="mt-20 w-full">
          <FormFieldItems
            formData={formData}
            formFields={formEditProfileItems(user)}
            changeHandler={(e) => handleChange(e, setFormData)}
          />
        </div>
        <div className="my-20 md:w-80 w-full">
          <SingleButton
            type="submit"
            onclick={() => console.log("gas")}
            text="Save"
            bgColor="hijau"
            txtColor="white"
          />
        </div>
      </form>
    </div>
  );
};

export default ProfilePage;
