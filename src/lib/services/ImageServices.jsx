import { supabase } from "../helper/createClient";

const getFileExtension = (file) => {
  if (file instanceof File) {
    return file.name.split(".").pop();
  } else if (file instanceof Blob) {
    const mimeType = file.type;
    switch (mimeType) {
      case "image/jpeg":
        return "jpg";
      case "image/png":
        return "png";
      case "image/gif":
        return "gif";
      case "image/webp":
        return "webp";
      default:
        return "jpg"; // default fallback
    }
  }

  return "jpg";
};

export const uploadProjectCover = async (file, folder = "projects") => {
  try {
    if (!file) {
      throw new Error("No File proided");
    }

    if (!(file instanceof File || file instanceof Blob)) {
      throw new Error("Invalid file type. Must be File or Blob");
    }

    const timeStamp = Date.now();
    const fileExtension = getFileExtension(file);
    const fileName = `projectCover_${timeStamp}.${fileExtension}`;
    const filePath = `${folder}/${fileName}`;

    // Upload file
    const { data: uploadData, error: uploadError } = await supabase.storage
      .from("covers")
      .upload(filePath, file, {
        cacheControl: "3600",
        upsert: false,
      });

    if (uploadError) {
      throw uploadError;
    }

    const { data: urlData, error: urlError } = await supabase.storage
      .from("covers")
      .getPublicUrl(filePath);

    if (urlError) {
      throw urlError;
    }

    return {
      data: {
        path: filePath,
        url: urlData.publicUrl,
      },
      error: null,
    };
  } catch (error) {
    console.log("Upload error:", error);
    return {
      data: null,
      error: {
        message: error.message,
        datails: error,
      },
    };
  }
};

export const deleteOldCover = async (oldCoverProject, folder = "projects") => {
  if (!oldCoverProject) return { error: null };
  try {
    const fileName = oldCoverProject.split("/").pop();

    const filePath = `${folder}/${fileName}`;

    const { error } = await supabase.storage.from("covers").remove([filePath]);

    if (error) throw error;

    return { error: null };
  } catch (error) {
    console.error(error);
    return { error: error };
  }
};
