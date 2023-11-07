import FormButton from './components/FormButton'

export default function Login() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Login Screen</h1>
      <FormButton buttonText={`Continue with Apple`} />
      <FormButton buttonText='Continue with Google' />
      <FormButton buttonText='Continue with Facebook' />
    </main>
  );
}
