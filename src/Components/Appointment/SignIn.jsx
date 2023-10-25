import React from "react";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";

const SignIn = () => {
    const SERVER_IP = "http://localhost:5005";

  return (
    <div className="flex justify-center items-center h-full py-[10rem]">
      <GoogleOAuthProvider clientId="640153035190-i0le4tfvvfj329paq3j1on4ajvuf1shd.apps.googleusercontent.com">
        <GoogleLogin
          onSuccess={async (credentialResponse) => {
            console.log(credentialResponse);
          
        
          }}
          onError={() => {
            console.log("Login Failed");
          }}
        />
      </GoogleOAuthProvider>
    </div>
  );
};

export default SignIn;
