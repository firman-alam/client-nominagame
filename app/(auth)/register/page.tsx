import RegisterForm from '@/app/_ui/registerForm'

export default function LoginPage() {
  return (
    <main className='flex items-center justify-center md:h-screen'>
      <div className='relative mx-auto flex w-full max-w-[500px] flex-col space-y-2.5 p-4 md:mt-28'>
        <RegisterForm />
      </div>
    </main>
  )
}
