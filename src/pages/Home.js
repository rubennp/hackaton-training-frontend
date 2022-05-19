import { Row, Form} from 'react-bootstrap';
// import RowStyled from "../components/RowStyled";
import { districtes, tipusNegoci } from '../data';

const Home = () => {
    return (
        <>
            <Row className="p-4 bg-light">
                <h1 className="text-center">Vols crear un negoci a Barcelona?<br/>Necesites un local?</h1>
                <h2 className="text-center">T'ajudem a trobar-lo!</h2>
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