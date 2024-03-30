import { getHobbies } from '@/app/_lib/data'
import Breadcrumbs from '@/app/_ui/breadcrumbs'
import Form from '@/app/_ui/users/createForm'

export default async function Page() {
  const hobbies = await getHobbies({})

  return (
    <main className='w-full p-4 rounded-md bg-gray-100'>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Users', href: '/users' },
          {
            label: 'Add User',
            href: `/users/create`,
            active: true,
          },
        ]}
      />

      <Form hobbies={hobbies} />
    </main>
  )
}
