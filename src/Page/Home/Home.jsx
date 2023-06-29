import React from 'react';
import './Home.css'
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <>
            <header className='header'>
                <a href="#" className='Logo'>AB</a>
                <nav className='navbar'>
                    <a href="#" className='active'>About</a>
                    <a href="#">Work</a>
                    <a href="#">Portfolio</a>
                    <a href="#">Get in touch</a>

                </nav>
            </header>
            <section className='homes'>
                <div className='home-content'>
                    <h1 >Hi, Im Himaloy</h1>
                    <h3 className=''>Im a MERN-Stack developer</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic voluptate optio laudantium perspiciatis quos architecto modi ut repellat fugiat sit. Incidunt, et. Tempore sed tempora excepturi consequatur quo dolorem at.</p>
                    <div className='btn-box'>
                        <a href="#">Hire me</a>
                        <a href="#">Lets talk</a>
                    </div>
                </div>
                <div className='social'>
                    <a href="#"><box-icon type='logo' name='linkedin'></box-icon></a>
                    <a href="#"><box-icon type='logo' name='github'></box-icon></a>
                    <a href="#"><box-icon name='facebook' type='logo' ></box-icon></a>
                </div>
            </section>
        </>
    );
};

export default Home;