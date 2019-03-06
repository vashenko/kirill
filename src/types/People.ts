import { Post } from "./Post"
export interface Person {
  name: string
  surname: string
  id: number
  imgUrl: string
  proffesion: string
  about: string
  rating: number
  isBanned: boolean
  posts: Post[]
}

export interface PeopleStore {
  people: Person[]
}
