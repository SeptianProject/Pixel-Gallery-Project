import { useLocation, useNavigate } from "react-router-dom";
import SingleButton from "../../components/buttons/SingleButton";
import FormFieldUpload from "../../components/forms/FormFieldUpload";
import FormFIeldItems from "../../components/forms/FormFieldItems";
import GroupImage from "../../components/images/GroupImage";
import { formFieldProjects } from "../../assets/assets";
import { handleChange } from "../../lib/function/FormHandle";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../lib/context/AuthContext";
import { fetchCategories } from "../../lib/services/CategoryService";
import { getFileExtensionFromBlob } from "../../lib/function/GetExtensionBlob";
import { supabase } from "../../lib/helper/createClient";

const FormProjectPage = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [modalOpen, setModalOpen] = useState(false);
  const [categories, setCategories] = useState([]);
  const [projectData, setProjectData] = useState({
    title: "",
    technology: "",
    category_id: 1,
    description: "",
    link_github: "",
    link_website: "",
    image_cover_url: "",
    owner_id: user.id,
  });
  const [coverImage, setCoverImage] = useState(null);
  const [error, setError] = useState(null);

  console.log(projectData);

  useEffect(() => {
    const loadCategories = async () => {
      const categoriesData = await fetchCategories();
      setCategories(categoriesData);
    };
    loadCategories();
  }, []);

  // custom handler untuk category
  const modifiedFormFields = formFieldProjects.map((field) => {
    if (field.id == "category") {
      return {
        ...field,
        option: categories.map((cat) => ({
          label: cat.name,
          value: cat.id,
        })),
      };
    }
    return field;
  });

  // custom handler untuk category
  const handleCategoryChange = (selectedoption) => {
    setProjectData((prev) => ({
      ...prev,
      category_id: selectedoption.value,
    }));
  };

  // handler untuk mengambil cover
  const handleSelectImage = (selectedImage) => {
    setCoverImage(selectedImage);
  };

  const isUpload = location.pathname.includes("upload");

  const uploadImage = async () => {
    if (!coverImage) {
      setError("there is no file, please insert file to upload");
      return;
    }

    try {
      const timestamp = Date.now();
      // const fileExtension = avatar.name.split(".").pop();
      const fileExtension = getFileExtensionFromBlob(coverImage);
      const newFileName = `projectCover_${timestamp}.${fileExtension}`;

      // Upload file ke supabase
      const { data, error: uploadError } = await supabase.storage
        .from("covers")
        .upload(`projects/${newFileName}`, coverImage);

      if (uploadError) {
        throw uploadError;
      }

      // Mendapatkan Url dari file

      const { data: urlData, error: urlError } = supabase.storage
        .from("covers")
        .getPublicUrl(`projects/${newFileName}`);

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
    let imageUrl = projectData.image_cover_url;

    if (coverImage) {
      // if (userData.avatar_url != "") {
      // await deleteOldAvatar(projectData.image_cover_url);
      // }

      imageUrl = await uploadImage();

      if (!imageUrl) {
        setError("Failed to upload image");
        return;
      }
    }

    const { data, error } = await supabase
      .from("projects") // nama tabel di Supabase
      .insert({
        title: projectData.title,
        technology: projectData.technology,
        category: projectData.category_id,
        description: projectData.description,
        link_github: projectData.link_github,
        link_website: projectData.link_website,
        image_cover: imageUrl,
        owner_id: projectData.owner_id,
      });

    if (error) {
      setError("Gagal menambahkan Project");
      console.error(error);
    } else {
      navigate("/upload-project");
    }
  };
  if (!user) {
    return <div>Loading....</div>;
  }
  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <form onSubmit={handleSubmit}>
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
            formData={projectData}
            formFields={modifiedFormFields}
            changeHandler={(e) => handleChange(e, setProjectData)}
            onCategoryChange={handleCategoryChange}
          />
          <FormFieldUpload
            setSelectedImage={handleSelectImage}
            modalopen={modalOpen}
            setModalOpen={setModalOpen}
          />
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
            type={"submit"}
          />
        </div>
      </div>
    </form>
  );
};

export default FormProjectPage;
