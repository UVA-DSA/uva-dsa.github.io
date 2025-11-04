import styles from '../styles/news.module.css';
import Image from 'next/image';
import heroImage from '../../public/images/uva-main-edited-v2-rounded.png';


const newsItems = [
  {
    title: 'UVA-DSA Secures Major Research Grant',
    description: 'Our group recently secured a research grant from a major funding agency to study ....',
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



const News: React.FC = () => {

    // Sort news items by date in descending order
    const sortedNewsItems = [...newsItems].sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
  
    return (

    <section className={styles.hero}>
              {/* News Section */}
      <div className={styles.newsSection}>
      <h2 className={styles.newsTitle}>Latest News</h2>
      <div className={styles.newsStack}>
        {sortedNewsItems.map((news, index) => (
          <div key={index} className={styles.newsCard}>
            <h3 className={styles.newsItemTitle}>{news.title}</h3>
            <p className={styles.newsItemDate}>{new Date(news.date).toLocaleDateString()}</p>
            <p className={styles.newsItemDescription}>{news.description}</p>
          </div>
        ))}
      </div>
    </div>

  </section>
);
};

export default News;