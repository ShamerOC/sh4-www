import {Col, Container, ListGroup, Row} from "react-bootstrap";

let About = () => {
    return (
        <Container>
            <h1 className="text-center pb-5">Krzysztof Wydrzyński</h1>
            <Row className="justify-content-md-center pb-5">
                <Col md="8">
                    Looking for interesting projects
                </Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col md="3">
                    <h4 className="text-center">About me</h4>
                    <ListGroup className="ps-3 pt-2 list-unstyled">
                        <li>🎂 {new Date().getFullYear() - 1999} years old</li>
                        <li>🇵🇱 Born in Poland</li>
                        <li>💻 Software Engineer</li>
                        <li>🎓 Computer Science BSc</li>
                    </ListGroup>
                </Col>
                <Col md="3">
                    <h4 className="text-center">Find me at</h4>
                    <ListGroup className="ps-3 pt-2 list-unstyled">
                        <li>⌨️ <a href="https://github.com/ShamerOC">GitHub</a></li>
                        <li>💼 <a href="https://www.linkedin.com/in/krzysztof-wydrzynski/">Linkedin</a></li>
                        <li>🐦 <a href="https://twitter.com/k_wydrzynski">Twitter</a></li>
                        <li>📷 <a href="https://www.instagram.com/k_wydrzynski/">Instagram</a></li>
                    </ListGroup>
                </Col>
            </Row>
        </Container>
    );
}

export default About;
