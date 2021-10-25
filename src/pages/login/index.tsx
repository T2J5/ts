import React from 'react';
import loginSvg from '@/assets/login.svg';

interface ILoginProps {}

function Login(props: ILoginProps) {
  return (
    <div className="login-container">
      <img src={loginSvg} />
    </div>
  );
}

export default Login;
