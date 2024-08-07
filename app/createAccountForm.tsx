'use client';
import { useState } from "react";
import { createAccount } from "./actions/formActions";
import Link from 'next/link'

const CreateAccountForm = ({ formTitle }: { formTitle: string }) => {
  const [country, setCountry] = useState("");

  const handleChange = (event: any) => {
    setCountry(() => event.target.value);
  }

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    console.log(' submit handled');
    const user = {
      firstName: event.target.firstName.value,
      lastName: event.target.lastName.value,
      email: event.target.email.value,
      password: event.target.password.value,
      // passwordConfirmation: event.target.passwordConfirmation.value,
      country: event.target.country.value
    }
    await createAccount(user);
  }

  return (
    <div className="max-w-md mx-auto mt-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold mb-6">{formTitle}</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">First Name<span className="text-red-500">*</span></label>
          <input className="w-full px-4 py-2 border rounded" name="firstName" type="text" required />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Last Name<span className="text-red-500">*</span></label>
          <input className="w-full px-4 py-2 border rounded" name="lastName" type="text" required />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Email / Username<span className="text-red-500">*</span></label>
          <input className="w-full px-4 py-2 border rounded" name="email" type="email" required />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Country<span className="text-red-500">*</span></label>
          <select className="w-full px-4 py-2 border rounded" name="country" value={country} onChange={handleChange} required>
            <option value="">Select</option>
            <option value="TT">Trinidad and Tobago</option>
            <option value="JA">Jamaica</option>
            <option value="BD">Barbados</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Password<span className="text-red-500">*</span></label>
          <input className="w-full px-4 py-2 border rounded" name="password" type="password" required />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700">Confirm Password<span className="text-red-500">*</span></label>
          <input className="w-full px-4 py-2 border rounded" name="passwordConfirmation" type="password" required />
        </div>
        <button className="w-full bg-purple-500 text-white px-4 py-2 rounded" type="submit">Create Account</button>
        {/* <Link href="/role">
        </Link> */}
      </form>
      <p className="text-center pt-2">
        Already have an account? <a href="/login" className="text-purple-500">Login</a>
      </p>
    </div>
  );
}

export default CreateAccountForm;