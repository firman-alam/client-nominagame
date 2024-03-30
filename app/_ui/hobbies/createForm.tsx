'use client'

import {
  ArrowDownCircleIcon,
  ArrowUpCircleIcon,
  AtSymbolIcon,
} from '@heroicons/react/24/outline'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { Button } from '../button'
import { Hobby } from '@/app/_types/types'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useRouter } from 'next/navigation'
import { addHobby } from '@/app/_lib/data'

export default function Form() {
  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Hobby>()

  const onSubmit = handleSubmit((data) =>
    addHobby({ body: data }).then((payload) => {
      if (payload.status) {
        toast.success(payload.message)
        setTimeout(() => {
          router.push('/hobbies')
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
        {/* Hobby */}
        <div className='mb-4'>
          <label htmlFor='nik' className='mb-2 block text-sm font-medium'>
            Hobby
          </label>
          <div className='relative mt-2 rounded-md'>
            <div className='relative'>
              <input
                id='hobby'
                type='text'
                placeholder='Input hobby name'
                aria-describedby='hobby_name-error'
                className='peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500'
                {...register('hobby_name', {
                  required: 'Hobby must be filled',
                })}
              />
              <AtSymbolIcon className='pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900' />
            </div>
            <div id='hobby_name-error' aria-live='polite' aria-atomic='true'>
              {errors.hobby_name && (
                <p className='mt-2 text-sm text-red-500'>
                  {errors.hobby_name.message}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Is Active */}
        <fieldset>
          <legend className='mb-2 block text-sm font-medium'>Active</legend>
          <div className='rounded-md border border-gray-200 bg-white px-[14px] py-3'>
            <div className='flex gap-4'>
              <div className='flex items-center'>
                <input
                  id='true'
                  type='radio'
                  value='true'
                  aria-describedby='is_active-error'
                  className='h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2'
                  {...register('is_active', {
                    required: "Hobby's condition must be filled",
                  })}
                />
                <label
                  htmlFor='true'
                  className='ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-blue-500 px-3 py-1.5 text-xs font-medium text-white'
                >
                  Active <ArrowUpCircleIcon className='h-4 w-4' />
                </label>
              </div>
              <div className='flex items-center'>
                <input
                  id='false'
                  type='radio'
                  value='false'
                  aria-describedby='is_active-error'
                  className='h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2'
                  {...register('is_active', {
                    required: "Hobby's condition must be filled",
                  })}
                />
                <label
                  htmlFor='false'
                  className='ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-red-500 px-3 py-1.5 text-xs font-medium text-white'
                >
                  Inactive <ArrowDownCircleIcon className='h-4 w-4' />
                </label>
              </div>
            </div>
            <div id='is_active-error' aria-live='polite' aria-atomic='true'>
              {errors.is_active && (
                <p className='mt-2 text-sm text-red-500'>
                  {errors.is_active.message}
                </p>
              )}
            </div>
          </div>
        </fieldset>
      </div>

      <div className='mt-6 flex justify-end gap-4'>
        <Link
          href={`/hobbies`}
          className='flex h-10 items-center rounded-lg bg-white px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200'
        >
          Cancel
        </Link>
        <Button type='submit'>Add Hobby</Button>
      </div>
    </form>
  )
}
