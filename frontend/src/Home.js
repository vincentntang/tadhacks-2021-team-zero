import { useEffect, useState } from 'react'
import { useHistory } from "react-router-dom"
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Map from './components/Map'

export default function App() {
    const history = useHistory()

    const [inCall, setInCall] = useState(false)
    useEffect(() => {
    }, [])

    return (
        <Container>
            <h1 className="display-4 text-center">Rescurer</h1>
            <Card 
                onClick={() => history.push('/stream')}
                className="rounded shadow m-5 p-5 hover-card"
                style={{height: '500px'}}
            >
                LiveStream
            </Card>
            <Row>
                <Col className="p-3">
                    <Button className="mx-auto d-block home-btn" onClick={() => history.push('/call')}>Call</Button>
                </Col>
                <Col className="p-3">
                    <Button className="mx-auto d-block home-btn" onClick={() => history.push('/messaging')}>Text</Button>
                </Col>
                <Col className="p-3">
                    <Button className="mx-auto d-block home-btn" onClick={() => history.push('/readings')}>Readings</Button>
                </Col>
            </Row>
            <Row>
                <Col className="p-3">
                    <Button className="mx-auto d-block home-btn" onClick={() => history.push('/controls')}>Auto</Button>
                </Col>
                <Col className="p-3">
                    <Button className="mx-auto d-block home-btn" onClick={() => history.push('/controls')}>Manual</Button>
                </Col>
                <Col className="p-3">
                    <Button className="mx-auto d-block home-btn">Map</Button>
                </Col>
            </Row>
            <Map />
        </Container>
    );
}
