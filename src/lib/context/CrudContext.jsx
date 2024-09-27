import { Children, createContext, useState } from "react";

export const CrudContext = createContext();

export const useCrud = () => {
  return useContext(SupabaseContext);
};

export const CrudProvider = ({ Children }) => {
  const [data, setData] = useState(null);
};
