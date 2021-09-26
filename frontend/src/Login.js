import { useState, useEffect, useRef } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import { Envelope, Key, ArrowReturnRight, ArrowLeft } from 'react-bootstrap-icons'

export default function newLogin() {
  const [option, setOption] = useState('password')
  const [error, setError] = useState(null)

  async function onSubmit() {
    window.alert('sample login')
  }

  return (
    <Form onSubmit={onSubmit} className="mt-4">
      <h1 className="my-4 display-3 text-center">Login</h1>
      <Col>
        <Card className="my-5 shadow p-4 rounded"
          style={{ 
            maxWidth: `100%`,
            margin: 'auto'
          }}
        >
          {option && 
            <>
              <div className="in-group">
                <Form.Label><Envelope className="mr-2 mb-1" size={20} /> Email address</Form.Label>
                <Form.Control type="email" placeholder="Email" />
              </div>
              <div className="in-group">
                <Form.Label><Key className="mr-2 mb-1" size={20} /> Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </div>
              <Button
                className="w-100"
                type="submit"
              >
                Login
              </Button>
              <Row className="mt-4" style={{height: '4em'}}>
                <Button 
                  variant="link" 
                  onClick={() => window.alert('sample')} 
                  className="signup-button mx-auto"
                >
                  Forgot Password?
                </Button>
                <Button 
                  variant="link" 
                  onClick={() => window.alert('sample')} 
                  className="signup-button mx-auto"
                >
                  Signup
                </Button>
              </Row>
            </>
          }
        </Card>
      </Col>
    </Form>
  )
}
