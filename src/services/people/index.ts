import axios from 'axios';
import { Person } from '@/types/Peopels';

export const getPeople = (): Promise<any> => {
  return axios.get<Person[]>('http://localhost:3000/people');
}

export const getPerson = (id: string): Promise<any> => {
  return axios.get<Person>('http://localhost:3000/people/' + `${id}`)
}