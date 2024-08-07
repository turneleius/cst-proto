'use client';
import { useState } from "react";
import { userLogin } from "./actions/formActions";
import Link from 'next/link'


const LoginForm = () => {
  const [loggedIn, setLoggedIn] = useState(true);

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    const loggedIn = await userLogin({ email, password });
    setLoggedIn(() => loggedIn);
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold mb-6">Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Email / Username<span className="text-red-500">*</span></label>
          <input className="w-full px-4 py-2 border rounded" name="email" type="email" required />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Password<span className="text-red-500">*</span></label>
          <input className="w-full px-4 py-2 border rounded" name="password" type="password" required />
        </div>
        <button className="w-full bg-purple-500 text-white px-4 py-2 rounded" type="submit">Login</button>
      </form>
      {!loggedIn && <p className="text-red-500">Login failed</p>}
      <p className="text-center pt-2">
        <a href="#" className="text-purple-500">Forgot Password?</a>
      </p>
      <p className="text-center pt-2">
        Don't have an account? <a href="/register" className="text-purple-500">Create Account</a>
      </p>
    </div>
  );
}

export default LoginForm;