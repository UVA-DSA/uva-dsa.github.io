import styles from '../../styles/resources.module.css';

export default function Resources() {
  return (
    <section className={styles.aboutSection}>
      <h1 className={styles.aboutTitle}>Contact Us</h1>
      <p className={styles.intro}>
        To learn more about our research, please contact us at <a href="mailto:ha4d@virginia.edu" className={styles.link}> ha4d@virginia.edu </a>.
        We are located in the <a href="https://engineering.virginia.edu/labs-groups/link-lab" target="_blank" className={styles.link}> Link Lab </a> at the University of Virginia School of Engineering and Applied Science, Thornton Hall, 351 McCormick Rd, Charlottesville, VA 22904.
      </p>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Openings</h2>
        <p className={styles.sectionText}>
          We are always looking for new members to join our team.
          

        </p>
        <h3 className={styles.sectionSubtitle}>Ph.D. Applicants</h3>
        <p className={styles.sectionText}>
        We have Ph.D. positions available for Fall 2024. I am looking for highly motivated students with experience in computer systems dependability & security, robotics, and machine learning to join our team.
        If you are interested, send me an email along with your most recent CV and transcript.
        </p>

      </div>


    </section>
  );
}
