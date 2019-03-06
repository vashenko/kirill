import * as postsService from "@/services/posts/index"

const getPosts = ({ commit }) => {
  return postsService
    .getPosts()
    .then(response => {
      if (!response) false

      commit("setPosts", {
        posts: response.data
      })
    })
    .catch(error => {
      throw error
    })
}

const actions = {
  getPosts
}

export default actions
