import React from 'react';
import Header from '../Header/header';
import { Col, Container, Row } from 'react-bootstrap';
import './styles/hero.css';
import Chips from './images/Chips.svg'
import Cart from './images/Frame 81.svg';
import mobileString from './images/Vector 2.svg';
import DesktopString from './images/Vector 1.svg';
import Plane from './images/Plane icon 3.svg'
import Pepper from './images/pepper.svg';
import Corn from './images/Corn.svg';
import Chilli from './images/mobile-pepper.svg';
import Fire from './images/fire.svg';
import ChipOne from './images/pngwing 2.svg';
import ChipTwo from './images/pngwing 3.svg';
import ChilliTwo from './images/Chilli 1.svg';

function hero(props) {
    return (
        <div>
            <Header/>
            <Container>
                <Row className='my-5 d-md-flex mx-auto Hero md-align-items-center'>
                    <Col>
                        <div className='text-uppercase my-md-5 HeroHeader'>
                            <h1 className=''>flaming hot nachos</h1>
                            <p>Presenting the classic nachos with a flaming Hot Twist. It will rock your taste buds with chilli & lime</p>
                        </div>
                        <div className='d-md-flex d-flex gap-2 justify-content-start shopping-content gap-md-5 align-items-center'>
                            <div className='bg-dark d-md-flex d-flex align-items-center Cart'>
                                <img className='mx-2' src={Cart}/>
                                <a className=' text-decoration-none text-light' href=''>Add to Cart</a>
                            </div>
                            <div className='d-md-flex d-flex  align-items-center gap-4'>
                                <div className='increase-icon  d-flex align-items-center d-md-flex justify-content-center align-items-center rounded-circle bg-light'>
                                    <a className='p-0 m-0 text-decoration-none text-dark' href=''>+</a>
                                </div>
                                <div className='increase-icon  d-flex align-items-center d-md-flex justify-content-center align-items-center rounded-circle bg-light'>
                                    <a className='p-0 m-0 text-decoration-none text-dark' href=''>4</a>
                                </div>
                                <div className='decrease-icon d-flex align-items-center d-md-flex justify-content-center align-items-center rounded-circle bg-light'>
                                    <a className='p-0 m-0 text-decoration-none text-dark' href=''>-</a>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col className='col-md-3 Chip-bundle'>
                        <div className='hero-image mx-auto mx-md-0 my-md-1'>
                            <img
                            src={Chips}
                            />
                        </div>
                        <div className='position-absolute String d-md-none d-block'>
                            <img src={mobileString}/>
                            <div className='Plane d-md-none d-block'>
                                <img  src={Plane}/>
                            </div>
                        </div>
                        <div className='d-none position-absolute D-String d-md-block'>
                            <img className='img' src={DesktopString}/>
                            <div className='Pepper position-absolute'>
                                <img src={Pepper}/>
                            </div>
                        </div>
                    </Col>
                    <Col className='Fruit-bundle'>
                        <div className='Fruit'>
                           <div className='corn'>
                                <img src={Corn}/>
                           </div>
                           <div className='Chilli my-2'>
                                <img src={Chilli}/>
                           </div>
                           <div className='Fire my-2'>
                                <img src={Fire}/>
                           </div>
                        </div>
                    </Col> 
                    <div className='chips'>
                        <div>
                            <img src={ChipOne}/>
                        </div>
                        <div className='chips-twos'>
                            <img src={ChipTwo}/>
                        </div>
                    </div>
                    <div className='smallchilli'>
                            <img src={ChilliTwo}/>
                    </div>
                </Row>
                    
            </Container>
        </div>
    );
}

export default hero;