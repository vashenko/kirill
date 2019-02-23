import * as peopleService from "@/services/people/index"

const getPeople = ({ commit }) => {
  return peopleService
    .getPeople()
    .then(response => {
      if (!response) false

      commit("setPeople", {
        people: response.data
      })
    })
    .catch(error => {
      throw error
    })
};

const getPerson = ({ commit }, id: string) => {
  return peopleService
    .getPerson(id)
    .then(response => {
        if (!response) false;

        commit("setPerson", {
            person: response.data
        })
    })
    .catch(error => {
        throw error
    })
};

const actions = {
  getPeople,
  getPerson
};

export default actions
