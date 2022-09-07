import React ,{ useState } from 'react'
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setToken } from '../../reducer/authSlice';
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
    <div style={{
        display: 'flex', justifyContent: 'center', alignItems: 'center'
        , width: '100%', height: '100vh'
      }}>
  
          <form style={{ display: 'flex', flexDirection: 'column' }}
            onSubmit={onSubmitHandler}
          >
              <label>Email</label>
              <input type="email" value={email} onChange={onEmailHandler}  />  
              <label>Password</label> 
              <input type="password" value={password}  onChange={onPasswordHandler} />
              <br />
              <button type="submit">
                Login
              </button>
          </form>
  
      </div>
  )
}
