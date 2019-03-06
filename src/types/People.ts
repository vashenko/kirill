export interface Person {
  name: string
  surname: string
  id: number
  imgUrl: string
  proffesion: string
  about: string
  rating: number
  isBanned: boolean
  posts: string
}

export interface PeopleStore {
  people: Person[]
}

export interface Post {
  title: string
  content: string
}
