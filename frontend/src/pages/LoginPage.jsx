import React from 'react'
import { Link } from 'react-router-dom'
import { useAuthStore } from '../store/authUser.js';

const LoginPage = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const { login, isLoggingIn } = useAuthStore();

  const handleLogin = (e) => {
    e.preventDefault();
    login({ email, password });
  }

  return (<div className='h-screen w-full hero-bg'>
    <header className='max-w-6xl mx-auto flex items-center justify-between p-4'>

      <Link to={"/"}>
        <img src='/netflix-logo.png' alt='logo' className='w-52'></img>
      </Link>
    </header>

    <div className='flex justify-center items-center mt-20 mx-3'>
      <div className='w-full max-w-md p-8 space-y-6 bg-black/60 rounded-lg shadow-md'>
        <h1 className='text-center text-white text-2xl font-bold mb-4'>Login</h1>

        <form className='space-y-4' onSubmit={handleLogin}>
          <div>
            <label htmlFor='email' className='text-sm font-medium text-gray-300 block'>Email</label>
            <input type='email' id='email' className='w-full px-3 py-2 mt-1 border border-gray-700 rounded-md bg-transparent text-white focus:outline-none focus:ring'
              placeholder='you@example.com'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor='password' className='text-sm font-medium text-gray-300 block'>Password</label>
            <input type='password' id='password' className='w-full px-3 py-2 mt-1 border border-gray-700 rounded-md bg-transparent text-white focus:outline-none focus:ring'
              placeholder='********'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type='submit' className='w-full py-2 bg-red-600 text-white font-semibold rounded-md
          hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition duration-200 ease-in-out'
          disabled={isLoggingIn}>
            {isLoggingIn ? "Loading..." : "Login"}</button>
        </form>
        <div className='text-center text-gray-400 mt-4'>
          Don't have an account?
          <Link to={"/signup"} className='text-red-600 hover:underline'> Sign Up</Link>
        </div>
      </div>
    </div>

  </div>)
}

export default LoginPage