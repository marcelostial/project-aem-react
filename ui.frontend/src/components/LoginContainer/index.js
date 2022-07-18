import React from "react";
import { MapTo } from "@adobe/aem-react-editable-components";
import user from "../../assets/user.png";
import lock from "../../assets/lock.png";
import { useHistory } from "react-router-dom";
import "./index.css";

const LoginContainer = ({ id }) => {
  const nav = useHistory();

  const [valPass, setValPass] = React.useState();
  const [valUser, setValUser] = React.useState();
  const [errorModel, setErrorModel] = React.useState(null);
  const [errorStatus, setErrorStatus] = React.useState(null);

  function handleSubimit(event) {
    event.preventDefault();

    const validateValue = { valPass, valUser };

    if (
      validateValue.valPass === "admin" &&
      validateValue.valUser === "admin"
    ) {
      nav.push("/content/reactapp/us/en/home1.html");
      setErrorModel(false);
      setErrorStatus(null)
    } else {
      setErrorModel(true);
      setErrorStatus("border-error")
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
          className={errorStatus}
        />
        <img src={user} alt="User Icon" />
      </div>
      <div class="inputClass">
        <input
          placeholder="Senha"
          type="password"
          value={valPass}
          onChange={(event) => setValPass(event.target.value)}
          className={errorStatus}
        />
        <img src={lock} alt="Password Icon" />
      </div>
      <div id="errorModal">
        {errorModel && (
          <p id="errorp">
            Ops, usuário ou senha inválidos.{"\n"}Tente novamente!
          </p>
        )}
      </div>
      <input value="Continuar" type="submit" />
    </form>
  );
};

export default MapTo("reactapp/components/LoginContainer")(LoginContainer);
