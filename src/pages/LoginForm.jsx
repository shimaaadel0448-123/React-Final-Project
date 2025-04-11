// src/pages/Login.js
import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';

const loginSchema = yup.object().shape({
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
});

const Login = ({ onClose, switchModal }) => {
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = (data) => {
    console.log('Login Data:', data);
    alert('Login successful!');
    onClose();
    navigate('/dashboard'); // Now properly using the navigate function
  };

  return (
    <div className="space-y-4">
      <h2 className="text-white text-2xl mb-4">Login</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Email Input */}
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
                className={`w-full px-4 py-2 rounded bg-gray-800 text-white border ${errors.email ? 'border-red-500' : 'border-gray-700'} focus:outline-none focus:border-gray-600`}
              />
            )}
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
        </div>

        {/* Password Input */}
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
                className={`w-full px-4 py-2 rounded bg-gray-800 text-white border ${errors.password ? 'border-red-500' : 'border-gray-700'} focus:outline-none focus:border-gray-600`}
              />
            )}
          />
          {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 w-full rounded"
        >
          Sign In
        </button>
      </form>

      {/* Register Link */}
      <div className="mt-4 text-center text-gray-400">
        <span>Don't have an account?</span>
        <button
          onClick={() => {
            onClose();
            switchModal();
          }}
          className="ml-2 text-white hover:underline"
        >
          Register
        </button>
      </div>
    </div>
  );
};

export default Login;