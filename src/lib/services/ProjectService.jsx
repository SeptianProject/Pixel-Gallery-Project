import { supabase } from "../helper/createClient";

export const fetchProjects = async () => {
  try {
    const { data, error } = await supabase
      .from("projects")
      .select(
        "*, profiles:owner_id ( id, name, avatar_url, entered_as, instances, role )"
      );
    if (error) throw error;
    return data;
  } catch (error) {
    console.error("Error fetching projects:", error);
  }
};

export const fetchProject = async (id) => {
  try {
    const { data, error } = await supabase
      .from("projects")
      .select("*")
      .eq("id", id);
    if (error) throw error;
    return data;
  } catch (error) {
    console.error("Error fetching project:", error);
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
    return data;
  } catch (error) {
    console.error("Error fetching projects by category:", error);
  }
};
