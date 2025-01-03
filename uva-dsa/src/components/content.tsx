import styles from '../styles/content.module.css';
import Image from 'next/image';
import heroImage from '../../public/images/uva-main-edited-v2-rounded.png';

import News from './news';

const newsItems = [
  {
    title: 'UVA-DSA Secures Major Research Grant',
    description: 'Our group recently secured a ....',
    date: 'January 2, 2025',
  },
  {
    title: 'New Publication in IEEE Transactions',
    description: 'Our latest research on ....',
    date: 'December 15, 2024',
  },
  {
    title: 'Workshop on Dependable AI Systems',
    description: 'Join us for our upcoming workshop on AI safety and dependability at UVA.',
    date: 'November 20, 2024',
  },
];


const Content: React.FC = () => {

    // Sort news items by date in descending order
    const sortedNewsItems = [...newsItems].sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
  
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
        <div className={styles.heroTextWelcome}>
        Welcome to the Dependable Systems and Analytics research group at the University of Virginia. Our research focuses on developing safe, dependable systems for medical applications ....
        </div>
      </div>
      
      <div className={styles.separator} />

      <News />


    </section>
  );
};

export default Content;
