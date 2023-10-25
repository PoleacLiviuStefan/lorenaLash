import React from "react";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import {Navigate} from 'react-router-dom'
const SignIn =  () => {
    const SERVER_IP = "http://localhost:5005";
  const navigate=(url)=>{
      window.location.href= url;
  }
  const loginOAuth2= async ()=>{
    try {
    const response =await fetch(SERVER_IP + "/api/google", {
      method:"GET",
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
    const data=await response.json();
    navigate(data.url);
    console.log(data.url);
  }
    catch (error) {
      console.error('An error occurred:', error);
    }
  
  }

  return (
    <div className="flex justify-center items-center h-full py-[10rem]">
        <button type="button" onClick={()=>loginOAuth2()}>
            SIGN IN
        </button>
    </div>
  );
};

export default SignIn;
