import React from 'react';
import './Home.css'
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <header>
            <div className='home'>
                <div className='lg:flex justify-between items-center px-4'>
                    <div>
                        <h1>AB</h1>
                    </div>
                    <nav className='decoration-transparent lg:flex pr-2 gap-4'>
                        <ul><Link>About</Link></ul>
                        <ul><Link>Work</Link></ul>
                        <ul><Link></Link></ul>
                        <a href="#">About</a>
                        <a href="#">Work</a>
                        <a href="#">Portfolio</a>
                        <a href="#">Get in touch</a>
                        
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Home;