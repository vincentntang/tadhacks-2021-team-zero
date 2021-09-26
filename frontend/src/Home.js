import { useEffect, useState } from 'react'
import { useHistory } from "react-router-dom"
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Map from './components/Map'
import Stream from './Stream'
import axios from 'axios'

export default function App() {
    const history = useHistory()

    const [inCall, setInCall] = useState(false)
    useEffect(() => {
    }, [])

    function setAuto() {
        axios.post('http://localhost:4000/rescuer/robot-status', {isAuto: 'true'})
            .then(res => console.log(res.data))
            .catch(err => console.log('err', err))
    }
    function setManual() {
        axios.post('http://localhost:4000/rescuer/robot-status', {isAuto: 'false'})
            .then(res => console.log(res.data))
            .catch(err => console.log('err', err))
    }

    return (
        <>
            {/* <h1 className="display-4 text-center">Rescurer</h1> */}
            <Card 
                className="rounded shadow m-5 p-5 hover-card" onClick={() => history.push('/test')}
            >
                <Stream />
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
                    <Button className="mx-auto d-block home-btn" onClick={setAuto}>Auto</Button>
                </Col>
                <Col className="p-3">
                    <Button className="mx-auto d-block home-btn" onClick={setManual}>Manual</Button>
                </Col>
                <Col className="p-3">
                    <Button className="mx-auto d-block home-btn" disabled>Map</Button>
                </Col>
            </Row>
            <Map />
        </>
    );
}
