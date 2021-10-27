import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import React, {useState, useEffect} from "react"

export default function Home() {

  const ofertasURL = "https://jsonplaceholder.typicode.com/users"

  const [ofertas, setOfertas] = useState([])
  useEffect(() => recibirOfertas(), [])

  const recibirOfertas = async () => {
    const ofertaResponse = await fetch(ofertasURL)
    const data = await ofertaResponse.json()
    setOfertas(data)
  }

  return (
    <Container id="container_general">
      {ofertas.map((oferta) => (
        <ul key={oferta.id} id="container_oferta">
          <li id="oferta_titulo">
            {" "}
            <h2>{oferta.name}</h2>{" "}
          </li>
          <li id="oferta_experiencia">
            <h3>{oferta.id}</h3>
          </li>
          <li id="show_more">
            <Link to={`/oferta/${oferta.id}`}>
              <button>Ver más</button>
            </Link>
          </li>
        </ul>
      ))}
    </Container>
  );
}
