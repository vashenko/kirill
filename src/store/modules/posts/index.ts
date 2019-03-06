import actions from "./actions"
import getters from "./getters"
import mutations from "./mutations"

import { PostsStore } from "@/types/Post"

const state: PostsStore = {
  posts: null
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
