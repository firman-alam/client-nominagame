import Breadcrumbs from '@/app/_ui/breadcrumbs'
import Form from '@/app/_ui/hobbies/createForm'

export default function Page() {
  return (
    <main className='w-full p-4 rounded-md bg-gray-100'>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Hobbies', href: '/hobbies' },
          {
            label: 'Add Hobby',
            href: `/hobbies/create`,
            active: true,
          },
        ]}
      />

      <Form />
    </main>
  )
}
