'use client'
import * as React from 'react';
import FormButton from './components/FormButton'
import { usePageContext } from '../context/myPagesContext'

const Login: React.FC = () => {
  const { pages, pageCount, getNextPage } = usePageContext();

  return (
    <main className="w-2/3 h-full flex flex-col items-center justify-between p-4 text-sm gap-14">
      <div className='flex flex-col items-center gap-4'>
        <h2 className='text-4xl font-semibold'>Create you account</h2>
        <div>By continuing, you agree to our <a href="#" className="text-[#FFA724]">Terms of Service</a> and <a href="#" className="text-[#FFA724]">Privacy Policy</a>.</div>
      </div>
      <div className='flex flex-col gap-8'>
        <FormButton pageNav={getNextPage}>
          Continue with Apple
        </FormButton>
        <FormButton pageNav={getNextPage}>
          Continue with Google
        </FormButton>
        <FormButton pageNav={getNextPage}>
          Continue with Facebook
        </FormButton>
      </div>
      <div>Already have an account? <a href="#" className="text-[#FFA724]">Log in</a>.</div>
    </main>
  );
}

export default Login;