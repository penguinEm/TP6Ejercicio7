import { Container } from "react-bootstrap";
import EmpleadoLista from "./components/EmpleadoLista";

function App() {
  return (
    <>
      <Container className="main d-flex justify-content-center align-items-center">
        <EmpleadoLista></EmpleadoLista>
      </Container>
    </>
  );
}

export default App;
