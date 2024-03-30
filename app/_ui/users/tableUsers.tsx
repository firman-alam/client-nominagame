import { getUsers } from '@/app/_lib/data'
import { User } from '@/app/_types/types'
import { EditUser } from './buttons'

const TableHobbies = async ({ search }: { search: string }) => {
  const users = await getUsers({ search })

  return (
    <div className='mt-6 flow-root'>
      <div className='inline-block min-w-full align-middle'>
        <div className='rounded-lg bg-gray-50 p-2 md:pt-0'>
          <table className='hidden min-w-full text-gray-900 md:table'>
            <thead className='rounded-lg text-left text-sm font-normal'>
              <tr>
                <th scope='col' className='px-4 py-5 font-medium sm:pl-6'>
                  First Name
                </th>
                <th scope='col' className='px-4 py-5 font-medium sm:pl-6'>
                  Last Name
                </th>
                <th scope='col' className='px-4 py-5 font-medium sm:pl-6'>
                  Age
                </th>
                <th
                  scope='col'
                  className='px-4 py-5 font-medium sm:pl-6 text-center'
                >
                  Action
                </th>
              </tr>
            </thead>
            <tbody className='bg-white'>
              {users.map((user: User) => (
                <tr
                  key={user.user_id}
                  className='w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg'
                >
                  <td className='whitespace-nowrap px-3 py-3'>
                    {user.first_name}
                  </td>
                  <td className='whitespace-nowrap px-3 py-3'>
                    {user.last_name}
                  </td>
                  <td className='whitespace-nowrap px-3 py-3'>{user.age}</td>
                  <td className='whitespace-nowrap py-3 pl-6 pr-3'>
                    <div className='flex justify-center gap-3'>
                      <EditUser id={user.user_id} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default TableHobbies
