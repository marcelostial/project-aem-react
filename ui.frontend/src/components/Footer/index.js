import React from "react";
import { MapTo } from "@adobe/aem-react-editable-components";
import "./index.css";
import { useHistory } from "react-router-dom";

const Footer = ({ id }) => {
  const [timerSeconds, setTimerSeconds] = React.useState(600);
  const nav = useHistory();

  setTimeout(() => {
    if (timerSeconds > 0) {
      setTimerSeconds(timerSeconds - 1);
    }
  }, 1000);

  if (timerSeconds === 0) {
    nav.push("/content/reactapp/us/en/home.html");
  }

  const logout = () =>{
    nav.push("/content/reactapp/us/en/home.html");
  }

  return (
    <div id={id}>
      <div id="footerHome">
        <div id="textFooterArea">
          <div id="textFooter">
            Essa janela do navegador é usada para manter sua sessão de
            autenticação ativa. Deixe-a aberta em segundo plano e abra uma nova
            janela para continuar a navegar.
          </div>
        </div>
        <div id="barra"></div>
        <div id="areaContador">
          <div id="textContador">Application refresh in</div>
          <div id="areaSeconds">
            <div id="nSecond">{timerSeconds}</div>
            <div id="tSecond">seconds</div>
          </div>
        </div>
        <button id="buttonNextNavigation">Continuar {"\n"} Navegando</button>
        <button id="buttonLogout" onClick={logout}>Logout</button>
      </div>
    </div>
  );
};

export default MapTo("reactapp/components/Footer")(Footer);
