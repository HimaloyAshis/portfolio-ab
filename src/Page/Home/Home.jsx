import React from 'react';
import './Home.css'
import { Link } from 'react-router-dom';
import { FaBars, FaBeer, FaCalendar, FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';

const Home = () => {
    return (
        <>
            <header className='header'>
                <a href="#" className='Logo'>HBA</a>

                <div className='bx bx-menu' id='menu-icon'><FaBars></FaBars></div>

                <nav className='navbar'>
                    <a href="#home">Home</a>
                    <a href="#about" className='active'>About</a>
                    <a href="#education">Education</a>
                    <a href="#work">Work</a>
                    <a href="#portfolio">Portfolio</a>
                    <a href="#get in touch">Get in touch</a>

                </nav>
            </header>
            <section className='homes' id='home'>
                <div className='home-content'>
                    <h1 >Hi, I'm <span>Himaloy Bala Ashis</span> </h1>

                    <h3 className='animate'>Im a MERN-Stack developer</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic voluptate optio laudantium perspiciatis quos architecto modi ut repellat fugiat sit. Incidunt, et. Tempore sed tempora excepturi consequatur quo dolorem at.</p>
                    <div className='btn-box'>
                        <a href="#">Hire me</a>
                        <a href="#">Lets talk</a>
                    </div>
                </div>
                <img className='object-cover lg:flex h-96' src="../../../public/Ashish Fiverrr copy.png 5.png" alt="" />
                <div className='image-hover'>

                </div>
                <div className='social'>
                    <a href="#"><FaLinkedin></FaLinkedin> </a>
                    <a href="#"><FaGithub></FaGithub></a>
                    <a href="#"><FaFacebook></FaFacebook></a>
                </div>
            </section>

            {/* about section */}

            <section className='about' id='about'>
                <h3 className='heading'>About <span>me</span></h3>
                <div className='about-image'>
                    <img className='h-72' src="../../../public/Ashish Fiverrr copy.png 5.png" alt="" />
                    <span className='circle-image'></span>
                </div>
                <div className='about-content'>
                    <h3>MERN-Stack Developer</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas neque magnam distinctio nesciunt cumque delectus excepturi id illo, in eligendi nobis molestiae voluptates pariatur, voluptas provident aut, incidunt modi ratione.</p>
                    <div className="btn-box btns-more">
                        <a href="" className="btns">Read More</a>
                    </div>
                </div>
            </section>
            {/* my education */}
            <section className='education ' id='education'>
                <h2 className='heading'>My <span>journey</span></h2>
                <div className="education-row">
                    <div className="education-column">
                        <h3 className='title'>Education</h3>

                        <div className="education-box">
                            <div className="education-content">
                                <div className="content">
                                    <div className="year"><FaCalendar></FaCalendar>16-20</div>
                                    <h3>Honours - Bangla, Kabi Nazrul Govt. College</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit consectetur totam nesciunt unde velit minus exercitationem sit blanditiis ad adipisci fuga nisi molestias sint obcaecati neque minima esse ea, fugiat soluta illum dignissimos ut reiciendis tempore sequi? Ut nam earum atque consequuntur !</p>
                                </div>
                            </div>
                            <div className="education-content">
                                <div className="content">
                                    <div className="year"><FaCalendar></FaCalendar>jan-23 - jul-23</div>
                                    <h3>Web Development Course - Programming Hero</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit consectetur totam nesciunt unde velit minus exercitationem sit blanditiis ad adipisci fuga nisi molestias sint obcaecati neque minima esse ea, fugiat soluta illum dignissimos ut reiciendis tempore sequi? Ut nam earum atque consequuntur !</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </section>
        </>
    );
};

export default Home;