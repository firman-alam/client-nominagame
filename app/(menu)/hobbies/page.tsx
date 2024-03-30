import Breadcrumbs from '@/app/_ui/breadcrumbs'
import { AddHobby } from '@/app/_ui/hobbies/buttons'
import TableHobbies from '@/app/_ui/hobbies/tableHobbies'
import Search from '@/app/_ui/search'

export default async function Page({
  searchParams,
}: {
  searchParams?: { query?: string }
}) {
  const query = searchParams?.query || ''

  return (
    <main className='w-full p-4 rounded-md bg-gray-100'>
      <Breadcrumbs
        breadcrumbs={[{ label: 'Hobbies', href: '/hobbies', active: true }]}
      />
      <div className='mt-4 flex items-center justify-between gap-2 md:mt-8'>
        <Search placeholder='Search hobbies...' />
        <AddHobby />
      </div>

      <TableHobbies search={query} />
    </main>
  )
}
