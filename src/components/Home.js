import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import React, {useState, useEffect} from "react"

export default function Home() {

  const ofertasURL = "https://best-job.herokuapp.com/api/v1/ofertas"

  const [ofertas, setOfertas] = useState([])
  useEffect(() => recibirOfertas(), [])

  const recibirOfertas = async () => {
    const ofertaResponse = await fetch(ofertasURL)
    const data = await ofertaResponse.json()
    setOfertas(data)
  }

  console.log(ofertas)

  return (
    <Container className="container_general">
    
      {ofertas.map((oferta) => (
        <ul key={oferta.id} className="container_oferta">
          <li className="oferta_titulo">
            {" "}
            <h2>{oferta.titulo}</h2>{" "}
          </li>
          <li className="oferta_experiencia">
            <h3>{oferta.empresa}</h3>
          </li>
          <li className="show_more">
            <Link to={`/oferta/${oferta.id}`}>
              <button>Ver más</button>
            </Link>
          </li>
        </ul>
      ))}
    </Container>
  );
}
