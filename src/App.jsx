import { Container } from "react-bootstrap";
import EmpleadoLista from "./components/EmpleadoLista";

function App() {
  return (
    <>
      <Container className="main">
        <EmpleadoLista></EmpleadoLista>
      </Container>
    </>
  );
}

export default App;
