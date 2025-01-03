import styles from '../../styles/people.module.css';
import Image from 'next/image';

// Separate lists for each type of member
const PIs = [
  {
    name: 'Homa Alemzadeh',
    role: 'Principal Investigator',
    image: '/images/people/homa-headshot.jpg',
    website: 'https://homa-alem.github.io/',
  },
];

const graduateStudents = [
  {
    name: 'Keshara Weerasinghe',
    role: 'Graduate Student',
    image: '/images/people/keshara-headshot.jpg',
    website: 'https://keshara2032.github.io/',
  },
  {
    name: 'Xueren Ge',
    role: 'Graduate Student',
    image: '/images/people/xueren-headshot.jpg',
    website: 'https://xueren-ge.github.io/',
  },
  {
    name: 'Hamid Roodabeh',
    role: 'Graduate Student',
    image: '/images/people/hamid-headshot.jpg',
    website: 'https://hamidrezaro.github.io/',
  },
  {
    name: 'Zoey Li',
    role: 'Graduate Student',
    image: '/images/people/zoey-headshot.jpg',
    website: 'https://www.zongyuli.net/',

  },
  {
    name: 'Zhaomeng',
    role: 'Graduate Student',
    image: '/images/people/zhaomeng-headshot.jpg',
    website: 'https://zhaomeng-zhang.github.io/',

  },
];

const undergraduateStudents = [
  {
    name: 'Tessa Montano',
    role: 'Undergraduate Student',
    image: '/images/people/tessa-headshot.jpg',
    website: 'https://github.com/Tessa270',
  },
];

export default function People() {
  return (
    <section className={styles.peopleSection}>
      <h1 className={styles.title}>Our Team</h1>
      <p className={styles.subtitle}>
        Meet the researchers and contributors driving UVA-DSA forward.
      </p>

      {/* Principal Investigators Section */}
      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Principal Investigators</h2>
        <div className={styles.list}>
          {PIs.map((member, index) => (
                        <a
                        key={index}
                        href={member.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.cardLink}
                      >
            
            <div key={index} className={styles.card}>
              <div className={styles.imageContainer}>
                <Image
                  src={member.image}
                  alt={member.name}
                  width={300}
                  height={200}
                  className={styles.image}
                  objectFit="cover"
                />
              </div>
              <h2 className={styles.name}>{member.name}</h2>
              <h3 className={styles.role}>{member.role}</h3>
            </div>
            </a>
          ))}
        </div>
      </div>

      <div className={styles.separator} />

      {/* Graduate Students Section */}
      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Graduate Students</h2>
        <div className={styles.list}>
          {graduateStudents.map((member, index) => (
              <a
              key={index}
              href={member.website}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.cardLink}
            >
            <div key={index} className={styles.card}>
              <div className={styles.imageContainer}>
                <Image
                  src={member.image}
                  alt={member.name}
                  width={300}
                  height={200}
                  className={styles.image}
                  objectFit="cover"
                />
              </div>
              <h2 className={styles.name}>{member.name}</h2>
              <h3 className={styles.role}>{member.role}</h3>
            </div>
            </a>
          ))}
        </div>
      </div>

      <div className={styles.separator} />

      {/* Undergraduate Students Section */}
      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Undergraduate Students</h2>
        <div className={styles.list}>
          {undergraduateStudents.map((member, index) => (
              <a
              key={index}
              href={member.website}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.cardLink}
            >
            <div key={index} className={styles.card}>
              <div className={styles.imageContainer}>
                <Image
                  src={member.image}
                  alt={member.name}
                  width={300}
                  height={200}
                  className={styles.image}
                  objectFit="cover"
                />
              </div>
              <h2 className={styles.name}>{member.name}</h2>
              <h3 className={styles.role}>{member.role}</h3>
            </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
