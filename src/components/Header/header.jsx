import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Logo from './images/Salah.svg';
// import Menu from './images/menu.svg';
import './styles/header.css';
import { Link } from 'react-router-dom';

function header(props) {

    const [navOpen, SetNavOpen] = useState(false);

    
    return (
        <div>
            <Container fluid className='d-md-block align-items-center gap-3 p-0 my-2'>
                <Row className='d-flex d-md-flex m-0 align-items-center align-items-center'>
                    <Col className='col-md-4 px-2'>
                        <div> 
                            <img className='Logo' src={Logo} alt="" />
                        </div>
                    </Col>
                    <Col className='p-0 GridIcon d-md-none d-flex justify-content-end px-2'>
                        <div>
                            <i onClick={() => SetNavOpen(true)} className="text-dark  bi bi-columns-gap"></i>    
                        </div>
                    </Col>
                    {
                        navOpen  ? 
                        <Col className=' col-md-3 d-block m-0 md-align-items-center'>
                            <div className=' nav'>
                                <div className='d-md-none closeBtn d-block'>
                                    <i onClick={() => SetNavOpen(false)} class="bi bi-x-lg"></i>  
                                </div>
                                    <Link to={'/hero'}>Home</Link>
                                    <Link to={'/about'}>About</Link>
                                    <Link to={'/services'}>Services</Link>
                            </div>
                        </Col> : 
                        <Col className=' col-md-3 d-none m-0 d-md-flex mx-auto  md-align-items-center'>
                            <div className='navDesktop '>
                                <ul className='list-unstyled gap-4 m-0 text-uppercase'>
                                    <Link to={'/hero'}>Home</Link>
                                    <Link to={'/about'}>About</Link>
                                    <Link to={'/services'}>Services</Link>
                                </ul>
                            </div>
                        </Col>
                    }
                    <Col className='col-md-3 d-none p-0 d-md-flex'>
                        <div className='inputTag p-2 border-secondary'>
                            <i className=' fas fa-magnifying-glass'></i>
                            <input className='px-3' type='text' placeholder='Search...'/>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default header;