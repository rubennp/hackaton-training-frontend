import { Row, Col } from 'react-bootstrap';
import LinkStyled from '../components/LinkStyled';

const Home = () => {
    return (
        <>
            <Row className="p-4 mb-5 bg-light text-center">
                <h1>Vols obrir un negoci a Barcelona?</h1>
                <p className="lead">T'ajudem a buscar un local buit o a saber quins tipus de negocis tens aprop abans d'obrir el teu</p>
            </Row>
            <Row>
                <Col>
                    <LinkStyled color="var(--bs-orange)" href="locals-buits">
                        <span>Busca locals buits</span>
                    </LinkStyled>
                </Col>
                <Col>
                    <LinkStyled color="var(--bs-yellow)" href="locals-actius">
                        <span>Busca negocis actius</span>
                    </LinkStyled>
                </Col>    
            </Row>
        </>
    );
};

export default Home;