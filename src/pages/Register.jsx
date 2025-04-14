// src/pages/Register.js
import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const registerSchema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
    .required('Confirm Password is required'),
});

const Register = ({ onClose, switchModal }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
  });

  const onSubmit = (data) => {
    const { name, email, password } = data;
  
    // Get existing users from localStorage
    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
  
    // Check if user with the same email already exists
    const userExists = existingUsers.some((user) => user.email === email);
    if (userExists) {
      alert('A user with this email already exists.');
      return;
    }
  
    // Create new user object (don't store confirmPassword)
    const newUser = { name, email, password };
  
    // Add new user to list and update localStorage
    const updatedUsers = [...existingUsers, newUser];
    localStorage.setItem('users', JSON.stringify(updatedUsers));
  
    alert('Registration successful!');
    onClose(); // Close the registration modal
  };
  

  return (
    <div className="space-y-4">
      <h2 className="text-white text-2xl mb-4">Register</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Name Field */}
        <div>
          <Controller
            name="name"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <input
                {...field}
                type="text"
                placeholder="Full Name"
                className={`w-full px-4 py-2 rounded bg-gray-800 text-white border ${
                  errors.name ? 'border-red-500' : 'border-gray-700'
                } focus:outline-none focus:border-gray-600`}
              />
            )}
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
        </div>

        {/* Email Field */}
        <div>
          <Controller
            name="email"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <input
                {...field}
                type="email"
                placeholder="Email Address"
                className={`w-full px-4 py-2 rounded bg-gray-800 text-white border ${
                  errors.email ? 'border-red-500' : 'border-gray-700'
                } focus:outline-none focus:border-gray-600`}
              />
            )}
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
        </div>

        {/* Password Field */}
        <div>
          <Controller
            name="password"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <input
                {...field}
                type="password"
                placeholder="Password"
                className={`w-full px-4 py-2 rounded bg-gray-800 text-white border ${
                  errors.password ? 'border-red-500' : 'border-gray-700'
                } focus:outline-none focus:border-gray-600`}
              />
            )}
          />
          {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
        </div>

        {/* Confirm Password Field */}
        <div>
          <Controller
            name="confirmPassword"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <input
                {...field}
                type="password"
                placeholder="Confirm Password"
                className={`w-full px-4 py-2 rounded bg-gray-800 text-white border ${
                  errors.confirmPassword ? 'border-red-500' : 'border-gray-700'
                } focus:outline-none focus:border-gray-600`}
              />
            )}
          />
          {errors.confirmPassword && (
            <p className="text-red-500 text-sm mt-1">{errors.confirmPassword.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 w-full rounded"
        >
          Sign Up
        </button>
      </form>

      {/* Login Link */}
      <div className="mt-4 text-center text-gray-400">
        <span>Already have an account?</span>
        <button
          onClick={() => {
            onClose(); // Close the registration modal
            switchModal(); // Open the login modal
          }}
          className="ml-2 text-white hover:underline"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Register;