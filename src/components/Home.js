import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Home() {
  // Ejemplo en local
  const ejemploOfertas = [
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
      tecnologias:
        "Phyton, Java, Spring, PHP, GIT, HTML5, CSS3, JavaScript, Angular, React.js",
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
      tecnologias: "HTML5, CSS3, JavaScript, Angular, React.js, y mucho mas",
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
      tecnologias: "Phyton, Java, Spring, PHP, GIT, y mucho mas",
    },
  ];

  return (
    <Container id="container_general">
      {ejemploOfertas.map((oferta) => (
        <div id="container_oferta">
          <spam id="oferta_titulo">
            {" "}
            <h2>{oferta.titulo}</h2>{" "}
          </spam>
          <spam id="oferta_experiencia">
            <h3>{oferta.experienciaAnyos}</h3>
          </spam>
          <spam id="show_more">
            <Link to={`/oferta/${oferta.id}`}>
              <button>Ver más</button>
            </Link>
          </spam>
        </div>
      ))}
    </Container>
  );
}
