import { useEffect, useState } from 'react';
import { Row, Col, Form, FloatingLabel, Pagination, Table } from 'react-bootstrap';

import { districtes, tipusNegoci } from '../data';
const llistatLocals = require('../llistatLocals.json');

const Locals = ({ actius }) => {
    const [page, setPage] = useState(1);
    const [mostra, setMostra] = useState([]);
    const [tipus, setTipus] = useState("Qualsevol");
    const [districte, setDistricte] = useState("Qualsevol");

    const pagItems = [];

    for (let n = 1; n <= 10; n++) { pagItems.push(
        <Pagination.Item key={n} active={n === page} onClick={() => setPage(prev => n)}>
            {n}
        </Pagination.Item>
        );
    }

    useEffect(() => {
        setMostra(
            llistatLocals
            .filter(local => actius ? local.Actiu : !local.Actiu).slice((page-1)*10, (page-1)*10+9)
            .filter(t => tipus === "Qualsevol" ? t : t === tipus)
            .filter(d => districte === "Qualsevol" ? d: districte === d)
        );
    }, [page, tipus, districte, actius]);

    return (
        <>
            <h1 className="text-end">Locals {actius ? "Actius" : "Buits" }</h1>
            <Form className="mb-4">
                <Row>
                    <Col>
                        <FloatingLabel label="Tipus de negoci">
                            <Form.Select onChange={e => {
                                setTipus(e.target.value);
                            }}>
                                <option key="0">Qualsevol</option>
                                {tipusNegoci.sort().map((t, idx) => {
                                    return (
                                        <option key={idx+1} value={t}>{t}</option>
                                    );
                                })}
                            </Form.Select>
                        </FloatingLabel>
                    </Col>
                    <Col>
                        <FloatingLabel label="Districte">
                            <Form.Select onChange={e => 
                                setDistricte(e.target.value)
                            }>
                                <option key="0">Qualsevol</option>
                                {districtes.sort().map((d, idx) => {
                                    return (
                                        <option key={idx+1} value={d}>{d}</option>
                                    );
                                })}
                            </Form.Select>
                        </FloatingLabel>
                    </Col>
                </Row>
            </Form>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Nom</th>
                        <th>Carrer</th>
                        <th>Barri</th>
                        <th>Districte</th>
                        <th>Tipus d'activitat</th>
                    </tr>
                </thead>
                <tbody>
                    {mostra.map((local, idx) => {
                        return (
                            <tr key={`local${idx}`}>
                                <th>{local.Nom_Local}</th>
                                <th>{local.Nom_Via}</th>
                                <th>{local.Nom_Barri}</th>
                                <th>{local.Nom_Districte}</th>
                                <th>{local.Nom_Activitat}</th>
                            </tr>
                        );
                    })}
                </tbody>
                <tfoot>
                    <Pagination>{pagItems}</Pagination>
                </tfoot>
            </Table>
        </>
    );
};

export default Locals;