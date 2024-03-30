import { jwtVerify } from 'jose'
import Cookies from 'js-cookie'
import { loginForm, registerForm } from '../_types/types'

import { useRouter } from 'next/navigation'

interface UserJwtPayload {
  jti: string
  iat: number
}

export const getJwtSecretKey = () => {
  const secret = process.env.JWT_SECRET_KEY

  if (!secret || secret.length === 0) {
    throw new Error('The environment variable JWT_SECRET_KEY is not set.')
  }
  return secret
}

export const verifyAuth = async (token: string) => {
  try {
    const verified = await jwtVerify(
      token,
      new TextEncoder().encode(getJwtSecretKey())
    )

    return verified.payload as UserJwtPayload
  } catch (error) {
    throw new Error('Your token has expired.')
  }
}

export const login = async (loginData: loginForm) => {
  const res = await fetch(`http://127.0.0.1:5000/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ ...loginData }),
    cache: 'no-store',
  })

  const response = await res.json()

  if (!response.status) {
    return response
  }

  const expirationDate = new Date(new Date().getTime() + 60 * 60 * 1000) // 1 hour from now
  Cookies.set('user_token', response.token, {
    expires: expirationDate,
    path: '/',
    domain: 'localhost',
    secure: false,
    httpOnly: false,
  })

  return response
}

export const signUp = async (registerData: registerForm) => {
  const res = await fetch(`http://127.0.0.1:5000/auth/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ ...registerData }),
    cache: 'no-store',
  })

  const response = await res.json()

  if (!response.status) {
    return response
  }

  return response
}

export const logout = () => {
  Cookies.remove('user_token')
}
