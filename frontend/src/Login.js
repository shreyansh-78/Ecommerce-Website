import React, { useEffect, useState } from 'react'
import axios from 'axios';
import bgImg from './img1.jpg';
import "./Login.css";
import { Link } from 'react-router-dom';
function Login() {


  const [uname, setUname] = useState("");
  const [pass, setPass] = useState("");
  const [send, setSend] = useState(false);
  const [nu,setNu] = useState(false)

  useEffect(() => {
    axios.post("http://localhost:8000/login", {
      uname: uname,
      pass: pass
    }).then((res) => console.log(res))

  }, [send])

  return (
    <section className='form2'>
    <div className="login">
          
          {!nu?
          <>

            <div className="col-1">
            <h2>Log in</h2><br/>
                    <span>Wlcm!!!</span><br/>
            <form id='form' className='flex flex-col'>
              <input type='text' onChange={(e) => setUname(e.target.value)} placeholder='username' />
              <input type='text' onChange={(e) => setPass(e.target.value)} placeholder='password' />
              <button type='submit' className='btn' onClick={() => setSend(!send)}>Login</button>
              <br/><br/><br/><br/>
              <span>If you are new</span>
              <button type='submit' className='btn'onClick={() => setNu(!nu)}> Register</button>
              </form>
            </div>
            <div className="col-2">
                    <img src={bgImg} alt="" />
                </div>
          </>
          :
          <>
          <div className="col-1">
            <h2>Sign Up</h2><br/>
                    <span>Sign up to begin!!!</span><br/>
            <form id='form' className='flex flex-col'><br/>
              <input type='text' onChange={(e) => setUname(e.target.value)} placeholder='username' />
              <input type='text' onChange={(e) => setPass(e.target.value)} placeholder='password' />
              <button type='submit' className='btn' onClick={() => setSend(!send)}>Register</button><br/>
              <span>Already have an account?</span>
              {/* <h2>Log in!</h2> */}
              <button type='submit' className='btn' onClick={<Link to="/login"/>}>Log in</button>
              </form>
            </div>
            <div className="col-2">
                    <img src={bgImg} alt="" />
                </div>
          
          
          
          
          </>}

    </div>
    </section>
  )
}

export default Login
