import React from 'react'
import { ArrowDown, ArrowUp, ArrowLeft, ArrowRight, Octagon } from 'react-bootstrap-icons'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function Controls() {
    return (
        <>
            <div className="mt-2">
                <Row className="justify-content-md-center">
                    <div className="control-box">
                        <div className="space-filler"></div>
                    </div>
                    <div className="control-box">
                        <Button variant="light" className="control-btn">
                            <ArrowUp size={20} />
                        </Button>
                    </div>
                    <div className="control-box">
                        <div className="space-filler"></div>
                    </div>
                </Row>
                <Row className="justify-content-md-center">
                    <div className="control-box">
                        <Button variant="light" className="control-btn">
                            <ArrowLeft size={20} />
                        </Button>
                    </div>
                    <div className="control-box">
                        <Button variant="light" className="control-btn">
                            <Octagon size={24} />
                        </Button>
                    </div>
                    <div className="control-box">
                        <Button variant="light" className="control-btn">
                            <ArrowRight size={20} />
                        </Button>
                    </div>
                </Row>
                <Row className="justify-content-md-center">
                    <div className="control-box">
                        <div className="space-filler"></div>
                    </div>
                    <div className="control-box">
                        <Button variant="light" className="control-btn">
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
