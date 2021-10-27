import React from "react";
import { useParams } from "react-router-dom";

export default function Oferta() {
  const ejemploOferta = [
    {
      id: 1,
      titulo: "Software Engineer",
      descripcion:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      experienciaAnyos: "JUNIOR",
      salarioBruto: "2.000 - 3.000",
      empresa: "Toptal",
      telefono: "615000000",
      email: "email@miemail.mail",
      remoto: "Remoto",
      tecnologias: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "Angular",
        "React.js",
        "Phyton",
        "Java",
        "Spring",
        "PHP",
        "GIT",
      ],
    },
    {
      id: 2,
      titulo: "Front-End Developer",
      descripcion:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      experienciaAnyos: "SENIOR A PRECIO DE JUNIOR",
      salarioBruto: "7.000 - 9.000",
      empresa: "AYTT",
      telefono: "615000000",
      email: "email@miemail.mail",
      remoto: "Remoto",
      tecnologias: ["HTML5", "CSS3", "JavaScript", "Angular", "React.js"],
    },
    {
      id: 3,
      titulo: "Back-End Developer",
      descripcion:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      experienciaAnyos: "BECARIO",
      salarioBruto: "2.000-4.000",
      empresa: "Redlek",
      telefono: "615000000",
      email: "email@miemail.mail",
      remoto: "Remoto",
      tecnologias: ["Phyton", "Java", "Spring", "PHP", "GIT"],
    },
  ];

  const getParam = useParams();
  const oferta = parseInt(getParam.id);

  const ofertaElegida = ejemploOferta.filter((item) => item.id === oferta);

  return (
    <div id="container_general_oferta">
      <div to="/">
        <button id="back_btn" variant="secondary">
          <a href="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="41.506"
              height="25"
              viewBox="0 0 41.506 17"
            >
              <path
                id="Polígono_2"
                data-name="Polígono 2"
                d="M8.5,0,17,15H0Z"
                transform="translate(0 17) rotate(-90)"
                fill="#617488"
              />
              <line
                id="Línea_1"
                data-name="Línea 1"
                x2="27"
                transform="translate(14.506 9)"
                fill="none"
                stroke="#617488"
                stroke-width="2"
              />
            </svg>
            VOLVER
          </a>
        </button>
      </div>
      <div id="container_oferta_ind">
        {" "}
        <div id="header_oferta">
          <h1>
            {ofertaElegida[0].titulo} en {ofertaElegida[0].empresa}
          </h1>
        </div>
        <div id="cuerpo_oferta">
          <ul id="columna_izq_oferta">
            <li>
              <b>Experiencia:</b> {ofertaElegida[0].experienciaAnyos}
            </li>
            <li>
              <b>Salario:</b> {ofertaElegida[0].salarioBruto}
            </li>
            <li>
              <b>Remoto:</b> {ofertaElegida[0].remoto}
            </li>
            <li id="tecnologias">
              <b>Tecnologias:</b>
            </li>
          </ul>
          <p id="columna_der_oferta">{ofertaElegida[0].descripcion}</p>
        </div>
        <button id="contact_btn" variant="primary">
          CONTACTA
        </button>
      </div>
    </div>
  );
}
