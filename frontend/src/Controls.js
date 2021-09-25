import React from 'react'
import { ArrowDown, ArrowUp, ArrowLeft, ArrowRight, Octagon } from 'react-bootstrap-icons'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function Controls() {
    return (
        <>
            <h1 className="display-4 ms-4">Controls</h1>
            <Card className="rounded shadow m-5 p-5">
                <Row className="justify-content-md-center">
                    <div className="control-box">
                        <div className="space-filler"></div>
                    </div>
                    <div className="control-box">
                        <Button variant="light" className="control-btn">
                            <ArrowUp className="ml-2 mb-2" size={30} />
                        </Button>
                    </div>
                    <div className="control-box">
                        <div className="space-filler"></div>
                    </div>
                </Row>
                <Row className="justify-content-md-center">
                    <div className="control-box">
                        <Button variant="light" className="control-btn">
                            <ArrowLeft className="ml-2 mb-2" size={30} />
                        </Button>
                    </div>
                    <div className="control-box">
                        <Button variant="light" className="control-btn">
                            <Octagon className="ml-2 mb-2" size={26} />
                        </Button>
                    </div>
                    <div className="control-box">
                        <Button variant="light" className="control-btn">
                            <ArrowRight className="ml-2 mb-2" size={30} />
                        </Button>
                    </div>
                </Row>
                <Row className="justify-content-md-center">
                    <div className="control-box">
                        <div className="space-filler"></div>
                    </div>
                    <div className="control-box">
                        <Button variant="light" className="control-btn">
                            <ArrowDown className="ml-2 mb-2" size={30} />
                        </Button>
                    </div>
                    <div className="control-box">
                        <div className="space-filler"></div>
                    </div>
                </Row>
            </Card>
        </>
    )
}
