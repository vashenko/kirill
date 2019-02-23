import { PeopleStore } from "@/types/People"

const mutations = {
  setPeople: (state: PeopleStore, { people }) => {
    state.people = people
  },

  setPerson: (state: PeopleStore, { person }) => {
    state.person = person
  }
};

export default mutations
