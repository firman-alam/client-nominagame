'use client'

import Link from 'next/link'
import { Button } from './button'
import { lato } from './fonts'

import {
  ArrowRightEndOnRectangleIcon,
  AtSymbolIcon,
  KeyIcon,
} from '@heroicons/react/24/outline'
import { loginForm } from '../_types/types'
import { useForm } from 'react-hook-form'
import { login } from '../_lib/auth'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useRouter } from 'next/navigation'

export default function LoginForm() {
  const router = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<loginForm>()

  const onSubmit = handleSubmit((data) =>
    login(data).then((payload) => {
      if (payload.status) {
        toast.success(payload.message)
        setTimeout(() => {
          router.push('/users')
        }, 2000)
      } else {
        toast.error(payload.message)
      }
    })
  )

  return (
    <form className='space-y-3'>
      <ToastContainer />
      <div className='flex-1 rounded-lg bg-gray-200 px-6 pb-4 pt-8'>
        <h1 className={`${lato.className} mb-3 text-xl`}>Welcome!</h1>
        <div className='w-full'>
          <div>
            <label
              className='mb-3 mt-5 block text-sm font-medium text-gray-900'
              htmlFor='email'
            >
              Email
            </label>
            <div className='relative'>
              <input
                id='email'
                type='text'
                placeholder='Input email'
                aria-describedby='email-error'
                className='peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500'
                {...register('email', {
                  required: 'Email must be filled',
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: 'Invalid email format',
                  },
                })}
              />
              <AtSymbolIcon className='pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900' />
            </div>
            <div id='email-error' aria-live='polite' aria-atomic='true'>
              {errors.email && (
                <p className='mt-2 text-sm text-red-500'>
                  {errors.email.message}
                </p>
              )}
            </div>
          </div>
          <div className='mt-4'>
            <label
              className='mb-3 mt-5 block text-sm font-medium text-gray-900'
              htmlFor='password'
            >
              Password
            </label>
            <div className='relative'>
              <input
                id='password'
                type='text'
                placeholder='Input password'
                aria-describedby='password-error'
                className='peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500'
                {...register('password', {
                  required: 'Password must be filled',
                })}
              />
              <KeyIcon className='pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900' />
            </div>
            <div id='password-error' aria-live='polite' aria-atomic='true'>
              {errors.password && (
                <p className='mt-2 text-sm text-red-500'>
                  {errors.password.message}
                </p>
              )}
            </div>
          </div>
        </div>
        <Button className='mt-4 w-full bg-red-500' onClick={onSubmit}>
          Log in
          <ArrowRightEndOnRectangleIcon className='ml-auto h-5 w-5 text-gray-50' />
        </Button>
        <div
          className='flex h-8 items-end space-x-1'
          aria-live='polite'
          aria-atomic='true'
        >
          <p className='text-sm font-medium text-gray-900'>
            Don't have an account?{' '}
            <Link href='/register' className='text-blue-400'>
              <span>Sign Up</span>
            </Link>
          </p>
        </div>
      </div>
    </form>
  )
}
