export const formatDateDashboard = (dateString) => {
  const options = { year: "numeric", month: "long" };
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", options); //Fromat ke "Month Year"
};

export const formatDateDefault = (dateString) => {
  const options = { day: "2-digit", year: "numeric", month: "long" };
  const date = new Date(dateString);
  return date.toLocaleDateString("en-GB", options);
};
