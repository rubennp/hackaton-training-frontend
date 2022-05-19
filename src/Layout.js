import { Nav, Navbar, Button, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';

import Content from './components/Content';

const Layout = () => {
    return (
      <> 
        <Navbar bg="light" sticky="top" expand="lg" className="px-4">
          <Navbar.Brand href="/">Brand</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav>  
              <Nav.Item><Nav.Link href="registre">Registre</Nav.Link></Nav.Item>
              <Nav.Item><Button href="login" variant="primary">Login</Button></Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Content className="my-4">
          <Row className="justify-content-center">
            <Outlet />
          </Row>
        </Content>
      </>
    );
};

export default Layout;