import React from 'react';
import Header from '../Header/header';
import String from './images/Vector 1.svg';
import ChipOne from './images/pngwing 2.svg';
import ChipTwo from './images/pngwing 3.svg';
import ChilliTwo from './images/Chilli 1.svg';
import './styles/about.css'

function about(props) {

    return (
        <div>
            <Header/>
            <div className='AboutTitle'>
                <h1 className='text-center'>This Page isn't ready</h1>
            </div>
            <div className=''>
                <div className='Chips'>
                    <div className='chips-one'>
                        <img src={ChipOne}/>
                    </div>
                    <div className='chips-Two'>
                        <img src={ChipTwo}/>
                    </div>
                </div>
                <div className='Chilli-pepper'>
                    <img src={ChilliTwo}/>
                </div>
            </div>
        </div>
    );
}

export default about;