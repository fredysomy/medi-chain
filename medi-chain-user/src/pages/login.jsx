import React, { useState } from 'react';
import backgroundImage from '../assets/login_image.jpeg';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  return (
    <div
      className="relative min-h-screen flex flex-col items-center justify-end bg-cover bg-center pt-32"
      style={{ backgroundImage: `url(${backgroundImage})`, height: "100vh" }}
    >
    
      <div className="absolute inset-0 bg-teal-700 opacity-70"></div>

     
      <div className="relative z-10 flex flex-col items-center w-full max-w-md mb-20 px-6">
        
        <h1 className="text-5xl font-bold text-white mb-6">Medi-chain</h1>

       
        <div className="w-full p-10 bg-white rounded-[30px] shadow-lg">
          <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Login</h2>

          <form className="space-y-6">
           
            <div className="flex flex-col">
              <label className="text-gray-700 font-semibold">Mail id</label>
              <input
                type="email"
                placeholder="Mail id"
                value={email}
                onChange={handleEmailChange}
                required
                className="mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-600"
              />
            </div>

            
            <div className="flex flex-col">
              <label className="text-gray-700 font-semibold">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Password"
                  value={password}
                  onChange={handlePasswordChange}
                  required
                  className="mt-1 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-600"
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute inset-y-0 right-0 px-3 py-2 text-gray-600 focus:outline-none"
                >
                  {showPassword ? '😜' : '🙃'}
                </button>
              </div>
            </div>

        
            <button
              type="submit"
              className="w-full py-3 mt-4 text-white font-semibold bg-teal-600 rounded-full hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:ring-offset-2"
            >
              Sign In
            </button>
          </form>

          
          <p className="mt-4 text-center text-gray-600">
            Don’t have an account? <a href="#register" className="text-teal-600 font-semibold hover:underline">Please Register</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
