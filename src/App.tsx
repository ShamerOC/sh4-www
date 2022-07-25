import React from 'react';
import './App.css';
import LeftBar from "./Navigation/LeftBar";
import {Col, Container, Row} from "react-bootstrap";
import {Route} from "react-router";
import {Routes} from "react-router-dom";
import About from "./About/About";
import Articles from "./Articles/Articles";
import Projects from "./Projects/Projects";
import Contact from "./Contact/Contact";
import Admin from "./Admin/Admin";

function App() {
    return (
        <Container fluid>
            <Row>
                <Col md="2" className="border-end border-light min-vh-100">
                    <LeftBar/>
                </Col>
                <Col md="10">
                    <Routes>
                        <Route path='/' element={<About />}/>
                        <Route path='articles' element={<Articles />}/>
                        <Route path='projects' element={<Projects />}/>
                        <Route path='contact' element={<Contact />}/>
                        <Route path='admin' element={<Admin />}/>
                    </Routes>
                </Col>
            </Row>
        </Container>
    );
}

export default App;
