import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function About() {
  return (
    <>
      <h1 className="display-1 my-5">About</h1>
      <h4 className="text-muted text-center">
        A First Responder Automated Rescurer Assistant
      </h4>
      <hr />
    <br/><br/>
        <Row>
          <Col md={6} className="my-2 p-3">
            <h4 className="">Automated Rescue Assistant 🤖</h4>
            <p className="m-2">
              &emsp;When disaster strikes there are not only dangers to the victim but also to those who try to rescue them. 
        This project hopes to provide an automated disaster rescuer robot assistant.
        The robot is made to work in situations where it is too dangerous for first responders to enter an area.
        Weither that is from an collapsed building or any other kind of hazard.
            </p>
          </Col>
          <Col md={6}  className="my-2">
            <img src="/img/robot.jpg" className="rounded shadow w-100 mb-3" />
          </Col>
          <Col md={6}  className="my-2">
            <div className="aboutTech">
              <img src="/img/plan.jpg" className="rounded w-100 mt-3" />
            </div>
          </Col>
          <Col md={6}  className="my-2">
            <p className="m-2">
            &emsp;The robot has numerous sensors and offers live view with manual controlling.
        Using these toolings rescuers can investigate the area and offer assistance remotely.
        This keeps everyone safe while still offering the assistance needed in the event of a disaster.
        Temperature, sound and live video readings will be sent out live to a device. 
        We are using Agora.io for the livestream video and audio channels.
        From which the feed of info can be read as well as controlled in the case of the robots movement.
            </p>
          </Col>
          <Col md={6} className="p-3 my-2">
            <h5 className="display-4">Under the Hood 🧰</h5>
            <ul>
              <dd className="d-inline">- React </dd><span className="text-muted"> (Front end)</span><br />
              <dd className="d-inline">- Agora.io </dd><span className="text-muted"> (Web Sockets)</span><br />
              <dd className="d-inline">- Nest.js </dd><span className="text-muted"> (Back end)</span><br />
              <dd className="d-inline">- MongoDB </dd><span className="text-muted"> (Database)</span><br />
            </ul>
            <Row>
              <p className="text-muted ms-5" style={{fontSize: '1.1rem'}}>CodeBase <a href="https://github.com/vincentntang/tadhacks-2021-team-zero/">Github Team Zero</a></p>
            </Row>
          </Col>
          <Col md={6} className="my-2">
            <img src="/img/soder.jpg" className="rounded w-100 mt-3" />
          </Col>
        </Row>
    </>
  )
}
