export const handleChange = function handleChange(e, setFormData) {
  setFormData((prevFormData) => {
    return {
      ...prevFormData,
      [e.target.name]: e.target.value,
    };
  });
};

export const handleSelectChange = (selectedOption, setFormData, field) => {
  setFormData((prev) => ({
    ...prev,
    field: selectedOption,
  }));
};
