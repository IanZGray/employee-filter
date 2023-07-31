import { Employee } from "./employee"

export interface Root {
  status: string
  data: Employee[]
  message: string
}
