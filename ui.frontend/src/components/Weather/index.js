import React from "react";
import { MapTo } from "@adobe/aem-react-editable-components";
import axios from "axios";
import cloud from "../../assets/cloud.png";
import cloudy from "../../assets/cloudy.png";
import raining from "../../assets/raining.png";
import thunder from "../../assets/storm.png";
import storm from "../../assets/thunder.png";
import sun from "../../assets/sun.png";
import "./index.css"

const Weather = ({ id }) => {
  const [regionData, setRegion] = React.useState("Data Not Found");
  const [cityData, setCity] = React.useState("City");
  const [iconWeatherData, setIcon] = React.useState(sun);
  const [weatherData, setWeather] = React.useState("N/A");

  const weatherLogical = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        let lat = position.coords.latitude;
        let long = position.coords.longitude;
        long.toFixed(20);
        lat.toFixed(20);

        const api = `http://api.weatherapi.com/v1/current.json?key=57bbbe30ec1d4ba1b65170921221607&q=${lat},${long}`;
        axios.get(api).then((personalData) => {
          let grau = `${personalData.data.current.temp_c.toFixed()}`;
          setWeather(grau);

          const icons = personalData.data.current.condition.text;
          let addIcons = personalData.data.current.condition.icon;
          setIcon(addIconsLogical(icons, addIcons));

          const region = personalData.data.location.region;
          setRegion(regionSiglasLogical(region));

          const city = personalData.data.location.name;
          setCity(city);
        });
      });
    }
  };

  const addIconsLogical = (icons, addIcons) => {
    if (icons.includes("thunder") && icons.includes("rain")) {
      addIcons = storm;
    } else if (icons.includes("thunder")) {
      addIcons = thunder;
    } else if (icons.includes("Sunny") || icons.includes("Clear")) {
      addIcons = sun;
    } else if (icons.includes("rain") || icons.includes("drizzle")) {
      addIcons = raining;
    } else if (icons.includes("Fog") || icons.includes("Mist")) {
      addIcons = cloud;
    } else if (
      icons.includes("Cloudy") ||
      icons.includes("Overcast") ||
      icons.includes("cloudy")
    ) {
      addIcons = cloudy;
    }

    return addIcons;
  };

  const regionSiglasLogical = (region) => {
    let regionSigla = "";

    switch (region) {
      case "Acre":
        regionSigla = "AC";
        break;
      case "Alagoas":
        regionSigla = "AL";
        break;
      case "Amapá":
        regionSigla = "AP";
        break;
      case "Amazonas":
        regionSigla = "AM";
        break;
      case "Bhaia":
        regionSigla = "BA";
        break;
      case "Ceará":
        regionSigla = "CE";
        break;
      case "Espírito Santo":
        regionSigla = "ES";
        break;
      case "Goiás":
        regionSigla = "GO";
        break;
      case "Maranhão":
        regionSigla = "MA";
        break;
      case "Mato Grosso":
        regionSigla = "MT";
        break;
      case "Mato Grosso do Sul":
        regionSigla = "MS";
        break;
      case "Minas Gerais":
        regionSigla = "MG";
        break;
      case "Pará":
        regionSigla = "PA";
        break;
      case "Paraíba":
        regionSigla = "PB";
        break;
      case "Paraná":
        regionSigla = "PR";
        break;
      case "Pernambuco":
        regionSigla = "PE";
        break;
      case "Piauí":
        regionSigla = "PI";
        break;
      case "Rio de Janeiro":
        regionSigla = "RJ";
        break;
      case "Rio Grande do Norte":
        regionSigla = "RN";
        break;
      case "Rio Grande do Sul":
        regionSigla = "RS";
        break;
      case "Rondônia":
        regionSigla = "RO";
        break;
      case "Roraima":
        regionSigla = "RR";
        break;
      case "Santa Catarina":
        regionSigla = "SC";
        break;
      case "São Paulo":
        regionSigla = "SP";
        break;
      case "Sergipe":
        regionSigla = "SE";
        break;
      case "Tocantins":
        regionSigla = "TO";
        break;
      case "Distrito Federal":
        regionSigla = "DF";
    }

    return regionSigla;
  };

  React.useEffect(() => {
    weatherLogical();
  }, []);

  return (
    <div id={id}>
      <h2 id="location-style">
        {cityData} - {regionData}
      </h2>
      <div id="climate">
        <img
          id="icon-style"
          draggable="false"
          src={iconWeatherData}
          alt="Icon Tempo"
        />
        <h2 id="weather-style">{weatherData}°</h2>
      </div>
    </div>
  );
};

export default MapTo("reactapp/components/Weather")(Weather);
