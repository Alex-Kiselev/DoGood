import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {AddRegaThunk} from '../../redux/thunk/ThunkPosts'
import {Link} from "react-router-dom"; // ОТПРАВКА НА САНКИ
import "./styleForm.css";


function Registration() {


   const dispatch = useDispatch() 
   const [registration, setRegistration] = useState({
       name: '',
       email:'',
       password:'',
       telephone: '',
       city: '',
       file: ''})

   const addRegister =  (e) => {
      e.preventDefault()
      const formData = new FormData();
      formData.append('file', registration.file);
      formData.append('name', registration.name);
      formData.append('surname', registration.surname);
      formData.append('email', registration.email);
      formData.append('password', registration.password);
      formData.append('city', registration.city);
      formData.append('telephone', registration.telephone);




      dispatch(AddRegaThunk(formData))
      setRegistration({
          name: '',
          surname: '',
          email:'',
          password:'',
          telephone: '',
          city: '',
          file: ''})

   }
    const uploadHandler = async (file) => {
        const formData = new FormData();
        formData.append('file', file);
        setRegistration({ ...registration, file: formData })
    }
    const inputAvatarHandler = (e) => {
        const file = e.target.files[0];
        setRegistration(prev=> ({...prev, file}))
        // uploadHandler(file);
    }

  return (
      <>
          <main id="main">

          {/* <!-- main --> */}
          <div className="main-w3layouts wrapper maindiv">

              <h1>Регистрация</h1>
              <div className="main-agileinfo">
                  <div className="agileits-top formdesign">
                      <form className="">
                          <input
                              className="text inputformdecor"
                              type="text"
                              name="name"
                              placeholder="Имя"
                              required=""
                              value={registration.name}
                              onChange={e => setRegistration(prev => ({...prev, name: e.target.value})) }
                          />
                          <input
                              className="text email inputformdecor"
                              type="text"
                              name="surname"
                              placeholder="Фамилия"
                              required=""
                              value={registration.surname}
                              onChange={e => setRegistration({...registration, surname: e.target.value}) }
                          />
                          <input
                              className="text email inputformdecor"
                              type="email"
                              name="email"
                              placeholder="Email"
                              required=""
                              value={registration.email}
                              onChange={e => setRegistration({...registration, email: e.target.value}) }
                          />
                          <input className="inputphoto input-file" id="file" onChange={(e) => inputAvatarHandler(e)}
                                 accept='image/*' type='file' name='img'/>
                          <label htmlFor="file" className="btn btn-tertiary js-labelFile">
                              {registration.file ? (
                                  <i className="bi bi-check2-square"/>
                              ) : (
                                  <i className="icon fa fa-check"/>
                              )}

                              <span className="js-fileName">
                  {registration.file ? " Фото загружено" : " Загрузить фото"}
                </span>
                          </label>

                          <input
                              className="text email inputformdecor"
                              type="text"
                              name="phone"
                              placeholder="Телефон"
                              required=""
                              value={registration.telephone}
                              onChange={e => setRegistration({...registration, telephone: e.target.value}) }
                          />
                          <input
                              className="text email inputformdecor"
                              type="text"
                              name="city"
                              placeholder="Город"
                              required=""
                              value={registration.city}
                              onChange={e => setRegistration({...registration, city: e.target.value}) }
                          />
                          <input
                              className="text inputformdecor"
                              type="password"
                              name="password"
                              placeholder="Пароль"
                              required=""
                              value={registration.password}
                              onChange={e => setRegistration({...registration, password: e.target.value}) }
                          />

                          <input
                              className="text w3lpass inputformdecor"
                              type="password"
                              name="password"
                              placeholder="Повторите пароль"
                              required=""
                          />
                          <div className="wthree-text">
                              <label className="anim">
                                  <input type="checkbox" className="checkbox" required=""/>
                                  <span className="textoncheckbox">
                    Я согласен с условиями платформы!
                  </span>
                              </label>
                              <div className="clear"></div>
                          </div>
                          <button onClick={addRegister} className="btnlogin">ЗАРЕГИСТРИРОВАТЬСЯ</button>
                      </form>
                    
                      <p>
                          У вас есть аккаунт? <Link to="/login"> Авторизация</Link>
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
          </main>
      </>
  )
}

export default Registration

