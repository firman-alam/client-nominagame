import Breadcrumbs from '@/app/_ui/breadcrumbs'
import Search from '@/app/_ui/search'
import { AddUser } from '@/app/_ui/users/buttons'
import TableUsers from '@/app/_ui/users/tableUsers'

export default async function Page({
  searchParams,
}: {
  searchParams?: { query?: string }
}) {
  const query = searchParams?.query || ''

  return (
    <main className='w-full p-4 rounded-md bg-gray-100'>
      <Breadcrumbs
        breadcrumbs={[{ label: 'Users', href: '/users', active: true }]}
      />
      <div className='mt-4 flex items-center justify-between gap-2 md:mt-8'>
        <Search placeholder='Search users...' />
        <AddUser />
      </div>

      <TableUsers search={query} />
    </main>
  )
}
