import React from 'react'
import { Link } from 'react-router-dom'
import { GoArrowLeft } from 'react-icons/go'

const Login = () => {
  return (
    <div className="">
      <Link to="/">
        <GoArrowLeft className="text-[rgb(129,0,129)] text-4xl ml-4" />
      </Link>

      <div className="flex min-h-96 justify-center items-center mt-20">
        <div className="bg-white p-8 rounded-lg shadow-lg w-[80%] max-w-md">
          <h2 className="text-[rgb(129,0,129)] text-xl font-semibold">Login</h2>
          <form action="">
            <div className="mb-3">
            <label htmlFor='email' className='block text-sm font-semi-bold  text-black mt-4 ml-4'> Email:</label>
            <input type="email" placeholder='Email' id='email' className='mt-2 ml-4 outline-none border border- w-[90%] px-2 py-2 rounded-lg shadow-sm' />
            </div>
            <div className="mb-3">
            <label htmlFor='password' className='block text-sm font-semi-bold  text-black mt-4 ml-4'> Password:</label>
            <input type="password" placeholder='Password' id='email' className='mt-2 ml-4 outline-none border border- w-[90%] px-2 py-2 rounded-lg shadow-sm' />
            </div>
            <a href="#" className='text-[rgb(129,0,129)] text-sm font-medium text-right block'>Forget password?</a>
             <Link to="/home"><button type='submit' className='w-full rounded-lg text-white bg-[rgb(129,0,129)] shadow-sm py-2 mt-4'>Log in</button></Link>
            <p className='mt-4 text-center block font-semibold'>Don't have an acoount? <Link to="/signup" className='text-[rgb(129,0,129)]'>Sign up</Link></p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login