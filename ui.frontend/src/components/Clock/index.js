import React from "react";
import { MapTo } from "@adobe/aem-react-editable-components";
import "./index.css"
const Clock = ({ id }) => {
  const [hour, setHour] = React.useState("00:00");
  const [today, setToday] = React.useState("User data is being transferred");

  const userDiaSemana = new Array(
    "domingo",
    "segunda-feira",
    "terça-feira",
    "quarta-feira",
    "quinta-feira",
    "sexta-feira",
    "sábado"
  );

  const userMes = new Array(
    "janeiro",
    "fevereiro",
    "março",
    "abril",
    "maio",
    "junho",
    "julho",
    "agosto",
    "setembro",
    "outubro",
    "novembro",
    "dezembro"
  );

  const clockLogical = () => {
    let data = new Date();

    let horas = data.getHours();
    let minutos = data.getMinutes();

    horas <= 9 ? (horas = "0" + horas) : (horas = horas);
    minutos <= 9 ? (minutos = "0" + minutos) : (minutos = minutos);
    setHour(`${horas}:${minutos}`);

    let diaSemana = data.getDay();
    let dia = data.getDate();
    let mes = data.getMonth();
    let ano = data.getFullYear();
    setToday(
      `${userDiaSemana[diaSemana]}, ${dia <= 9 ? "0" : ""}${dia} de ${
        userMes[mes]
      } de ${ano}`
    );
  };

  React.useEffect(() => {
    setInterval(clockLogical, 1000);
  }, []);

  return (
    <div id={id}>
      <h2 id="hour-style">{hour}</h2>
      <p id="today-style">{today}</p>
    </div>
  );
};

export default MapTo("reactapp/components/Clock")(Clock);
