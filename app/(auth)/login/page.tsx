import LoginForm from '@/app/_ui/loginForm'

export default function LoginPage() {
  return (
    <main className='flex items-center justify-center md:h-screen '>
      <div className='relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32'>
        <div className='flex h-20 w-full items-end rounded-lg bg-red-500 p-3 md:h-28'>
          <div className='w-96 text-white'>NominaGames</div>
        </div>
        <LoginForm />
      </div>
    </main>
  )
}
