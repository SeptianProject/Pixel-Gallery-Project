import { supabase } from "../helper/createClient";
import { deleteOldCover } from "./ImageServices";

// Fetching

export const fetchAllProjects = async () => {
  try {
    const { data, error } = await supabase
      .from("projects")
      .select(
        "*, profiles:owner_id ( id, name, avatar_url, entered_as, instances, role )"
      );
    if (error) throw error;
    return { data: data, error: null };
  } catch (error) {
    console.error("Error fetching projects:", error);
    return { data: null, error: error };
  }
};

export const fetchProject = async (id) => {
  try {
    const { data, error } = await supabase
      .from("projects")
      .select(
        "*, profiles:owner_id ( id, name, avatar_url, entered_as, instances, role )"
      )
      .single()
      .eq("id", id);
    if (error) throw error;
    return { data: data, error: null };
  } catch (error) {
    console.error("Error fetching project:", error);

    return { data: null, error: error };
  }
};

export const fetchProjectsByCategory = async (categoryID) => {
  try {
    const { data, error } = await supabase
      .from("projects")
      .select(
        "*, profiles:owner_id ( id, name, avatar_url, entered_as, instances, role )"
      )
      .eq("category", categoryID);
    if (error) throw error;
    return { data: data, error: null };
  } catch (error) {
    console.error("Error fetching projects by category:", error);
    return { data: null, error: error };
  }
};

export const fetchProjectsByUser = async (userID) => {
  try {
    const { data, error } = await supabase
      .from("projects")
      .select(
        "*, profiles:owner_id ( id, name, avatar_url, entered_as, instances, role )"
      )
      .eq("owner_id", userID);
    if (error) throw error;
    return data;
  } catch (error) {
    console.error("Error fetching projects by category:", error);
  }
};

// Create

export const createProject = async (
  title,
  slug,
  tech,
  catId,
  desc,
  github,
  web_link,
  imageUrl,
  owner_id
) => {
  try {
    const { data, error } = await supabase.from("projects").insert({
      title: title,
      slug: slug,
      technology: tech,
      category: catId,
      description: desc,
      link_github: github,
      link_website: web_link,
      image_cover: imageUrl,
      owner_id: owner_id,
    });

    if (error) throw error;
    return { data, error: null };
  } catch (error) {
    console.error(error);
    return { data: null, error };
  }
};

// Delete

export const DeleteProject = async (projectID) => {
  try {
    const { data: projectData, error: fetchError } = await supabase
      .from("projects")
      .select("*")
      .single()
      .eq("id", projectID);

    if (fetchError) throw { error: fetchError };

    if (!projectData) return;

    if (projectData.image_cover) {
      const { error: delImgError } = await deleteOldCover(
        projectData.image_cover,
        "projects"
      );

      if (delImgError) throw { error: delImgError };
    }

    const { error: deleteEror } = await supabase
      .from("projects")
      .delete()
      .eq("id", projectID);

    if (deleteEror) throw { error: deleteEror };

    return { error: null };
  } catch (error) {
    console.error(error);
    return { data: null, error };
  }
};

export const updateProject = async (
  title,
  slug,
  tech,
  catId,
  desc,
  github,
  web_link,
  imageUrl,
  owner_id,
  projectID
) => {
  try {
    const { data, error } = await supabase
      .from("projects")
      .update({
        title: title,
        slug: slug,
        technology: tech,
        category: catId,
        description: desc,
        link_github: github,
        link_website: web_link,
        image_cover: imageUrl,
        owner_id: owner_id,
      })
      .eq("id", projectID);

    if (error) throw error;
    return { data: data, error: null };
  } catch (error) {
    console.error(error);
    return { data: null, error: error };
  }
};
