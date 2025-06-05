import React, { useState } from "react";
import '../register/register.css'
import { Link, useHistory } from "react-router-dom";

function Login(){
    const [loginName,setLoginName]=useState('')
    const [loginPassword,setLoginPassword]=useState('')
    const [loginNameErr,setLoginNameErr]=useState(false)
    const [loginPasswordErr,setPasswordErr]=useState(false)
    const [incorrectErr,setincorrectErr]=useState(false)
    const history=useHistory()

    function Loginvalidation() { 
        if(loginName.trim().length!==0){
            setLoginNameErr(false)
        }
        else{ 
            setLoginNameErr(true)
        }
        if(loginPassword.trim().length!==0){
            setPasswordErr(false)
        }
        else{ 
            setPasswordErr(true)
        }

        let register= JSON.parse(sessionStorage.getItem('user'))
        if((register.name!==loginName)||(register.password!==loginPassword)){
            setincorrectErr(true)
        }
        else{
            setincorrectErr(false)
            history.push('/home') 
        }
    }

    return(
        <div className="login-body">
        <div className="login-main">
            <h1>Вход</h1>   
            {incorrectErr&& <small style={{color:'red',textAlign:'center'}}>Введите правильное имя пользователя и пароль</small>}   
            
            <br />
            <p>Имя</p>
            <input type='text' value={loginName} onChange={(e)=>{setLoginName(e.target.value)}}></input>
            {loginNameErr&& <small style={{color:'#d3521d'}}>Пожалуйста, введите имя пользователя</small>}
            
            <br />
            <p>Пароль</p>
            <input type='password' value={loginPassword} onChange={(e)=>{setLoginPassword(e.target.value)}}></input>
            {loginPasswordErr&& <small style={{color:'#d3521d'}}>Пожалуйста, введите пароль</small>}
            
            <br />
            <button onClick={Loginvalidation}>Войти</button><br />
            <p style={{fontSize:'15px'}}>Еще нет аккаунта? <Link to={'/'}>Зарегистрироваться</Link></p>
        </div>
        </div>
    )
}

export default Login