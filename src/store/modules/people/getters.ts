import { Person } from '@/types/People';


const getters = {
  people: (state): Person[] => {
    return state.people;
  },

  person: (state): Person => {
    return state.person;
  }
};

export default getters