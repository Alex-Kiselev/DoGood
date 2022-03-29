import "./App.css";

import MainPage from "./pages/MainPage";
import { MapPage } from "./pages/MapPage";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import { Routes, Route } from 'react-router-dom';
import Registration from './components/Register/Registration';
import Login from './components/Register/Login';
import Profile from './components/Register/Profile';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import rootReducer from './redux/reducers/rootReducer';
import ProtectedAutf from './components/ProtectedAutf';

import Post from "./components/Post/Post";

import Form from "./components/Form/Form";
import OnePostPage from "./pages/OnePostPage";
import ProfilePage from "./pages/Profile";
import GoodPage from "./pages/GoodPage";
import Rules from "./components/Rules/Rules";

function App() {
 
  return (
      <>
   <Navbar />
   <Routes>
   <Route path='/profile' element={
     <ProtectedAutf>
      <ProfilePage/>
    </ProtectedAutf>
   }/> 
             <Route path='/' element={<MainPage/>}></Route>
             <Route path='/register' element={<Registration/>}></Route>
             <Route path='/login' element={<Login/>}></Route>
              <Route path="/good" element={ <GoodPage/>} />
              <Route path="/good/:id" element={ <OnePostPage/>} />
              <Route path="/addgood" element={ <Form/>} />
              <Route path="/map" element={<MapPage />} />
       <Route path="/rules" element={<Rules />} />
   </Routes>
   <Footer />
      </>
  );
}

export default App;
