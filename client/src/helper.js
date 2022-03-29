const category = {
  eat: "islands#blueFoodIcon",
  clothes: 'islands#blueFashionIcon',
  furniture: "islands#blueSouvenirsIcon",
  other: "islands#blueStarIcon",
};

export const ourCategory = (category_id) => {
  switch (category_id) {
    case 1:
      return category.eat;
    case 2:
      return category.clothes;
    case 3:
      return category.furniture;
    default:
      return category.other;
  }
};
