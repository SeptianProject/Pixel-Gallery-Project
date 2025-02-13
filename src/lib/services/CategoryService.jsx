import { supabase } from "../helper/createClient";

export const fetchAllCategories = async () => {
  try {
    const { data, error } = await supabase.from("categories").select("*");

    if (error) throw error;
    return { data: data, error: null };
  } catch (error) {
    console.error("Error fetching categories:", error);
    return { data: null, error: error };
  }
};
