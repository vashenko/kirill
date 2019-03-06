import actions from './actions';
import getters from './getters';
import mutations from './mutations';

import { PeopleStore } from '@/types/People';

const state: PeopleStore = {
  people: null
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
