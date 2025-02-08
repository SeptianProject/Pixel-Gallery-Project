import { useEffect, useState } from "react";
import { sortItems } from "../../assets/assets";
import { supabase } from "../../lib/helper/createClient";

const ButtonSortItems = ({ setSelectedCategory }) => {
  const [categories, setCategories] = useState();
  const [error, setError] = useState(null);

  const fetchCategories = async () => {
    try {
      const { data, error } = await supabase.from("categories").select("*");

      if (error) throw error;

      setCategories(data);
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  if (error) return <p>Error: {error}</p>;

  return (
    <>
      {categories?.map((item, index) => (
        <button
          key={index}
          onClick={() => setSelectedCategory({ id: item.id, name: item.name })}
          className="flex justify-center items-center bg-white border border-hijau py-3 md:py-5 rounded-2xl mt-2"
        >
          {item.name}
        </button>
      ))}
    </>
  );
};

export default ButtonSortItems;
