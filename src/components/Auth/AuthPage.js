import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./AuthPage.css";

export default function AuthPage() {
  const [formType, setFormType] = useState("signup");

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const action = urlParams.get("action");
    if (action === "signin") {
      setFormType("signin");
    } else {
      setFormType("signup");
    }
  }, []);

  return (
    <div className="container">
      <a href="/" className="back">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="19" y1="12" x2="5" y2="12"></line>
          <polyline points="12 19 5 12 12 5"></polyline>
        </svg>
        Back to home
      </a>

      {formType === "signup" ? (
        <SignUpForm onSwitch={() => setFormType("signin")} />
      ) : (
        <SignInForm onSwitch={() => setFormType("signup")} />
      )}
    </div>
  );
}

function SignUpForm({ onSwitch }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password.length < 8) {
      alert('Password must be at least 8 characters');
      return;
    }
    if (password !== confirm) {
      alert('Passwords do not match');
      return;
    }
    // Fake success logic: navigate to landing page
    navigate('/landing');
  };

  return (
    <div className="card">
      <div className="logo">S</div>
      <h2>Create your account</h2>
      <p className="subtext">Join thousands of students transforming their learning experience</p>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input 
            type="email" 
            placeholder="Email address" 
            required 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input 
            type="password" 
            placeholder="Create password (min 8 characters)" 
            required 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input 
            type="password" 
            placeholder="Confirm password" 
            required 
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
          />
        </div>
        <button type="submit" className="btn-primary">Create account</button>
      </form>
      <p className="link-text">
        Already have an account?{" "}
        <button type="button" onClick={onSwitch}>Sign in</button>
      </p>
    </div>
  );
}

function SignInForm({ onSwitch }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password.length < 8) {
      alert('Password must be at least 8 characters');
      return;
    }
    // Fake success logic: navigate to landing page
    navigate('/landing');
  };

  return (
    <div className="card">
      <div className="logo">S</div>
      <h2>Welcome back</h2>
      <p className="subtext">Sign in to continue your learning journey</p>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input 
            type="email" 
            placeholder="Email address" 
            required 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input 
            type="password" 
            placeholder="Password" 
            required 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn-primary">Sign in</button>
      </form>
      <p className="link-text">
        Don't have an account?{" "}
        <button type="button" onClick={onSwitch}>Sign up</button>
      </p>
    </div>
  );
}
