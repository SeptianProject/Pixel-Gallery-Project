import { supabase } from "../helper/createClient";

export const fetchProfile = async (userId) => {
  try {
    const { data, error } = await supabase
      .from("profiles")
      .select("*")
      .eq("id", userId)
      .single();
    if (error) throw error;
    return { data: data, error: null };
  } catch (error) {
    console.error(error);

    return { data: null, error: error };
  }
};

export const deleteOldAvatar = async (oldAvatarUrl) => {
  if (!oldAvatarUrl) return;
  try {
    const fileName = oldAvatarUrl.split("/").pop();

    const filePath = `public/${fileName}`;

    const { error } = await supabase.storage.from("avatars").remove([filePath]);

    if (error) throw error;
  } catch (error) {
    console.error(error);
  }
};

export const updateProfile = async (
  imageUrl,
  name,
  role,
  instances,
  userId
) => {
  try {
    const { error } = await supabase
      .from("profiles")
      .update({
        avatar_url: imageUrl,
        name: name,
        role: role,
        instances: instances,
      })
      .eq("id", userId);

    if (error) throw error;
  } catch (error) {
    console.error(error);
  }
};
