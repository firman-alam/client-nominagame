import { getHobbies } from '@/app/_lib/data'
import { EditHobby } from './buttons'
import { Hobby } from '@/app/_types/types'

const TableHobbies = async ({ search }: { search: string }) => {
  const hobbies = await getHobbies({ search })

  return (
    <div className='mt-6 flow-root'>
      <div className='inline-block min-w-full align-middle'>
        <div className='rounded-lg bg-gray-50 p-2 md:pt-0'>
          <table className='hidden min-w-full text-gray-900 md:table'>
            <thead className='rounded-lg text-left text-sm font-normal'>
              <tr>
                <th scope='col' className='px-4 py-5 font-medium sm:pl-6'>
                  Hobby
                </th>
                <th scope='col' className='px-4 py-5 font-medium sm:pl-6'>
                  Active
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
              {hobbies.map((hobby: Hobby) => (
                <tr
                  key={hobby.hobby_id}
                  className='w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg'
                >
                  <td className='whitespace-nowrap px-3 py-3'>
                    {hobby.hobby_name}
                  </td>
                  <td className='whitespace-nowrap px-3 py-3'>
                    {hobby.is_active ? 'Yes' : 'No'}
                  </td>

                  <td className='whitespace-nowrap py-3 pl-6 pr-3'>
                    <div className='flex justify-center gap-3'>
                      <EditHobby id={hobby.hobby_id} />
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
