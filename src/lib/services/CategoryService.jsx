import { supabase } from "../helper/createClient";

export const fetchCategories = async () => {
  try {
    const { data, error } = await supabase
      .from("categories")
      .select("id, name");

    if (error) throw error;
    return data;
  } catch (error) {
    console.error("Error fetching categories:", error);
  }
};
