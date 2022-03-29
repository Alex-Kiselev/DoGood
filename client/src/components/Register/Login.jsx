import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {LoginRegaThunk} from '../../redux/thunk/ThunkPosts'
import {Link} from "react-router-dom"; // ОТПРАВКА НА САНКИ




function Login() {

   const dispatch = useDispatch() 
   const [login, setLogin] = useState({email:'',password:''})



   const addLogin =  (e) => {
      e.preventDefault()
      dispatch(LoginRegaThunk(login))
      setLogin({email:'',password:''})

   }



  return (
      <>
          <main id="main"></main>

          {/* <!-- main --> */}

          <div className="main-w3layouts wrapper maindiv">
              <h1>Авторизация</h1>
              <div className="main-agileinfo">
                  <div className="agileits-top formdesign">
                      <form>
                          <input
                              className="text email inputformdecor"
                              type="email"
                              name="email"
                              placeholder="Email"
                              required=""
                              onChange={e => setLogin({...login, email: e.target.value}) }
                              value={login.email}
                          />
                          <input
                              className="text email inputformdecor"
                              type="password"
                              name="password"
                              placeholder="Пароль"
                              required=""
                              onChange={e => setLogin({...login, password: e.target.value}) }
                              value={login.password}
                          />
                          <div className="wthree-text">
                              <label className="anim">
                                  <input type="checkbox" className="checkbox" required="" />
                                  <span className="textoncheckbox">
                    Я согласен с условиями платформы!
                  </span>
                              </label>
                              <div className="clear"> </div>
                          </div>
                          <button onClick={addLogin} className="btnlogin">ВОЙТИ</button>
                      </form>
                      <p>
                          У вас нет аккаунта? <Link to="/register"> Регистрация</Link>
                      </p>
                  </div>
              </div>
              <ul className="colorlib-bubbles">
                  <li><img className="img-bubbles" src="" /></li>
                  <li><img className="img-bubbles" src="" /></li>
                  <li><img className="img-bubbles" src="" /></li>
                  <li><img className="img-bubbles" src="" /></li>
                  <li><img className="img-bubbles" src="" /></li>
                  <li><img className="img-bubbles" src="" /></li>
                  <li><img className="img-bubbles" src="" /></li>
                  <li><img className="img-bubbles" src="" /></li>

              </ul>
          </div>
          {/* <!-- //main --> */}
      </>
  )
}

export default Login
