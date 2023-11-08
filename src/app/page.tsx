import FormButton from './components/FormButton'

export default function Login() {
  return (
    <main className="w-2/3 h-full flex flex-col items-center justify-between p-4 text-sm gap-14">
      <div className='flex flex-col items-center gap-4'>
        <h2 className='text-4xl font-semibold'>Create you account</h2>
        <div>By continuing, you agree to our <a href="#" className="text-[#FFA724]">Terms of Service</a> and <a href="#" className="text-[#FFA724]">Privacy Policy</a>.</div>
      </div>
      <div className='flex flex-col gap-8'>
        <FormButton>
          Continue with Apple
        </FormButton>
        <FormButton>
          Continue with Google
        </FormButton>
        <FormButton>
          Continue with Facebook
        </FormButton>
      </div>
      <div>Already have an account? <a href="#" className="text-[#FFA724]">Log in</a>.</div>
    </main>
  );
}
