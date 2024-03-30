import { getHobby } from '@/app/_lib/data'
import Breadcrumbs from '@/app/_ui/breadcrumbs'
import Form from '@/app/_ui/hobbies/editForm'

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id
  const hobby = await getHobby({ id: id })

  return (
    <main className='w-full p-4 rounded-md bg-gray-100'>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Hobbies', href: '/hobbies' },
          {
            label: 'Edit Hobby',
            href: `/hobbies/${params.id}/edit`,
            active: true,
          },
        ]}
      />

      <Form hobby={hobby} />
    </main>
  )
}
