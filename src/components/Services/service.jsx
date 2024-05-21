import React, { Component } from 'react';
import ChipOne from './images/pngwing 2.svg';
import ChipTwo from './images/pngwing 3.svg';
import ChilliTwo from './images/Chilli 1.svg';
import Header from '../Header/header';
import './styles/service.css'

class service extends Component {
    render() {
        return (
            <div>
                <Header/>
                <div className='my-5 text-center'>
                    <h1>{this.props.title}</h1>
                 </div>
                 <div className='mainChips'>
                    <div className='chipsOne'>
                        <img src={ChipOne}/>
                    </div>
                    <div className='chipsTwo'>
                        <img src={ChipTwo}/>
                    </div>
                </div>
                <div className='chilliPepper'>
                    <img src={ChilliTwo}/>
                </div>
            </div>
            
        );
    }
}

export default service;