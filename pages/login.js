'use client'
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { auth } from 'config/firebase';

const Login = () => {
  console.log("jello")
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  

  const signIn = async (e) => {
    e.preventDefault();
    try {
      await auth.signInWithEmailAndPassword(email, password);
      router.push('/');
    } catch (error) {
      console.error('Error signing in:', error.message);
    }
  };
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={signIn}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
      {console.log('LoginPage rendered')}
    </div>
  );
  
};

export default Login;
