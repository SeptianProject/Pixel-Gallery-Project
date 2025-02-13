import { useLocation, useNavigate, useParams } from "react-router-dom";
import SingleButton from "../../components/buttons/SingleButton";
import FormFieldUpload from "../../components/forms/FormFieldUpload";
import FormFieldItems from "../../components/forms/FormFieldItems";
import GroupImage from "../../components/images/GroupImage";
import { formFieldProjects } from "../../assets/assets";
import { handleChange } from "../../lib/function/FormHandle";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../lib/context/AuthContext";
import { fetchAllCategories } from "../../lib/services/CategoryService";
import slugify from "slugify";
import {
  createProject,
  fetchProject,
  updateProject,
} from "../../lib/services/ProjectService";
import {
  deleteOldCover,
  uploadProjectCover,
} from "../../lib/services/ImageServices";

const FormProjectPage = () => {
  const { user } = useContext(AuthContext);
  const { uuid } = useParams();
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);
  const [categories, setCategories] = useState([]);
  const [projectData, setProjectData] = useState({
    title: "",
    technology: "",
    category: null,
    description: "",
    link_github: "",
    link_website: "",
    image_cover_url: "",
    owner_id: user.id,
  });
  const [coverImage, setCoverImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchCategories = async () => {
    try {
      setLoading(true);
      const { data, error } = await fetchAllCategories();
      if (error) throw error;
      setCategories(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const fetchSelectedProject = async () => {
    try {
      setLoading(true);
      const { data, error } = await fetchProject(uuid);
      if (error) throw error;
      setProjectData({
        title: data.title,
        technology: data.technology,
        category: data.category,
        description: data.description,
        link_github: data.link_github,
        link_website: data.link_website,
        image_cover_url: data.image_cover,
      });
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
    if (uuid) {
      fetchSelectedProject();
    }
  }, []);

  const handleCategoryChange = (selectedoption) => {
    setProjectData((prev) => ({
      ...prev,
      category: selectedoption,
    }));
  };

  const handleSelectImage = (selectedImage) => {
    setCoverImage(selectedImage);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isUpdate = uuid ? true : false;
    try {
      setLoading(true);
      const slug = slugify(projectData.title, {
        lower: true,
        strict: true,
      });

      let imageUrl = projectData.image_cover_url;
      if (coverImage) {
        try {
          if (isUpdate) {
            const { error } = await deleteOldCover(imageUrl, "projects");

            if (error) throw error;
          }
          const { data, error } = await uploadProjectCover(coverImage);
          if (error) throw error;
          imageUrl = data.url;
        } catch (error) {
          setError("Gagal mengupload gambar", error.message);
          return null;
        }
      }

      if (isUpdate) {
        const { error } = await updateProject(
          projectData.title,
          slug,
          projectData.technology,
          projectData.category,
          projectData.description,
          projectData.link_github,
          projectData.link_website,
          imageUrl,
          projectData.owner_id,
          uuid
        );
        if (error) throw error;
      } else {
        const { error } = await createProject(
          projectData.title,
          slug,
          projectData.technology,
          projectData.category,
          projectData.description,
          projectData.link_github,
          projectData.link_website,
          imageUrl,
          projectData.owner_id
        );

        if (error) throw error;
      }

      navigate("/upload-project");
    } catch (error) {
      setError("Gagal menambahkan project");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handlePreview = () => {
    if (projectData.image_cover_url) {
      navigate(
        `/project/detail?title=${projectData.title}&technology=${projectData.technology}&description=${projectData.description}&link_github=${projectData.link_github}&link_website=${projectData.link_website}&imageUrl=${projectData.image_cover_url}&u=${user.id}`
      );
    } else {
      let imageUrl;
      if (coverImage instanceof Blob) {
        imageUrl = URL.createObjectURL(coverImage);
      }
      navigate(
        `/project/detail?title=${projectData.title}&technology=${projectData.technology}&description=${projectData.description}&link_github=${projectData.link_github}&link_website=${projectData.link_website}&imageUrl=${imageUrl}&u=${user.id}`
      );
    }
  };

  if (loading) {
    return <div>Loading....</div>;
  }
  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col mx-auto px-14 lg:px-20 lg:max-w-7xl">
        <div className="mt-10">
          {!uuid ? (
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
          <FormFieldItems
            formData={projectData}
            formFields={formFieldProjects}
            options={categories}
            changeHandler={(e) => handleChange(e, setProjectData)}
            onCategoryChange={handleCategoryChange}
          />
          <FormFieldUpload
            image={projectData.image_cover_url}
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
            onclick={() => handlePreview()}
          />
          <SingleButton
            text={uuid ? "Update" : "Upload"}
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
