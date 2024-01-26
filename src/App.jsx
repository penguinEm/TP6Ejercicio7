import { Container } from "react-bootstrap";
import EmpleadoLista from "./components/EmpleadoLista";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
    <Navbar></Navbar>
      <Container className="main my-3">
        <EmpleadoLista></EmpleadoLista>
      </Container>
      <Footer></Footer>
    </>
  );
}

export default App;
