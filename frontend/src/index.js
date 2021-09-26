import React from 'react'
import ReactDOM from 'react-dom'
import Container from 'react-bootstrap/Container'
import Home from './Home'
import About from './About'
import Readings from './Readings'
import Controls from './Controls'
import Call from './Call'
import Messaging from './Messaging'
import Test from './Test'
import Navigation from './components/Navigation'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom"
import './global.css'
import 'bootstrap/dist/css/bootstrap.min.css'

ReactDOM.render(
  <React.StrictMode>
        <Router>
            <Navigation />
            <Container>
                <Switch>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/readings">
                        <Readings />
                    </Route>
                    <Route path="/controls">
                        <Controls />
                    </Route>
                    <Route path="/messaging">
                        <Messaging />
                    </Route>
                    <Route path="/call">
                        <Call />
                    </Route>
                    <Route path="/test">
                        <Test />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </Container>
        </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals