import { supabase } from "../helper/createClient";

export const fetchProfile = async (userId) => {
  try {
    const { data, error } = await supabase
      .from("profiles")
      .select("*")
      .eq("id", userId)
      .single();
    if (error) throw error;
    return data;
  } catch (error) {
    console.error(error);
  }
};
