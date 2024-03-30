'use client'

import {
  AtSymbolIcon,
  HashtagIcon,
  UserIcon,
} from '@heroicons/react/24/outline'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { Button } from '../button'
import { User, Hobby } from '@/app/_types/types'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useRouter } from 'next/navigation'
import { editUser } from '@/app/_lib/data'

export default function Form({
  hobbies,
  user,
}: {
  hobbies: Hobby[]
  user: User
}) {
  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<User>({
    defaultValues: {
      first_name: user.first_name,
      last_name: user.last_name,
      age: user.age,
      email: user.email,
      hobby_id: user.hobby_id,
    },
  })

  const onSubmit = handleSubmit((data) =>
    editUser({ body: data, id: user.user_id }).then((payload) => {
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
    <form onSubmit={onSubmit}>
      <ToastContainer />
      <div className='rounded-md bg-gray-50 p-4 md:p-6'>
        {/* First Name */}
        <div className='mb-4'>
          <label
            htmlFor='first_name'
            className='mb-2 block text-sm font-medium'
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

        {/* Last Name */}
        <div className='mb-4'>
          <label htmlFor='nik' className='mb-2 block text-sm font-medium'>
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

        {/* Email */}
        <div className='mb-4'>
          <label htmlFor='email' className='mb-2 block text-sm font-medium'>
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

        {/* Age */}
        <div className='mb-4'>
          <label htmlFor='age' className='mb-2 block text-sm font-medium'>
            Age
          </label>
          <div className='relative mt-2 rounded-md'>
            <div className='relative'>
              <input
                id='age'
                type='number'
                placeholder='Input hobby name'
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

        {/* Hobbies */}
        <div className='mb-4'>
          <label htmlFor='nik' className='mb-2 block text-sm font-medium'>
            Hobby
          </label>
          <div className='relative mt-2 rounded-md'>
            <div className='relative'>
              <select
                id='hobby'
                className='peer block w-full rounded-md border border-gray-200 py-2 pl-2 pr-8 text-sm outline-2 placeholder:text-gray-500'
                {...register('hobby_id', {
                  required: 'Hobby must be selected',
                })}
              >
                <option value=''>Select a hobby</option>
                {hobbies
                  .filter((hobby) => hobby.is_active)
                  .map((hobby) => (
                    <option key={hobby.hobby_id} value={hobby.hobby_id}>
                      {hobby.hobby_name}
                    </option>
                  ))}
              </select>
            </div>
            <div id='hobby-error' aria-live='polite' aria-atomic='true'>
              {errors.hobby_id && (
                <p className='mt-2 text-sm text-red-500'>
                  {errors.hobby_id.message}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className='mt-6 flex justify-end gap-4'>
        <Link
          href={`/users`}
          className='flex h-10 items-center rounded-lg bg-white px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200'
        >
          Cancel
        </Link>
        <Button type='submit'>Update User</Button>
      </div>
    </form>
  )
}
