import React, { useRef, useState } from 'react';
import './Home.css'
import { FaArrowUp, FaBars, FaBeer, FaCalendar, FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';
import emailjs from '@emailjs/browser';



 const Home = () => {

    // This is prohibited to change the dom directly

    // toggle icon
    // let menuIcon = document.querySelector('#menu-icon')
    // let navbar = document.querySelector('.navbar')

    // menuIcon.onclick=()=>{
    //     menuIcon.classList.toggle('bx-x')
    //     navbar.classList.toggle('active')
    // }

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_lf55o7p', 'template_116g76g', form.current, 'M6oPymgUSraalh4_g')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    }


    const menuIconRef = useRef(null);
    const navbarRef = useRef(null);

    const [isMenuOpen, setIsMenuOpen] = useState(false)


    const handleMenuClick = () => {

        // menuIconRef.current.classList.toggle('bx-x');
        // navbarRef.current.classList.toggle('active');

        setIsMenuOpen(!isMenuOpen)
    };

    const handleMenuItemClick = () => {
        setIsMenuOpen(false)
    }

    // scroll section

    let sections = document.querySelectorAll('section')
    let navLinks = document.querySelectorAll('header nav a')

    window.onscroll = () => {
        sections.forEach(sec => {
            let top = window.scrollY;
            let offset = sec.offsetTop - 100;
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id')

            if (top >= offset && top < offset + height) {
                navLinks.forEach(links => {
                    links.classList.remove('active');
                    document.querySelector('header nav a [href*="' + id + '"]').classList.add('active')
                })
            }
        })



        let header = document.querySelector('header')
        header.classList.toggle('sticky', window.scrollY > 100)



        // const handleMenuClick = () => {
        //     menuIconRef.current.classList.remove('bx-x');
        //     navbarRef.current.classList.remove('active');
        // }
    }

    return (
        <>
            <header className='header'>
                <a href="#" className='Logo'>HBA<span className='animation' style={{ "--i": 1 }}></span></a>

                <div className={`bx bx-menu ${isMenuOpen ? 'bx-x' : ''}`} id='menu-icon' ref={menuIconRef} onClick={handleMenuClick}><box-icon name='menu'></box-icon><span className='animation' style={{ "--i": 2 }}></span></div>

                <nav className={`navbar ${isMenuOpen ? 'active' : ''}`} ref={navbarRef}>
                    <a onClick={handleMenuItemClick} href="#home" className='active'>Home</a>
                    <a onClick={handleMenuItemClick} href="#about">About</a>
                    <a onClick={handleMenuItemClick} href="#education">Education</a>
                    <a onClick={handleMenuItemClick} href="#skill">Skill</a>
                    <a onClick={handleMenuItemClick} href="#work">Work</a>
                    <a onClick={handleMenuItemClick} href="#touch">Get in touch</a>

                    <span className="active-nav"></span>
                    <span className='animation' style={{ "--i": 2 }}></span>

                </nav>
            </header>
            <section className='homes' id='home'>
                <div className='home-content'>
                    <h1 >Hi, I'm <span>Himaloy Bala Ashis</span> </h1>

                    <h3 className='animate'>A MERN-Stack developer</h3>
                    <p>A responsive developer With a solid foundation in JavaScript and a deep understanding of the MERN technology stack and a enthusiast of Full-Stack technology.</p>
                    <div className='btn-box'>
                        <a href="mailto:himaloyashis98@gmail.com">Let's Talk</a>
                        <a href="https://drive.google.com/file/d/1gxbefPmlYLQZU2k4czaGK2Pk1recWwIi/view">Download CV</a>
                    </div>
                </div>
                {/* <img className='object-cover lg:flex h-96' src="../../../public/Ashish Fiverrr copy.png 5.png" alt="" /> */}
                <div className='image-hover'>

                </div>
                <div className='social'>
                    <a href="https://www.linkedin.com/in/himaloy-bala-ashis-2b9a66245/"><FaLinkedin></FaLinkedin> </a>
                    <a href="https://github.com/Himlaoy"><FaGithub></FaGithub></a>
                    <a href="https://www.facebook.com/himaloyashis"><FaFacebook></FaFacebook></a>
                </div>
            </section>

            {/* about section */}

            <section className='about' id='about'>
                <h3 className='heading'>About <span>me</span></h3>
                <div className='about-image'>
                    <img className='h-72' src="/Ashish Fiverrr copy.png 5.png" alt="" />
                    <span className='circle-image'></span>
                </div>
                <div className='about-content'>
                    <h3>MERN-Stack Developer</h3>
                    <p>I am MERN-Stack developer, A tech enthusiast and a learner with in search of new things. Always flexible with adapting new technology. I excel in building end-to-end solutions that deliver seamless user experiences. I honed my skills in frontend and backend development, leveraging my expertise in React, Node.js, Express.js, and MongoDB. I possess a keen eye for detail and a strong problem-solving mindset, allowing me to tackle complex challenges and deliver elegant solutions.</p>
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
                                    <p> Here I gathered versatile knowledge about bangla language and literature. That makes me more thinker about man , nature , earth , love and loss etc. </p>
                                </div>
                            </div>
                            <div className="education-content">
                                <div className="content">
                                    <div className="year"><FaCalendar></FaCalendar>jan-23 - jul-23</div>
                                    <h3>Web Development Course - Programming Hero</h3>
                                    <p>Here I discover myself in new era of my life acquiring programming language and work with  that was my ultimate dream !</p>
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

            {/* Works section */}
            <section className="works" id="work">
                <h2 className='heading'>My <span>Project</span></h2>
                <div className="container">
                    <div className="card">
                        <div className="image-box">
                            <img src="/works/2023-07-03 (8).png" alt="" />
                        </div>
                        <div className="content">
                            <h2 className='headings'>Musica</h2>
                            <p>Musica is Full-Stack music instrument learning based web application . That has multiple features , authentication and payment get way system and build with multiple technologies!</p>
                            <div className='btn-box links'>
                                <a href="https://music-instrument-45315.web.app/">Live site</a>
                                <a href="https://github.com/Himlaoy/musica-a-music-learning-academy">Client</a>
                                <a href="https://github.com/Himlaoy/Musica-a-music-learning-server">Server</a>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="image-box">
                            <img src="/works/2023-07-03 (chef).png" alt="" />
                        </div>
                        <div className="content">
                            <h2 className='headings'>ToysLand</h2>
                            <p>ToysLand is a multiple features based toy e-commerce focused web application! ToysLand has authentication system also and build with multiple technologies</p>
                            <div className='btn-box links'>
                                <a href="https://toy-verse-assignment.web.app/">Live site</a>
                                <a href="https://github.com/Himlaoy/ToysLand-client-side">Client</a>
                                <a href="https://github.com/Himlaoy/ToysLand-server-side">Server</a>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="image-box">
                            <img src="/works/2023-07-03 (toothsome).png" alt="" />
                        </div>
                        <div className="content">
                            <h2 className='headings'>Toothsome Space</h2>
                            <p>Toothsome space is chinese restaurant recipe based website having attractive user friendly template . Integrated authentication system and a well decorated !</p>
                            <div className='btn-box links'>
                                <a href="https://chef-authentication.web.app/">Live site</a>
                                <a href="https://github.com/Himlaoy/chef-client-side">Client</a>
                                <a href="https://github.com/Himlaoy/chef-server-side">Server</a>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="image-box">
                            <img src="/works/2023-07-03 (8).png" alt="" />
                        </div>
                        <div className="content">
                            <h2 className='headings'>Musica</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus totam quasi earum ut libero reiciendis quibusdam assumenda debitis, molestiae accusantium veniam quia neque, quas nesciunt consequuntur tempora velit voluptates blanditiis!</p>
                            <div className='btn-box links'>
                                <a href="https://music-instrument-45315.web.app/">Live site</a>
                                <a href="https://github.com/Himlaoy/musica-a-music-learning-academy">Client</a>
                                <a href="https://github.com/Himlaoy/Musica-a-music-learning-server">Server</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* contact section */}


            <section className="contact" id="touch">

                <h2 className='heading hkk'>Get in <span>touch!</span></h2>

                <h3 className='headingg'>Hit me up if you are interested in work together</h3>

                <form action="" ref={form} onSubmit={sendEmail}>
                    <div className="input-box">
                        <div className="input-field">
                            <input type="text" name="to_name" placeholder='Full name' id="" />
                            <span className='focus'></span>
                        </div>
                        <div className="input-field">
                            <input type="email" name="from_name" placeholder='Email address' id="" />
                            <span className='focus'></span>
                        </div>
                    </div>
                    <div className="input-box">
                        <div className="input-field">
                            <input type="number" name="phone" placeholder='Moile' id="" />
                            <span className='focus'></span>
                        </div>
                        <div className="input-field">
                            <input type="text" name="email-subject" placeholder='Email subject' id="" />
                            <span className='focus'></span>
                        </div>
                    </div>

                    <div className="textarea-field">
                        <textarea name="message" id="" cols="30" placeholder='Type your message' rows="10"></textarea>
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
export default Home