import { PeopleStore } from "@/types/People"

const mutations = {
  setPeople: (state: PeopleStore, { people }) => {
    state.people = people
  }
}

export default mutations
