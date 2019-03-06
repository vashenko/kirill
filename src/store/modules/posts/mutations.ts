import { PostStore } from "@/types/Post"

const mutations = {
  setPosts: (state: PostStore, { posts }) => {
    console.log(posts)
    state.posts = posts
  }
}

export default mutations
