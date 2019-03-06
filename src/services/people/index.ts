import axios from "axios"
import { Person } from "@/types/Peopels"

export const getPeople = (): Promise<any> => {
  return axios.get<Person[]>("http://localhost:8000/people")
}
