import React, { useState } from 'react';
import axios from 'axios';

function AuthForm({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRegister, setIsRegister] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`http://localhost:5000/api/auth/${isRegister ? 'register' : 'login'}`, {
        email,
        password,
      });
      localStorage.setItem('token', res.data.token);
      onLogin(res.data.token);
    } catch (err) {
      alert("Authentication failed");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" type="password" />
      <button type="submit">{isRegister ? "Register" : "Login"}</button>
      <p onClick={() => setIsRegister(!isRegister)}>
        {isRegister ? "Already have an account? Log In" : "Don't have an account? Register"}
      </p>
    </form>
  );
}

export default AuthForm;