import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'

export default function ProtectedAutf({children}) {

   const Check = useSelector(store=> store.register)
   let location = useLocation()

   if(!Check.user) {
      return <Navigate to ='/' state={{from :location}} replace />
   } 
  

   return children
}

