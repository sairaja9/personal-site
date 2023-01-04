import { HashLink } from 'react-router-hash-link';

import CenterText from "../components/CenterText";
import VariableSpacer from "../components/VariableSpacer";
import Landing from "../components/Landing";
import Banner from "../components/Banner";
import SubNav from '../components/SubNav';
import Footer from '../components/Footer';
import SplitLanding from "../components/SplitLanding";

import CF from '../assets/card-images/CF-featured-box.jpg';
import GM from '../assets/card-images/GenderMag-featured-box.jpg';
import Robotics from '../assets/card-images/Robotics-featured-box.jpg';
import Car from '../assets/card-images/Car.jpg';

import EngineeringNotebook from '../documents/engineering-notebook-2019.pdf';


function Work(props) {
    return (
        <section id="work">
            <SubNav>
                <HashLink to="/work#XAI" className="card-link">
                    <div className="sub-nav-item">
                        <p className='sub-nav-bold'>XAI</p>
                        <p className='sub-nav-light'>Explainable AI</p>
                    </div>
                </HashLink>
                <HashLink to="/work#GM" className="card-link">
                    <div className="sub-nav-item">
                        <p className='sub-nav-bold'>GM</p>
                        <p className='sub-nav-light'>GenderMag</p>
                    </div>
                </HashLink>
                <HashLink to="/work#SR" className="card-link">
                    <div className="sub-nav-item">
                        <p className='sub-nav-bold'>CHS</p>
                        <p className='sub-nav-light'>Spartan Robotics</p>
                    </div>
                </HashLink>
                <HashLink to="/work#CF" className="card-link">
                    <div className="sub-nav-item">
                        <p className='sub-nav-bold'>CF</p>
                        <p className='sub-nav-light'>Charge Forward</p>
                    </div>
                </HashLink>
            </SubNav>
            <HashLink to="/work" className="card-link"><button className='back-to-top' onClick={() => window.scrollTo(0, 0)}>&#8613;</button></HashLink>
            <VariableSpacer />
            <CenterText>
                <h1 className="page-title">Featured Experiences</h1>
                <h2 className='page-subtitle'><HashLink to="/work#XAI" className='blue-u'>World class research</HashLink>, <HashLink to="/work#SR" className='purple-u'>organizational leadership</HashLink>, <HashLink to="/work#CF" className='green-u'>award winning community service</HashLink>.</h2>
            </CenterText>
            <VariableSpacer />
            <div id="XAI"></div>
            <Landing image={Car} title="Explainable AI" subtitle="Bridging the Gap between AI and Humans" align="top" topSpace="90px" textColor="#ffffff" titleType="mini-landing-title" subtitleType="mini-landing-subtitle" gradient="linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0))" bgPosY="top" />
            <Banner bannerTitle="What is XAI?" buttonLink="https://today.oregonstate.edu/archives/2017/jun/research-aims-make-artificial-intelligence-explain-itself" buttonText="XAI @ OSU">
                <p>From healthcare to music, Artificial Intelligence (AI) applications are becoming ubiquitous across industries. The result – a plethora of unanswered questions and ethical issues. For instance, imagine yourself as a lawyer. You wonder, why did my client’s self-driving car cause an accident? What led the AI system to make an incorrect decision? Moreover, who is to blame? These are the exact types of questions the field of Explainable Artificial Intelligence (XAI) was designed to answer. The end goal of XAI is to bridge the gap between AI and humans. AI systems that can explain themselves could be significantly more impactful and ethical.</p>
            </Banner>
            <VariableSpacer spaceHeight="50px" />
            <CenterText>
                <h3 className="banner-title spaced-text">My XAI Journey</h3>
                <p className="spaced-text">At the end of ninth grade, I worked at Oregon State University’s (OSU) XAI lab as a part of my Human-Computer Interaction (HCI) internship. That summer, I helped design a study that answered the question, “what information does a non-AI-expert need to evaluate an AI?” With just three more days to launch, we encountered a challenge – the study participants had no way to visualize AI decisions. With focused effort, I learned a new programming language (VBA for Excel) and wrote code that automatically converted AI decision data into graphs, all within two days. On the last remaining day, I worked with the team to integrate the decision graphs into our study. The study results helped us identify a method (After Action Review) that improved human understanding of AI decisions. At the end of the internship, I disseminated our research via poster and PowerPoint presentations at a state symposium. Later, our findings were published in <a href="https://scholar.google.com/citations?hl=en&user=tsAgeXoAAAAJ" target="_blank" rel="noreferrer">peer-reviewed international conferences and journals</a>.</p>
                <p className="spaced-text">This cutting-edge research experience strengthened my passion for innovation and leadership. It improved my work ethic and sharpened my ability to learn and adapt. Furthermore, I enjoyed tacking problems head-on and collaborating with the team to achieve our goals. The outcome – an uprising of an entrepreneurial mindset to create a positive societal impact.</p>
                <p className='spaced-text'>Based on my performance, I was hired as an (XAI lab) Special Project Research Assistant the following summer. Here, I mentored new interns on research study design, academic writing, and basic coding while analyzing data for a new study on human-AI interaction. I also developed a <a href="https://xai-project-papers.github.io/index.html" target="_blank" rel="noreferrer">project website</a> for the lab using JavaScript, HTML, and CSS. The website stores a collection of papers published by OSU’s XAI and AI labs for use during international conference presentations.</p>
            </CenterText>
            <VariableSpacer />
            <div id="GM"></div>
            <SplitLanding bgColor="#cce0ff" textColor="#002e73" title="GenderMag" subtitle="Making Software More Inclusive" image={GM} />
            <Banner bannerTitle="The GenderMag Method" buttonLink="https://gendermag.org/gendermag.php" buttonText="Learn More">
                <p className="spaced-text">As an intern at Oregon State University's <a href="https://engineering.oregonstate.edu/EECS/research/software-engineering-and-human-computer-interaction" target="_blank" rel="noreferrer">Software Engineering and Human-Computer Interaction (HCI) Group</a>, I worked on GenderMag, a research project aimed at improving software inclusivity.</p>
                <p className="spaced-text">Often times, engineers design software by assuming the gender, background, and problem solving strategies of their end-users. As a result, applications often inadvertently discriminate against various groups. People have different backgrounds, skills, motivations, strategies, and attitudes towards technology. Hence, interfaces conducive to people with a specific problem-solving style disadvantage those with a different approach. The research-based GenderMag method is "a process and set of materials" used to identify and fix such gender-inclusivity pitfalls.</p>
            </Banner>
            <VariableSpacer spaceHeight="50px" />
            <CenterText>
                <h3 className="banner-title spaced-text">Building the GenderMag Recorder's Assistant</h3>
                <p className='spaced-text'>The <a href="https://github.com/GenderMagProject/GenderMagRecordersAssistant#readme" target="_blank" rel="noreferrer">GenderMag Recorder’s Assistant</a> is an online tool used to evaluate the inclusivity of websites. The web extension uses principles from the GenderMag method to identify inclusivity bugs within a website, and generate a report of them at the end of your session.</p>
                <p className="spaced-text">After teaching my co-interns the basics of coding in HTML, CSS, JavaScript, and Git, we worked as a team to enhance the GenderMag Recorder's Assistant. After contributing over 50 fixes and features to the tool, I began to understand the various ways in which software can block inclusivity and accessibility.</p>
            </CenterText>
            <VariableSpacer />
            <div id="SR"></div>
            <SplitLanding bgColor="#e0d4ff" textColor="#3a007d" title="Spartan Robotics" subtitle="Leading the Rebirth of an Innovative Community" image={Robotics} />
            <Banner bannerTitle="CHS Robotics Community" buttonLink="https://www.chsrobotics.org/" buttonText="FRC Team 997">
                <p className="spaced-text">In 2018, I joined the Corvallis High School Robotics Team as a rising freshman (Spartan Robotics – FRC Team 997). In the years prior, I developed an interest for robotic design and mechanical engineering through various camps, workshops, and building small robots at home. With the goal of expanding my mechanical design knowledge, I joined tho Spartan Robotics Design sub team. Throughout my freshman year, I grew accustomed to the collaborative and fun environment of CHS robotics. I acquired many new skills including prototyping, Computer Aided Design (CAD) in SolidWorks, drivetrain, gearbox, and manipulator design, machining and metalworking, and robot assembly. During my sophomore year, I began to design various subsystems on the robot such as drivetrain gearboxes, object manipulators, pneumatic lifting mechanisms and much more.</p>
            </Banner>
            <VariableSpacer spaceHeight="50px" />
            <CenterText>
                <h3 className='banner-title spaced-text'>Early Leadership</h3>
                <p className="spaced-text">During my sophomore year, our team advanced to the regional competition level. As an underclassmen, I was still unfamiliar with competition logistics and requirements. One night before the competition, our team was behind schedule. It came to my attention that nobody had completed the engineering notebook – a packet containing documentation of our strategic design decisions, prototypes, mechanical design revisions, and software/electrical integration. With the upperclassmen working on the final assembly of the robot, I decided to complete the entire document myself before it was due the next morning. After returning home from robotics club meeting that evening, I started working on the notebook. Eight hours and 45 pages later, the notebook was complete. I recall sending the final PDF version around 3:30 am to our design sub team leader. Towards the end of our competition the following night, our team won the Engineering Inspiration Award for our outstanding <a href={EngineeringNotebook} target="_blank" rel="noreferrer">Engineering Notebook</a>. As one of my earliest encounters with leadership, this successful experience led me to develop a strong passion for project leadership – a skill that would be handy in my later experiences at Spartan Robotics.</p>
                <VariableSpacer spaceHeight="50px" />
                <h3 className='banner-title spaced-text'>Restructuring Spartan Robotics</h3>
                <p className="spaced-text">In January 2020, the CHS Spartan Robotics program collapsed due to disagreements between the coaches and the seniors. One by one, sponsors, industry mentors, and volunteers cut ties with the team. The downward spiral continued until March. The principal suspended all robotics club activities. Soon, COVID-19 hit, resulting in school closure. It was a perfect storm. With no future in sight, 90% of the team quit.</p>
                <p className="spaced-text">Optimism ignited my drive to resurrect the robotics program. Rather than viewing the collapse as an end, I saw it as an opportunity to strengthen the club's inefficiencies, organizational failures, and other weaknesses. Additionally, the fun times, skills acquired, and team awards flashed through my mind – I felt a strong urge to give back. Over the summer and fall, a friend and I spent over 300 hours leading a small group of students to revive Spartan Robotics. We met with mentors, coaches, and the principal to build a consensus. Finally, we incorporated several inputs into a coach-approved handbook with policies, operating procedures, training modules, and a new leadership structure. In the fall, Spartan Robotics rose from the ashes like a Phoenix.</p>
                <p className="spaced-text">As I look to the future, I see the full potential of my aspirations with a newfound excitement towards collaboration and social service. I have my sights set on a career in the intersection of business and technology, with everything to look forward to – problems to solve, systems to revolutionize, teams to lead, and communities to help. A recurring thought flickers in the back of my mind as I scan for opportunities – what next?</p>
            </CenterText>
            <VariableSpacer />
            <div id="CF"></div>
            <SplitLanding bgColor="#cffff5" textColor="#00754e" title="Charge Forward" subtitle="Using the Machines of Yesterday to Build the Opportunities of Tomorrow" image={CF} />
            <Banner bannerTitle="The Charge Forward Goal">
                <p className="spaced-text">After working on the GenderMag Project at OSU's Software Engineering and HCI Group, I discovered the various ways in which software can block technological inclusivity and accessibility. This realization opened my eyes to broader technological inequities – I realized that unequal access to hardware can also block technological inclusivity, resulting in a digital divide. With the goal of improving access to technology, I helped my co-intern start Charge Forward – a nonprofit that refurbishes computer hardware for families in need.</p>
            </Banner>
            <VariableSpacer spaceHeight="50px" />
            <CenterText>
                <h3 className='banner-title spaced-text'>Creating an Equitable Future Through Technology</h3>
                <p className="spaced-text">As the Programming Manager, I assisted in web design and development, and helped our seven-member team repair $75,000 of technology for 150+ families while keeping 1.5+ tons of technology out of landfills. In 2021, Charge Forward received the Philomath Samaritan Award and a mayor's commendation.</p>
            </CenterText>
            <VariableSpacer />
            <Footer />
        </section>
    );
}

export default Work;