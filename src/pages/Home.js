import { Row, Form, Col } from 'react-bootstrap';
import LinkStyled from '../components/LinkStyled';

import { districtes, tipusNegoci } from '../data';

const Home = () => {
    return (
        <>
            <Row className="p-4 mb-5 bg-light">
                <h1 className="text-center">Vols obrir un negoci a Barcelona?</h1>
                <p className="lead">T'ajudem a buscar un local buit o a saber quins tipus de negocis tens aprop</p>
            </Row>
            <Row>
                <Col>
                    <LinkStyled color="var(--bs-orange)" href="locals-actius">
                        <span>Busca locals buits</span>
                    </LinkStyled>
                </Col>
                <Col>
                    <LinkStyled color="var(--bs-yellow)" href="locals-buits">
                        <span>Busca negocis actius</span>
                    </LinkStyled>
                </Col>    
            </Row>
            <Row>
                <Form>
                    <Form.Group>
                        <Form.Text>Quin negoci?</Form.Text>
                        <Form.Select>
                            <option>Qualsevol</option>
                            {tipusNegoci.sort().map(tipus => {
                                return (
                                    <option>{tipus}</option>
                                );
                            })}
                        </Form.Select>
                    </Form.Group>
                    <Form.Group>
                        <Form.Text>Tria un districte:</Form.Text>
                        <Form.Select>
                            <option>Qualsevol</option>
                            {districtes.sort().map(districte => {
                                return (
                                    <option>{districte}</option>
                                );
                            })}
                        </Form.Select>
                    </Form.Group>
                    <Form.Group>
                        <Form.Check type="checkbox" id="checkbox-actiu" label="ACTIUS" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Check type="checkbox" id="checkbox-actiu" label="NO ACTIUS"/>
                    </Form.Group>
                </Form>
            </Row>
        </>
    );
};

export default Home;