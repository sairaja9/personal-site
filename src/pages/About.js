import { HashLink } from 'react-router-hash-link';

import SplitLanding from "../components/SplitLanding";
import BackgroundText from "../components/BackgroundText";
import Footer from '../components/Footer';

import Portrait from '../assets/about/white-on-white-cropped.jpg';

function About(props) {
    return (
        <section>
            <SplitLanding title="Sai K Raja" subtitle="About Me" image={Portrait} titleClass="title-resize" subtitleClass="subtitle-resize" totalHeight="min-content" arrow="true"/>
            <BackgroundText>
                <div>
                    <p>Welcome! I'm a student at Rice University (class of 2026) double majoring in Computer Science and Business. Within the field of Computer Science, my special interest is in Artificial Intelligence. In Business, I plan to pursue a Management Concentration and an Entrepreneurship minor. My future career interest lies in the intersection of business, technology, and society. To learn more about my background in AI, leadership, and community service take a look at my <HashLink to="/personal-site/work" className='about-link' onClick={() => window.scrollTo(0, 0)}>experiences</HashLink>.</p>
                </div>
            </BackgroundText>
            <Footer />
        </section>
    );
}

export default About;