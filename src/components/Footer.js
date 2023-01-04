import twIcon from '../assets/footer/twitter.png';
import igIcon from '../assets/footer/instagram.png';
import liIcon from '../assets/footer/linkedin.png';
import ghIcon from '../assets/footer/github.png';
import sfIcon from '../assets/footer/spotify.png';

function Footer(props) {
    return (
        <section className="footer">
            <div className="footer-content-container">
                <h1 className="footer-title">Sai K. Raja</h1>
                <p className="footer-social-title">Follow Me</p>
                <div className="footer-social-icon-container">
                    <a href="https://twitter.com/SaiKRaja9" target="_blank" rel="noreferrer"><img src={twIcon} alt="twitter-icon" className="footer-social-icon" /></a>
                    <a href="https://www.instagram.com/saikraja9/" target="_blank" rel="noreferrer"><img src={igIcon} alt="instagram-icon" className="footer-social-icon" /></a>
                    <a href="https://www.linkedin.com/in/sai-k-raja" target="_blank" rel="noreferrer"><img src={liIcon} alt="linkedin-icon" className="footer-social-icon" /></a>
                    <a href="https://github.com/sairaja9" target="_blank" rel="noreferrer"><img src={ghIcon} alt="github-icon" className="footer-social-icon" /></a>
                    <a href="https://open.spotify.com/user/saikraja9?si=e49bdfd120a7435e" target="_blank" rel="noreferrer"><img src={sfIcon} alt="spotify-icon" className="footer-social-icon" /></a>
                </div>
                <p>
                    <a className="icon-attribute" href="https://www.iconfinder.com/iconsets/black-white-social-media" target="_blank" rel="noreferrer">Social Media Icons</a>
                </p>
                <div className="site-information">Sai K. Raja Ⓒ 2022 | All Rights Reserved</div>
                <p>This site was built using React.js</p>
            </div>
        </section>
    );
}

export default Footer;