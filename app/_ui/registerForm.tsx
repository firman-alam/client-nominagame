'use client'

import Link from 'next/link'
import { Button } from './button'
import { lato } from './fonts'

import {
  ArrowRightEndOnRectangleIcon,
  AtSymbolIcon,
  HashtagIcon,
  KeyIcon,
  UserIcon,
} from '@heroicons/react/24/outline'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { registerForm } from '../_types/types'
import { signUp } from '../_lib/auth'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function RegisterForm() {
  const router = useRouter()
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<registerForm>()

  const onSubmit = handleSubmit((data) =>
    signUp(data).then((payload) => {
      if (payload.status) {
        toast.success(payload.message)
        setTimeout(() => {
          router.push('/login')
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
              First Name
            </label>
            <div className='relative mt-2 rounded-md'>
              <div className='relative'>
                <input
                  id='first_name'
                  type='text'
                  placeholder='Input first name'
                  aria-describedby='first_name-error'
                  className='peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500'
                  {...register('first_name', {
                    required: 'Fist name must be filled',
                  })}
                />
                <UserIcon className='pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900' />
              </div>
              <div id='first-name-error' aria-live='polite' aria-atomic='true'>
                {errors.first_name && (
                  <p className='mt-2 text-sm text-red-500'>
                    {errors.first_name.message}
                  </p>
                )}
              </div>
            </div>
          </div>

          <div>
            <label
              className='mb-3 mt-5 block text-sm font-medium text-gray-900'
              htmlFor='email'
            >
              Last Name
            </label>
            <div className='relative mt-2 rounded-md'>
              <div className='relative'>
                <input
                  id='last_name'
                  type='text'
                  placeholder='Input last name'
                  aria-describedby='last_name-error'
                  className='peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500'
                  {...register('last_name', {
                    required: 'Last name must be filled',
                  })}
                />
                <UserIcon className='pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900' />
              </div>
              <div id='last_name-error' aria-live='polite' aria-atomic='true'>
                {errors.last_name && (
                  <p className='mt-2 text-sm text-red-500'>
                    {errors.last_name.message}
                  </p>
                )}
              </div>
            </div>
          </div>

          <div>
            <label
              className='mb-3 mt-5 block text-sm font-medium text-gray-900'
              htmlFor='email'
            >
              Email
            </label>
            <div className='relative mt-2 rounded-md'>
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
          </div>

          <div>
            <label
              className='mb-3 mt-5 block text-sm font-medium text-gray-900'
              htmlFor='email'
            >
              Age
            </label>
            <div className='relative mt-2 rounded-md'>
              <div className='relative'>
                <input
                  id='age'
                  type='number'
                  placeholder='Input Age'
                  aria-describedby='age-error'
                  className='peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500'
                  {...register('age', {
                    required: 'Age must be filled',
                    pattern: {
                      value: /^(0|[1-9]\d*)(\.\d+)?$/,
                      message: 'Invalid age format',
                    },
                  })}
                />
                <HashtagIcon className='pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900' />
              </div>
              <div id='age-error' aria-live='polite' aria-atomic='true'>
                {errors.age && (
                  <p className='mt-2 text-sm text-red-500'>
                    {errors.age.message}
                  </p>
                )}
              </div>
            </div>
          </div>

          <div>
            <label
              className='mb-3 mt-5 block text-sm font-medium text-gray-900'
              htmlFor='password'
            >
              Password
            </label>
            <div className='relative mt-2 rounded-md'>
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

          <div>
            <label
              className='mb-3 mt-5 block text-sm font-medium text-gray-900'
              htmlFor='password'
            >
              Confirm Password
            </label>
            <div className='relative mt-2 rounded-md'>
              <div className='relative'>
                <input
                  id='confirm_password'
                  type='text'
                  placeholder='Input confirm password'
                  aria-describedby='confirm_password-error'
                  className='peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500'
                  {...register('confirm_password', {
                    required: 'Confirm password must be filled',
                    validate: (value) =>
                      value === watch('password') || 'Passwords do not match',
                  })}
                />
                <KeyIcon className='pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900' />
              </div>
              <div
                id='confirm_password-error'
                aria-live='polite'
                aria-atomic='true'
              >
                {errors.confirm_password && (
                  <p className='mt-2 text-sm text-red-500'>
                    {errors.confirm_password.message}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
        <Button className='mt-4 w-full bg-red-500' onClick={onSubmit}>
          Sign Up
          <ArrowRightEndOnRectangleIcon className='ml-auto h-5 w-5 text-gray-50' />
        </Button>
        <div
          className='flex h-8 items-end space-x-1'
          aria-live='polite'
          aria-atomic='true'
        >
          <p className='text-sm font-medium text-gray-900'>
            Already have an account?{' '}
            <Link href='/login' className='text-blue-400'>
              <span>Sign In</span>
            </Link>
          </p>
        </div>
      </div>
    </form>
  )
}
