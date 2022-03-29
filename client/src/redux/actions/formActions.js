export const getAllPosts = (allPosts) => {
  return {
     type: 'ALL POSTS',
     payload: allPosts,
  }
}

export const getNewPost = (allPost) => {
  return {
     type: 'ADD POST',
     payload: allPost,
  }
}

export const setStatus = (allPost) => {
    return {
        type: 'SET_STATUS',
        payload: allPost,
    }
}

export const changeStatus = (id, posts) => (dispatch) => {
    const res = posts.map((el) => {
        if (el.id === id) {
        el.available = false;
        return el
    } else {
        return el
    }})
    dispatch(setStatus(res))
}
