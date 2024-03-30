export interface SearchProps {
  placeholder: string
}

export interface Hobby {
  hobby_id: number
  hobby_name: string
  is_active: boolean
}

export interface ApiResponseHobbies {
  message: string
  status: boolean
  data: Hobby[]
}

export interface ApiResponseHobby {
  message: string
  status: boolean
  data: Hobby
}

export interface User {
  user_id: number
  first_name: string
  last_name: string
  email: string
  age: number
  password: string
  confirm_password?: string
  hobby_id: number
}

export interface ApiResponseUsers {
  message: string
  status: boolean
  data: User[]
}

export interface ApiResponseUser {
  message: string
  status: boolean
  data: User
}

export interface loginForm {
  email: string
  password: string
}

export interface registerForm {
  first_name: string
  last_name: string
  email: string
  age: number
  password: string
  confirm_password?: string
}
