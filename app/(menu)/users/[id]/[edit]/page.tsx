import { getHobbies, getUser } from '@/app/_lib/data'
import Breadcrumbs from '@/app/_ui/breadcrumbs'
import Form from '@/app/_ui/users/editForm'

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id
  const user = await getUser({ id: id })
  const hobbies = await getHobbies({})

  return (
    <main className='w-full p-4 rounded-md bg-gray-100'>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Users', href: '/users' },
          {
            label: 'Edit User',
            href: `/users/${params.id}/edit`,
            active: true,
          },
        ]}
      />

      <Form hobbies={hobbies} user={user} />
    </main>
  )
}
