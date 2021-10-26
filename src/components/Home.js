import { Container } from 'react-bootstrap';
import {Link} from 'react-router-dom'

export default function Home() {
    
    // Ejemplo en local
    const ejemploOfertas = [
        { id: 1, puesto: "Software Engineer", empresa: "Toptal", lugar: "Madrid" },
        { id: 2, puesto: "Front End Developer", empresa: "AYTT", lugar: "Remote" },
        { id: 3, puesto: "iOS Deverloper", empresa: "Redlek", lugar: "London" }
    ];

    return (
        <Container>
     <h1>Ofertas abiertas</h1>
          <table>
            <thead>
              <th>Puesto</th>
              <th>Empresa</th>
              <th>Lugar</th>
            </thead>
    
            {ejemploOfertas.map((oferta) => (
              <tr>
                <td>{oferta.puesto}</td>
                <td>{oferta.empresa}</td>
                <td>{oferta.lugar}</td>
                <Link to={`/oferta/${oferta.id}`}>Ir a la Oferta</Link>
              </tr>
            ))}
          </table>

        </Container>
      );
    
}