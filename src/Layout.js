import { Container, Nav, Navbar, Button, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
      <> 
        <Navbar bg="light" styicky="top" expand="lg" className="px-4">
          <Navbar.Brand href="/">Brand</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav>  
              <Nav.Item><Nav.Link href="registre">Registre</Nav.Link></Nav.Item>
              <Button href="login" variant="primary">Login</Button>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Container className="my-4">
          <Row className="justify-content-center">
            <Outlet />
          </Row>
        </Container>
      </>
    );
};

export default Layout;