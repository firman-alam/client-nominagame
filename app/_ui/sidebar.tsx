'use client'

import Link from 'next/link'
import SideLinks from './side-links'
import { ArrowLeftEndOnRectangleIcon } from '@heroicons/react/24/outline'
import { logout } from '../_lib/auth'

export default function Sidebar() {
  const handleLogout = () => {
    logout()
  }

  return (
    <aside className='flex h-full flex-col px-3 py-4 md:px-2'>
      <Link
        className='mb-2 flex h-28 items-end justify-start rounded-md bg-red-500 p-4 md:h-40'
        href='/'
      >
        <div className='w-full text-white md:w-full'>Nomina Games</div>
      </Link>
      <div className='flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2'>
        <SideLinks />
        <div className='hidden h-auto w-full grow rounded-md bg-gray-100 md:block'></div>
        <form>
          <button
            onClick={handleLogout}
            className='flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-100 p-3 text-sm font-medium hover:bg-red-100 hover:text-jasa-red md:flex-none md:justify-start md:p-2 md:px-3'
          >
            <ArrowLeftEndOnRectangleIcon className='w-6' />
            <div className='hidden md:block'>Log Out</div>
          </button>
        </form>
      </div>
    </aside>
  )
}
