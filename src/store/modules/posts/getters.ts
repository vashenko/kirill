import { Post } from "@/types/Post"

const getters = {
  posts: (state): Post[] => {
    return state.posts
  }
}

export default getters
