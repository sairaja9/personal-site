import { HashLink } from 'react-router-hash-link';

import Landing from '../components/Landing';
import CenterText from '../components/CenterText';
import VariableSpacer from "../components/VariableSpacer";
import Card from '../components/Card';
import ContactForm from '../components/ContactForm';
import BorderBar from '../components/BorderBar';
import Footer from '../components/Footer';

import RiceSkyline from '../assets/home/rice-skyline.jpg';
import WhiteProfile from '../assets/home/white-on-white-square.jpg';
import CF from '../assets/card-images/CF-featured-box.jpg';
import GM from '../assets/card-images/GenderMag-featured-box.jpg';
import Robotics from '../assets/card-images/Robotics-featured-box.jpg';
import Car from '../assets/card-images/Car.jpg';
import Office from '../assets/home/one-on-one.jpg';


function Home(props) {
    return (
        <section id="home">
            <Landing image={RiceSkyline} title="Sai Raja" titleStyle={true} subtitle="Rice Student, Explainable AI Researcher, Leader." arrow="true"/>
            <div id="about"></div>
            <VariableSpacer />
            <CenterText>
                <img id="circle-img" src={WhiteProfile} alt="profile" />
                <h3 className="regular-text">I am currently a student at Rice University studying</h3>
                <h2 className="middle-text">Computer Science, AI, Business, and Entrepreneurship.</h2>
                <h3 className="regular-text">For more information about my educational focus, take a look at the <HashLink to="/about" onClick={() => window.scrollTo(0, 0)} className='regular-link'>about page</HashLink>. Get a taste of my goals, passions, and interests by delving into my favorite <HashLink to="/work" onClick={() => window.scrollTo(0, 0)} className='regular-link'>projects and experiences</HashLink> below. Want to know more? Let's <HashLink to="/#contact" className='regular-link'>get in touch</HashLink>!</h3>
            </CenterText>
            <VariableSpacer />
            <div className='scroll-arrow'>───→</div>
            <div className="center-container">
                <div className="carousel" id="home-carousel">
                    <HashLink to="/work#XAI" className="card-link"><Card cardImg={Car} cardText="Explainable AI Research →" cardDes="Co-authored international conference and journal papers about improving human-AI interaction."/></HashLink>
                    <HashLink to="/work#GM" className="card-link"><Card cardImg={GM} cardText="GenderMag Project →" cardDes="Enhanced a web extension that targets inequitable software experiences."/></HashLink>
                    <HashLink to="/work#SR" className="card-link"><Card cardImg={Robotics} cardText="Robotics Leadership →" cardDes="Helped team win a design award and led a 6+ month organization-wide restrucuting project."/></HashLink>
                    <HashLink to="/work#CF" className="card-link"><Card cardImg={CF} cardText="Charge Forward Inc. →" cardDes="Helped refurbish and donate $75,000 of technology to 150+ families in need. Kept 1.5+ tons of technology out of landfills."/></HashLink>
                </div>
            </div>
            <VariableSpacer />
            <div id="contact"></div>
            <Landing image={Office} title="Get In Touch" totalHeight="70vh" align="bottom" topSpace="100px" gradient="linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0))"/>
            <BorderBar>
                <a href="tel: +1-832-463-0191" className='white-link'>+1 (832) 463-0191</a>
                <p className='white-text'>Sai K. Raja</p>
                <a href="mailto: saikraja9@gmail.com" className='white-link' target="_blank" rel="noreferrer">saikraja9@gmail.com</a>
            </BorderBar>
            <VariableSpacer spaceHeight="100px" />
            <ContactForm />
            <VariableSpacer />
            <Footer />
        </section>
    );
}

export default Home;