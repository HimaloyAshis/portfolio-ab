import React from 'react';
import './Home.css'
import { Link } from 'react-router-dom';
import { FaBars, FaBeer, FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';

const Home = () => {
    return (
        <>
            <header className='header'>
                <a href="#" className='Logo'>HBA</a>

                <div className='bx bx-menu' id='menu-icon'><FaBars></FaBars></div>

                <nav className='navbar'>
                    <a href="#about" className='active'>About</a>
                    <a href="#work">Work</a>
                    <a href="#portfolio">Portfolio</a>
                    <a href="#get in touch">Get in touch</a>

                </nav>
            </header>
            <section className='homes'>
                <div className='home-content'>
                    <h1 >Hi, I'm <span>Himaloy Bala Ashis</span> </h1>

                    <h3 className='animate'>Im a MERN-Stack developer</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic voluptate optio laudantium perspiciatis quos architecto modi ut repellat fugiat sit. Incidunt, et. Tempore sed tempora excepturi consequatur quo dolorem at.</p>
                    <div className='btn-box'>
                        <a href="#">Hire me</a>
                        <a href="#">Lets talk</a>
                    </div>
                </div>
                <div className='social'>
                    <a href="#"><FaLinkedin></FaLinkedin> </a>
                    <a href="#"><FaGithub></FaGithub></a>
                    <a href="#"><FaFacebook></FaFacebook></a>
                </div>
            </section>
        </>
    );
};

export default Home;