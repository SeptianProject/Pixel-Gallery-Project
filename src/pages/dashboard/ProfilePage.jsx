// import { useNavigate } from "react-router-dom"
import { useContext, useState } from "react";
import { formEditProfileItems } from "../../assets/assets";
import SingleButton from "../../components/buttons/SingleButton";
import FormFieldItems from "../../components/forms/FormFieldItems";
import StackImage from "../../components/images/StackImage";
import { AuthContext } from "../../lib/context/AuthContext";
import { handleChange } from "../../lib/function/FormHandle";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../lib/helper/createClient";
import { getFileExtensionFromBlob } from "../../lib/function/GetExtensionBlob";
import { CrudContext } from "../../lib/context/CrudContext";

const ProfilePage = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const { deleteOldAvatar } = useContext(CrudContext);
  const [modalOpen, setModalOpen] = useState(false);
  const [userData, setUserData] = useState({
    id: user.id,
    avatar_url: user.avatar_url,
    name: user.name,
    role: user.role,
    instances: user.instances,
  });
  const [avatar, setAvatar] = useState(null);
  const [error, setError] = useState();
  console.log(userData, "avatar: ", avatar);

  const handleSelectAvatar = (selectedAvatar) => {
    setAvatar(selectedAvatar);
  };

  const uploadImage = async () => {
    if (!avatar) {
      setError("there is no file, please insert file to upload");
      return;
    }

    try {
      const timestamp = Date.now();
      // const fileExtension = avatar.name.split(".").pop();
      const fileExtension = getFileExtensionFromBlob(avatar);
      const newFileName = `avatar_${timestamp}.${fileExtension}`;

      // Upload file ke supabase
      const { data, error: uploadError } = await supabase.storage
        .from("avatars")
        .upload(`public/${newFileName}`, avatar);

      if (uploadError) {
        throw uploadError;
      }

      // Mendapatkan Url dari file

      const { data: urlData, error: urlError } = supabase.storage
        .from("avatars")
        .getPublicUrl(`public/${newFileName}`);

      if (urlError) {
        throw urlError;
      }

      return urlData.publicUrl;
    } catch (error) {
      console.error("error mengupload error:", error.message);
      setError("Error uploading file: " + error.message);
      return null;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // periksa apakah avatar ada filenya apa tidak
    let imageUrl = userData.avatar_url;

    if (avatar) {
      // if (userData.avatar_url != "") {
      await deleteOldAvatar(userData.avatar_url);
      // }

      imageUrl = await uploadImage();

      if (!imageUrl) {
        setError("Failed to upload image");
        return;
      }
    }

    const { error } = await supabase
      .from("profiles")
      .update({
        avatar_url: imageUrl,
        name: userData.name,
        role: userData.role,
        instances: userData.instances,
      })
      .eq("id", userData.id);

    if (error) {
      setError("Gagal memperbarui data");
      console.error(error);
    } else {
      navigate("/dashboard");
    }
  };
  if (!user) {
    return <div>Loading....</div>;
  }
  if (error) {
    return <p>Error: {error}</p>;
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
      <form
        action=""
        onSubmit={handleSubmit}
        className="lg:flex lg:flex-col items-center"
      >
        <div className="mt-20 w-full">
          <FormFieldItems
            formData={userData}
            formFields={formEditProfileItems(user)}
            changeHandler={(e) => handleChange(e, setUserData)}
          />
        </div>
        <div className="my-20 md:w-80 w-full">
          <SingleButton
            type="submit"
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
