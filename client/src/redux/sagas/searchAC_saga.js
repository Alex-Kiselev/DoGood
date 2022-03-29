export const searchPost = (posts) => {
  return {
    type: 'SEARCH_POST',
    payload: posts,
  };
};

//тут дёргаю наш экшен 
