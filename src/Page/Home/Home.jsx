import React from 'react';
import './Home.css'
import { FaArrowUp, FaBars, FaBeer, FaCalendar, FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';

const Home = () => {

    // scroll section

    window.scroll=()=>{
        let header = document.querySelector('header')
        header.classList.toggle('sticky', window.scrollY>100)
    }

    return (
        <>
            <header className='header'>
                <a href="#" className='Logo'>HBA</a>

                <div className='bx bx-menu' id='menu-icon'><FaBars></FaBars></div>

                <nav className='navbar'>
                    <a href="#home">Home</a>
                    <a href="#about" className='active'>About</a>
                    <a href="#education">Education</a>
                    <a href="#skill">Skill</a>
                    <a href="#work">Work</a>
                    <a href="#contact">Contact</a>
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
                                    <div className="year"><FaCalendar className='fa'></FaCalendar>16-20</div>
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
                    {/* <div className="education-column">
                        <h3 className='title'>Education</h3>

                        <div className="education-box">
                            <div className="education-content">
                                <div className="content">
                                    <div className="year"><FaCalendar className='fa'></FaCalendar>16-20</div>
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
                    </div> */}
                </div>

            </section>

            {/* skill section */}

            <section className='skills' id='skill'>
                <h2 className='heading'>My <span>Skill</span></h2>

                <div className="skill-row">
                    <div className="skill-column">
                        <h3 className='title'> Coding Skills</h3>

                        <div className="skill-box">
                            <div className="skill-content">
                                <div className="progress">
                                    <h3>HTML <span>90%</span></h3>
                                    <div className="bar"><span></span></div>
                                </div>
                                <div className="progress">
                                    <h3>CSS <span>80%</span></h3>
                                    <div className="bar"><span></span></div>
                                </div>
                                <div className="progress">
                                    <h3>JavaScript <span>65%</span></h3>
                                    <div className="bar"><span></span></div>
                                </div>
                                <div className="progress">
                                    <h3>React.js <span>70%</span></h3>
                                    <div className="bar"><span></span></div>
                                </div>
                                <div className="progress">
                                    <h3>Express.js <span>65%</span></h3>
                                    <div className="bar"><span></span></div>
                                </div>
                                <div className="progress">
                                    <h3>Node.js <span>64%</span></h3>
                                    <div className="bar"><span></span></div>
                                </div>
                                <div className="progress">
                                    <h3>MongoDB <span>68%</span></h3>
                                    <div className="bar"><span></span></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="skill-column">
                        <h3 className='title'> Tools Skills</h3>

                        <div className="skill-box">
                            <div className="skill-content">
                                <div className="progress">
                                    <h3>Tailwind CSS <span>90%</span></h3>
                                    <div className="bar"><span></span></div>
                                </div>
                                <div className="progress">
                                    <h3>Bootstrap CSS <span>90%</span></h3>
                                    <div className="bar"><span></span></div>
                                </div>
                                <div className="progress">
                                    <h3>Firebase <span>95%</span></h3>
                                    <div className="bar"><span></span></div>
                                </div>
                                <div className="progress">
                                    <h3>Figma <span>80%</span></h3>
                                    <div className="bar"><span></span></div>
                                </div>
                                <div className="progress">
                                    <h3>Vercel <span>95%</span></h3>
                                    <div className="bar"><span></span></div>
                                </div>
                                <div className="progress">
                                    <h3>Netelify <span>90%</span></h3>
                                    <div className="bar"><span></span></div>
                                </div>
                                <div className="progress">
                                    <h3>JWT <span>75%</span></h3>
                                    <div className="bar"><span className='ok'></span></div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </section>

            {/* contact section */}

            <section className="contact" id="contact">

                <h2 className='heading'>Contact <span>Me!</span></h2>

                <form action="">
                    <div className="input-box">
                        <div className="input-field">
                            <input type="text" name="email" placeholder='Full name' id="" />
                            <span className='focus'></span>
                        </div>
                        <div className="input-field">
                            <input type="email" name="address" placeholder='Email address' id="" />
                            <span className='focus'></span>
                        </div>
                    </div>
                    <div className="input-box">
                        <div className="input-field">
                            <input type="number" name="email" placeholder='Moile' id="" />
                            <span className='focus'></span>
                        </div>
                        <div className="input-field">
                            <input type="text" name="email" placeholder='Email subject' id="" />
                            <span className='focus'></span>
                        </div>
                    </div>
                    
                    <div className="textarea-field">
                        <textarea name="" id="" cols="30" placeholder='Type your message' rows="10"></textarea>
                        <span className='focus'></span>
                    </div>

                    <div className="btn-box btnss">
                        <button type="submit" className='btn'>Submit</button>
                    </div>

                </form>
            </section>

            {/* footer section */}

            <footer className='footer'>
                <div className="footer-text">
                    <p>Coppy &copy; 2023 by Himaloy | All Right reserved</p>
                </div>
                <div className="footer-icon">
                    <a href="#"><FaArrowUp></FaArrowUp></a>
                </div>

            </footer>
        </>
    );
};

export default Home;