import { Container, Nav, Navbar, Button, Row } from 'react-bootstrap';

const App = () => {
  return (
    <> 
      <Navbar bg="light" styicky="top" expand="lg" className="px-4">
        <Navbar.Brand href="#">Brand</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav>  
            <Nav.Link href="#">Registre</Nav.Link>
            <Button variant="primary">Login</Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Container className="my-4">
        <Row className="justify-content-center">
          <h1>Vull iniciar un negoci a Barcelona!</h1>
          <h2>Busca el millor local</h2>
        </Row>
      </Container>
    </>
  );
};

export default App;
