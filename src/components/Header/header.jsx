import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Logo from './images/Salah.svg';

function header(props) {
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <div> 
                            <img src={Logo} alt="" />
                        </div>
                        <div>
                            
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default header;