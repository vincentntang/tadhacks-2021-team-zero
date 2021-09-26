import React from 'react'
import { ArrowDown, ArrowUp, ArrowLeft, ArrowRight, Octagon } from 'react-bootstrap-icons'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import axios from 'axios'

export default function Controls() {

    function go(input) {
        e.stopPropagation()
        axios.post('http://localhost:4000/rescuer/direction-input', {input})
            .then(res => console.log(res.data))
            .catch(err => console.log('err', err))
    }
    return (
        <>
            <div className="mt-2">
                <Row className="justify-content-md-center">
                    <div className="control-box">
                        <div className="space-filler"></div>
                    </div>
                    <div className="control-box">
                        <Button  className="control-btn" onClick={e => go(e, 'up')}>
                            <ArrowUp size={20} />
                        </Button>
                    </div>
                    <div className="control-box">
                        <div className="space-filler"></div>
                    </div>
                </Row>
                <Row className="justify-content-md-center">
                    <div className="control-box">
                        <Button  className="control-btn" onClick={e => go(e, 'left')}>
                            <ArrowLeft size={20} />
                        </Button>
                    </div>
                    <div className="control-box">
                        {/* <div className="space-filler"></div> */}
                        <Button  className="control-btn" onClick={e => go(e, 'stop')}>
                            <Octagon size={24} />
                        </Button>
                    </div>
                    <div className="control-box">
                        <Button  className="control-btn" onClick={e => go(e, 'right')}>
                            <ArrowRight size={20} />
                        </Button>
                    </div>
                </Row>
                <Row className="justify-content-md-center">
                    <div className="control-box">
                        <div className="space-filler"></div>
                    </div>
                    <div className="control-box">
                        <Button  className="control-btn" onClick={e => go(e, 'down')}>
                            <ArrowDown size={20} />
                        </Button>
                    </div>
                    <div className="control-box">
                        <div className="space-filler"></div>
                    </div>
                </Row>
            </div>
        </>
    )
}
