import React, { useEffect, useState } from 'react';
import "./Register.css";
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { registerInitiate } from '../../redux/action';

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {user} = useSelector(state => state.data)

  const history = useNavigate()
  
  // console.log("user =>", user);
  useEffect(()=>{
    if(user){
      history("/")
    }
  }, [user, history])

  let dispatch = useDispatch();

  const register = (e)=>{
    e.preventDefault();
    // dispatch registerInitiate từ action
    dispatch(registerInitiate(email, password))
    setEmail("");
    setPassword("");
  };
  return (
      <div className='register'>
          <Link to="/">
            <img src='https://cdn.thukyluat.vn/nhch-images//CauHoi_Hinh/9eb6abaa-8cda-456c-ad66-26ba4da23ffe.jpg' className='register-logo' alt='logo'/>
          </Link>
          <div className='register-container'>
            <h1>Create Account</h1>
            <form>
              <h5>E-Mail</h5>
              <input 
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <h5>Password</h5>
              <input
                type="password"
                value={password}
                onChange={(e)=> setPassword(e.target.value)}
              />
              <button type='submit' onClick={register} className='continue'>
                Continue
              </button>
              <div className='detail'>
                <p>Already have an account ?</p>
                <Link to="/login" className='signIn-link'>
                  <p>Sign In</p>
                </Link>
              </div>
            </form>
          </div>
      </div>
  )
};

export default Register;
