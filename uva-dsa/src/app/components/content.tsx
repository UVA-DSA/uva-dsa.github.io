import styles from '../styles/content.module.css';
import Image from 'next/image';
import heroImage from '../../../public/images/uva-main-edited-v2-rounded.png';

const Content: React.FC = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroImageWrapper}>
        <Image
          src={heroImage}
          alt="UVA Campus"
          fill
          className={styles.heroImage}
          priority
        />
      </div>
      <div className={styles.heroText}>
        <p>Welcome to the Dependable Systems and Analytics research group at the University of Virginia. Our research focuses on developing safe, dependable systems for medical applications ....</p>
      </div>
    </section>
  );
};

export default Content;
