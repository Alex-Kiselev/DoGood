const convertCategoryId = (category) => {


  switch (category) {
    case "Food":
      return (category_id = 1);
    case "Clothers":
      return (category_id = 2);
    case "Furniture":
      return (category_id = 3);
    default:
      return category_id = "Без категории";
  }}

module.exports = {
  convertCategoryId,
};
