import Vue from "vue"
import Router from "vue-router"
import store from "@/store/index"

import PersonProfile from "@/components/PersonProfile.vue"
import PeopleList from "@/views/PeopleList.vue"
import PostsList from "@/views/PostsList.vue"

Vue.use(Router)

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/people",
      name: "people",
      component: PeopleList,
      beforeEnter(to, from, next) {
        store.dispatch("people/getPeople")
        next()
      }
    },
    {
      path: "/posts",
      name: "posts",
      component: PostsList,
      beforeEnter(to, from, next) {
        store.dispatch("posts/getPosts")
        next()
      }
    },
    {
      path: "/people/:id",
      component: PersonProfile,
      name: "personProfile"
    }
  ]
})
