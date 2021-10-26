import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import Oferta from './components/Oferta'

function App() {
  return (
    <BrowserRouter>

        <Navbar bg="black" variant="dark">
          <Container>
          <Container>
            <Link to="/">Inicio</Link>
          </Container>
        </Container>
      </Navbar>

      <Switch>
        <Route path={`/oferta/:id`}>
          <Oferta />
        </Route>
        <Route path="/" exact>
          <Home />
        </Route>
      </Switch>

    </BrowserRouter>
  );
}

export default App;
