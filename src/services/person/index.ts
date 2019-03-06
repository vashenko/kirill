import axios from "axios"
import { Person } from "@/types/Peopels"

export const getUserById = (id: string): Promise<Person> => {
  return axios.get<Person>(`http://localhost:8000/people/${id}`)
}
