import React ,{ useState } from 'react'
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setToken } from '../../reducer/authSlice';
import "../../css/Login.css"
export default function Login() {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const onEmailHandler = (e) =>{
    setEmail(e.target.value);
  }

  const onPasswordHandler = (e) =>{
    setPassword(e.target.value);
  }

  const onSubmitHandler = (e) => {
    e.preventDefault();
    
    let body = {
      id: email,
      pw: password,
      token : Date.now()
    }
    dispatch(setToken(body));
    navigate("/");
  }

  return (
    <div className='login'>
      <h1 className='login__title'>로그인</h1>
      <div className='login__group'>
        <input className='login__group__input' type="text" value={email} onChange={onEmailHandler}/>
        <label className='login__group__label'>Email or phone number</label>
      </div>
      <div className='login__group'>
        <input className='login__group__input' type="password" value={password} onChange={onPasswordHandler}/>
        <label className='login__group__label'>Password</label>
      </div>
      <button className='login__sign-in' type="button" onClick={onSubmitHandler}>Sign In</button>
      <div className='login__secondary-cta'><p className='login__secondary-cta__text' href="#">Remember me</p><p className='login__secondary-cta__text login__secondary-cta__text--need-help' href="#">Need help?</p></div>
    </div>
  )
}
