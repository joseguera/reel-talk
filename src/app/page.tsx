import FormButton from './components/FormButton'

export default function Login() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Login Screen</h1>
      <FormButton>
        Continue with Apple
      </FormButton>
      <FormButton>
        Continue with Google
      </FormButton>
      <FormButton>
        Continue with Facebook
      </FormButton>
    </main>
  );
}
