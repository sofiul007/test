import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { userLoggedIn } from "../feature/auth/authSlice";

export default function useAuthCheck() {
  const dispatch=useDispatch()
  const [authChecked,setAuthChecked] =useState(false)

  
  useEffect(() => {
    const localAuth =localStorage.getItem("auth")

    if(localAuth){
      const auth =JSON.parse(localAuth)
      if(auth.user && auth.accessToken){
        dispatch(
        userLoggedIn(  {
          user:auth.user,
          accessToken:auth.accessToken
        })


        )
      }
      setAuthChecked(true)
    }
  }, [dispatch]);

  return authChecked
}
