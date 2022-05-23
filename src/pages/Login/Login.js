import React, { useState, useEffect } from 'react';
import "./Login.css";
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { loginInitiate } from '../../redux/action';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const {user} = useSelector((state) => state.data)
  const history = useNavigate();
  useEffect(()=>{
    if(user){
      history("/");
    }
  }, [user, dispatch])
  const signIn = (e)=>{
    e.preventDefault();
    dispatch(loginInitiate(email, password));
    setEmail("");
    setPassword("");
  };
  return (
      <div className='login'>
          <Link to="/">
            <img src='https://cdn.thukyluat.vn/nhch-images//CauHoi_Hinh/9eb6abaa-8cda-456c-ad66-26ba4da23ffe.jpg' className='login-logo' alt='logo'/>
          </Link>
          <div className='login-container'>
            <h1>Sign In</h1>
            <form>
              <h5>E-mail</h5>
              <input
                type="text"
                value={email}
                onChange={(e)=> setEmail(e.target.value)}
              />
              <h5>Password</h5>
              <input
                type="password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
              />
              <button type='submit' onClick={signIn} className='login-signIn'>
                Sign In
              </button>
            </form>
            <p>
              By continuing, you agree to Amazon's Conditions of Use and Privacy
              Notice.
            </p>
          </div>
          <p>New to Amazon ?</p>
          <Link to="/register">
            <button className='login-register'>Create Your Amazon Account</button>
          </Link>
      </div>
  )
};

export default Login;
