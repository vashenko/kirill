import Vue from 'vue';
import Router from 'vue-router';
import store from '@/store/index';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/people',
      name: '/people',
      component: () => import(/* webpackChunkName: "people" */ '@/views/PeopleList.vue'),
      beforeEnter(to, from, next) {
        store.dispatch('people/getPeople');
        next();
      }
    },
  ],
});
