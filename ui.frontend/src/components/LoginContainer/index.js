import React, { useState, useEffect } from "react";
import { MapTo } from "@adobe/aem-react-editable-components";
import user from "../../assets/user.png";
import lock from "../../assets/lock.png";
import "./index.css";

const LoginContainer = ({ id }) => {

  const [valPass, setValPass] = useState();
  const [valUser, setValUser] = useState();

   useEffect(()=>{
    sessionStorage.getItem('user') && setValUser(sessionStorage.getItem('user'))
    sessionStorage.getItem('pass') && setValPass(sessionStorage.getItem('pass'))
   })

  function handleSubimit(event) {
    event.preventDefault();
    if (valPass === "admin" && valUser === "admin")
    console.log("logado");
  }

  return (
    <form id={id} onSubmit={handleSubimit}>
      <h2>Login</h2>
      <div class="inputClass">
        <input placeholder="Usuário" value={valUser} onChange={(event)=>sessionStorage.setItem('user', event.target.value)} />
        <img src={user} alt="User Icon" />
      </div>
      <div class="inputClass">
        <input placeholder="Senha" type="password" value={valPass} onChange={(event)=>sessionStorage.setItem('pass', event.target.value)}/>
        <img src={lock} alt="Password Icon" />
      </div>
      <div id="errorModal">
        <p>
          Ops, usuário ou senha inválidos.
          Tente novamente!
        </p>
      </div>
      <input value="Continuar" type="submit" />
    </form>
  );
};

export default MapTo("reactapp/components/LoginContainer")(LoginContainer);
