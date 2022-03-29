import axios from 'axios'
// import { useNavigate } from 'react-router-dom';
import {RegaAction,ClearAction} from '../actions/postActions'




//ЭТА ТЕМА ДЛЯ ТОГО ЧТОБЫ НЕ ПИСАТЬ ВЕЗДЕ В АКСИОСЕ withCredentials true
axios.defaults.withCredentials=true
// axios.defaults.baseURL= `http://localhost:3001'



//ЗАБОР ДАННЫХ У ПРОФИЛЯ
export const ProfileThunk = () => {
   return async (dispatch) => {
     const response = await axios.get(`users/profile`)
        const data = response.data
         dispatch(RegaAction(data))
   }

}




//Удаление КУКИ
export const LogoutThunk = () => {
   console.log('зашёл на удаление куки?');

   return async (dispatch) => {
      const response = await axios(`http://localhost:3001/users/logout`)
      dispatch(ClearAction())
   }

}





//ОТПРАВКА ДАННЫХ С РЕГИСТРАЦИИ
export const AddRegaThunk = (rega) =>{
   return async (dispatch) => {
console.log(rega);
      try {

         const response = await axios.post(`http://localhost:3001/users/signup`, rega)
         const data = response.data 
         
         if(data.user) {
           window.location = '/profile'
            dispatch(RegaAction(data))
         }
         if(data.haveuser) {
            alert('Такой юзер уже есть')
         }

      } catch (error) {
         console.log(error);
      }
      
   }

}



//ОТПРАВКА ДАННЫХ С АВТОРИЗАЦИИ
export const LoginRegaThunk = (rega) =>{
   return async (dispatch) => {

      try {
         const response = await axios.post(`http://localhost:3001/users/signin`, rega)
         const data = response.data 
         if(data.user) {
            console.log(data,'зашёл в профиль');
            console.log('ПРОФИЛЬ ДАТА',data);
            dispatch(RegaAction(data))
         window.location = '/profile'
         }
      if(data.wrong){
         console.log('Ошибка пароля');
         window.location = '/login'
         alert('неверный пароль')
         }
        
         if(data.errLogin){
         console.log('нет юзера');
            window.location = '/register'
            alert('зарегистрируйся')
            }
      } catch (error) {
         console.log(error);
        
      }
      
   }

}






