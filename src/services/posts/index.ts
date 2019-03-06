import axios from "axios"
import { Post } from "@/types/Post"

export const getPosts = (): Promise<any> => {
  return axios.get<Post[]>(`http://localhost:8000/posts`)
}
