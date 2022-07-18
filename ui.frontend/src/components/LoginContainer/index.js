import React, { useState, useEffect } from "react";
import { MapTo } from "@adobe/aem-react-editable-components";
import user from "../../assets/user.png";
import lock from "../../assets/lock.png";
import "./index.css";
import { useHistory } from "react-router-dom";

const LoginContainer = ({ id }) => {
  const nav = useHistory();
  const [valPass, setValPass] = useState();
  const [valUser, setValUser] = useState();
  const [errorModel, setErrorModel] = useState(null);

  
  function handleSubimit(event, valPass, valUser) {
    event.preventDefault();
    if (valPass.length === "admin" && valUser.length === "admin") {
      nav("/content/reactapp/us/en/home1.html");
      setErrorModel(false);
    } else {
      setErrorModel(true);
    }
  }

  return (
    <form id={id} onSubmit={handleSubimit}>
      <h2>Login</h2>
      <div class="inputClass">
        <input
          placeholder="Usuário"
          value={valUser}
          onChange={(event) => setValUser(event.target.value)}

        />
        <img src={user} alt="User Icon" />
      </div>
      <div class="inputClass">
        <input
          placeholder="Senha"
          type="password"
          value={valPass}
          onChange={(event) => setValPass(event.target.value)}

        />
        <img src={lock} alt="Password Icon" />
      </div>
      <div id="errorModal">
        {errorModel && (
          <p>
            Ops, usuário ou senha inválidos.{"\n"}
            Tente novamente!
          </p>
        )}
      </div>
      <input value="Continuar" type="submit" />
    </form>
  );
};

export default MapTo("reactapp/components/LoginContainer")(LoginContainer);
