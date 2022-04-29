import { useState } from 'react';

export default function useToken() {
  const getToken = () => {
    const tokenString = localStorage.getItem('auth-token');
    
    const userToken = JSON.parse(tokenString);
    console.log('tokenString',userToken);
    return userToken;
  };
  
  const [token, setToken] = useState(getToken());
  //  console.log('useTOken',token);

  const saveToken = userToken => {
    sessionStorage.setItem('auth-token', JSON.stringify(userToken));
    setToken(userToken.token);
  };

  const getUserType= () => {
    const userTypeString = localStorage.getItem('type');
    
    const userType = JSON.parse(userTypeString);
    console.log(userType);
    return userType;
  };
  
  const [userType, setUserType] = useState(getUserType());
  

  return {
    setToken: saveToken,
    token,
    userType
  }
}