import axios from "axios"
import { Person } from "../../types/Peopels"

export const get = (): Promise<any> => {
  return axios.get<Person[]>("http://localhost:3000/people")
}
