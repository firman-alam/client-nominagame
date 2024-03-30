// import { cookies } from 'next/headers'
import {
  ApiResponseHobbies,
  ApiResponseHobby,
  ApiResponseUser,
  ApiResponseUsers,
  Hobby,
  User,
} from '@/app/_types/types'

export async function getHobbies({
  search = '',
}: {
  search?: string
}): Promise<Hobby[]> {
  // const token = cookies().get('user_token')?.value
  // console.log(token)
  const res = await fetch(
    `http://127.0.0.1:5000/api/hobbies?search=${search}`,
    {
      cache: 'no-store',
      headers: {
        'Content-Type': 'application/json',
      },
    }
  )
  const response: ApiResponseHobbies = await res.json()

  if (!response.status) {
    throw new Error(response.message)
  }

  return response.data
}

export async function getHobby({ id }: { id: string }): Promise<Hobby> {
  const token = ''
  const res = await fetch(`http://127.0.0.1:5000/api/hobby/${id}`, {
    cache: 'no-store',
    headers: {
      'Content-Type': 'application/json',
    },
  })
  const response: ApiResponseHobby = await res.json()

  if (!response.status) {
    throw new Error(response.message)
  }

  return response.data
}

export async function addHobby({ body }: { body: Hobby }) {
  const token = ''
  const res = await fetch(`http://127.0.0.1:5000/api/hobby`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ ...body }),
    cache: 'no-store',
  })

  const response = await res.json()

  return response
}

export async function editHobby({ body, id }: { body: Hobby; id: number }) {
  const token = ''
  const res = await fetch(`http://127.0.0.1:5000/api/hobby/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ ...body }),
    cache: 'no-store',
  })

  const response = await res.json()

  return response
}

export async function getUsers({
  search = '',
}: {
  search?: string
}): Promise<User[]> {
  const res = await fetch(`http://127.0.0.1:5000/api/users?search=${search}`, {
    cache: 'no-store',
    headers: {
      'Content-Type': 'application/json',
    },
  })
  const response: ApiResponseUsers = await res.json()

  if (!response.status) {
    throw new Error(response.message)
  }

  return response.data
}

export async function getUser({ id }: { id: string }): Promise<User> {
  const token = ''
  const res = await fetch(`http://127.0.0.1:5000/api/user/${id}`, {
    cache: 'no-store',
    headers: {
      'Content-Type': 'application/json',
    },
  })
  const response: ApiResponseUser = await res.json()

  if (!response.status) {
    throw new Error(response.message)
  }

  return response.data
}

export async function addUser({ body }: { body: User }) {
  const token = ''
  const res = await fetch(`http://127.0.0.1:5000/api/user`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ ...body }),
    cache: 'no-store',
  })

  const response = await res.json()

  return response
}

export async function editUser({ body, id }: { body: User; id: number }) {
  const token = ''
  const res = await fetch(`http://127.0.0.1:5000/api/user/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ ...body }),
    cache: 'no-store',
  })

  const response = await res.json()

  return response
}
