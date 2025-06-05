import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import '../register/register.css';

function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setpassword] = useState('');
  const [nameErr, setnameErr] = useState(false);
  const history = useHistory();

  function registertration() {
    if (
      username.trim().length === 0 ||
      password.trim().length === 0 ||
      email.trim().length === 0
    ) {
      setnameErr(true);
    } else if (!email.includes('@', '.', 'com')) {
      alert('Пожалуйста, введите действительный адрес электронной почты');
    } else if (password.length < 5) {
      alert('Пожалуйста, введите пароль длиной более пяти символов');
    } else {
      setnameErr(false);
      const array = [{ username: username, email: email, password: password }];
      console.log(array);
      sessionStorage.setItem(
        'user',
        JSON.stringify({ name: username, email: email, password: password })
      );
      history.push('/login');
    }
  }

  return (
    <div className="register-body">
      <div className="register-main">
        <h1>Регистрация</h1>
        {nameErr && <p className="errP">*пожалуйста, заполните все поля*</p>}
        <br />
        <p>Имя</p>
        <input
          type="text"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        ></input>
        <br />
        <p>Электронная почта</p>
        <input
          type="text"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        ></input>
        <br />
        <p>Пароль</p>
        <input
          type="password"
          value={password}
          onChange={(e) => {
            setpassword(e.target.value);
          }}
        ></input>
        <br />
        <br />
        <button onClick={registertration}>Регистрация</button>
      </div>
    </div>
  );
}

export default Register;
