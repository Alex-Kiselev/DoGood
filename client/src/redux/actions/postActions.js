
//ЗАБОР РЕГИСТРАЦИИ 
export const RegaAction = (rega) => {
   // console.log(rega, 'ACTION POST');
   return {
      type: 'ALL_REGA',
      payload: rega,
   }

}



export const ClearAction = () => {
   console.log('ClearAction');
   return {
      type: 'CLEAR_REGA',
      payload: [],
   }
}



