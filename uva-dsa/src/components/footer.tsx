// styles moved to global stylesheet (globals.css)
import Image from 'next/image';
import uvaLogo from '../../public/images/uva-dsa-logo.png';
import { FaGithub, FaEnvelope } from 'react-icons/fa'; // Import GitHub icon

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="footerLeft">
                <Image src={uvaLogo} alt="UVA Logo" width={100} height={80} />
            </div>
            <div className="footerCenter">
                <p>
                    Dependable Systems and Analytics Group <br />
                    University of Virginia <br />
                    Olsson Hall, Charlottesville, VA 22903, USA
                </p>
            </div>
            <div className="footerRight">
                <a
                    href="https://github.com/uva-dsa"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub"
                    className="githubLink"
                >
                    <FaGithub size={20} className="githubIcon" />
                    <span>UVA-DSA</span>
                </a>

                <a
                    href="mailto:ha4d@virginia.edu"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Email"
                    className="iconLink"
                >
                    <FaEnvelope size={20} className="icon" />
                    <span>ha4d@virginia.edu</span>
                </a>
            </div>
        </footer>
    );
};

export default Footer;
