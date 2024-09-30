import { createContext, useState } from "react";
import { supabase } from "../helper/createClient";

export const CrudContext = createContext();

// export const useCrud = ({ children }) => {
//   return useContext(SupabaseContext);
// };

export const CrudProvider = ({ children }) => {
  const deleteOldAvatar = async (oldAvatarUrl) => {
    if (!oldAvatarUrl) return;

    const fileName = oldAvatarUrl.split("/").pop(); // Mengambil bagian terakhir dari URL

    // Membuat file path untuk Supabase
    const filePath = `public/${fileName}`;

    const { error: deleteError } = await supabase.storage
      .from("avatars")
      .remove([filePath]);

    if (deleteError) {
      throw new Error("Error menghapus avatar lama:" + deleteError);
    }
  };

  return (
    <CrudContext.Provider value={{ deleteOldAvatar }}>
      {children}
    </CrudContext.Provider>
  );
};
