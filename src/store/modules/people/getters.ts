import { Person } from '@/types/People';


const getters = {
  people: (state): Person[] => {
    return state.people;
  }
}

export default getters