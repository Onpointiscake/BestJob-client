import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";

export default function Oferta() {

    const [oferta, setOferta] = useState([])
    const [tecnologia, setTecnologia] = useState([])

    useEffect(() => recibirOferta(), [])

    const getParam = useParams();
    const ofertaParamId = getParam.id

    const recibirOferta = async () => {
        const ofertaResponse = await fetch(`http://devsyn.net:8080/api/v1/ofertas/${ofertaParamId}`)
        const tecnologiaResponse = await fetch(`http://devsyn.net:8080/api/v1/tecnologias/${ofertaParamId}`)

        const data = await ofertaResponse.json()
        const dataTecnologia = await tecnologiaResponse.json()

        setOferta(data)
        setTecnologia(dataTecnologia)
    }
    

  return (
    <div className="container_general_oferta">
      <div to="/">
        <button className="back_btn" variant="secondary">
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
      <div className="container_oferta_ind">
        {" "}
        <div className="header_oferta">
          <h1>
            {oferta.titulo} en {oferta.empresa}
          </h1>
        </div>
        <div className="cuerpo_oferta">
          <ul className="columna_izq_oferta">
            <li>
              <b>Experiencia:</b> {oferta.anyosExperiencia}
            </li>
            <li>
              <b>Salario:</b> {oferta.salario}
            </li>
            <li>
              <b>Remoto:</b> {oferta.remoto ? 'Si' : 'No'} 
            </li>
            <li className="tecnologias">
              <b>Tecnologias:</b> {tecnologia.nombre}
            </li>
          </ul>
          <p className="columna_der_oferta">{oferta.detalle}</p>
        </div>
        <button className="contact_btn" variant="primary">
          CONTACTA
        </button>
      </div>
    </div>
  );
}
