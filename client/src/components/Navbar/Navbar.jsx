import React from "react";
import { useDispatch, useSelector } from 'react-redux'
import { Link, NavLink, useNavigate } from "react-router-dom";

import {LogoutThunk} from '../../redux/thunk/ThunkPosts' // ОТПРАВКА НА САНКИ

function Navbar() {
   const Check = useSelector(store=> store.register)

   const dispatch = useDispatch() 
   const Navigate = useNavigate() 


   const logAut = () => {
      dispatch(LogoutThunk())
      Navigate('/')
   }


  return (
    <>
  {/* <!-- ======= Header ======= --> */}
  <header id="header" className="fixed-top d-flex align-items-center">
        <div className="container d-flex align-items-center justify-content-between">

          <div className="logo">


            <h1 className="text-light"><a href="/">
                <img className="imglogo" src="/assets/img/help-logo.png"/>{" "}
                Дари Добро</a></h1>
          </div>
          <nav id="navbar" className="navbar">
            <ul>
              <li><NavLink activeclassname="active" to="/">Главная</NavLink></li>
              <li><NavLink activeclassname="active" to="/good">Добро</NavLink></li>
              <li><NavLink activeclassname="active" to="/map">Карта</NavLink></li>
                <li className="dropdown"><a href="#"><span>Личный кабинет</span> <i className="bi bi-chevron-right"/></a>
                    <ul>

                        {!Check.username && <li><a href="/register">Регистрация</a></li>}
                        {!Check.username && <li><a href="/login">Вход</a></li>}
                        {Check.username && <li><a href="/profile">Профиль</a></li>}
                        {Check.username && <li onClick={logAut}><a href="#">Выход</a></li>}
                    </ul>
                </li>

                {Check.username && <li><a className="getstarted" href="/addgood">Готов помочь</a></li>}
                {!Check.username && <li><a className="getstarted" href="#about">Как это работает?</a></li>}


            </ul>
            <i className="bi bi-list mobile-nav-toggle"/>
          </nav>
        </div>
      </header>
      {/* <!-- ======= End Header ======= --> */}
    </>
  );
}

export default Navbar;
