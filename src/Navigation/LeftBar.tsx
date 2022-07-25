import React from "react";
import {Container, ListGroup} from "react-bootstrap";
import {Link} from "react-router-dom";

let LeftBar = () => {
    return (
        <Container className="text-center">
            <h1><Link className="text-reset text-decoration-none" to='/'>SH4.</Link></h1>
            <ListGroup>
                <li><Link to='/articles'>Articles.</Link></li>
                <li><Link to='/projects'>Projects.</Link></li>
                <li><Link to='/contact'>Contact.</Link></li>
            </ListGroup>
        </Container>
    );
}

export default LeftBar;
