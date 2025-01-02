import styles from '../styles/footer.module.css';
import Image from 'next/image';
import uvaLogo from '../../../public/images/uva-dsa-logo.png';
import { FaGithub, FaEnvelope } from 'react-icons/fa'; // Import GitHub icon

const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerLeft}>
                <Image src={uvaLogo} alt="UVA Logo" width={80} height={80} />
            </div>
            <div className={styles.footerCenter}>
                <p>
                    Dependable Systems and Analytics Group <br />
                    University of Virginia <br />
                    Olsson Hall, Charlottesville, VA 22903, USA
                </p>
            </div>
            <div className={styles.footerRight}>
                <a
                    href="https://github.com/uva-dsa"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub"
                    className={styles.githubLink}
                >
                    <FaGithub size={20} className={styles.githubIcon} />
                    <span>UVA-DSA</span>
                </a>

                <a
                    href="mailto:ha4d@virginia.edu"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Email"
                    className={styles.iconLink}
                >
                    <FaEnvelope size={20} className={styles.icon} />
                    <span>ha4d@virginia.edu</span>
                </a>
            </div>
        </footer>
    );
};

export default Footer;
