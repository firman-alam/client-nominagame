import { PencilIcon, PlusIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

export function AddHobby() {
  return (
    <Link
      href={`/hobbies/create`}
      className='flex h-10 items-center rounded-lg bg-red-500 px-4 text-sm font-medium text-white transition-colors hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600'
    >
      <span className='hidden md:block'>Add Hobby</span>{' '}
      <PlusIcon className='h-5 md:ml-4' />
    </Link>
  )
}

export function EditHobby({ id }: { id: number }) {
  return (
    <Link
      href={`/hobbies/${id}/edit`}
      className='rounded-md border p-2 bg-blue-300 hover:bg-blue-500 flex flex-row items-center gap-2'
    >
      Edit <PencilIcon className='w-5' />
    </Link>
  )
}
