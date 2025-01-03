import styles from '../../styles/about.module.css';

export default function About() {
  return (
    <section className={styles.aboutSection}>
      <h1 className={styles.aboutTitle}>About Us</h1>
      <p className={styles.intro}>
      Our research focuses on design and validation of Resilient Cyber-Physical Systems (CPS) with applications to medical devices, surgical robots, and autonomous systems. We take a multidisciplinary approach to safety and security assurance in CPS by leveraging techniques from dependable computing and fault-tolerance, machine learning, and real-time embedded systems. We develop data-driven methods, realistic testbeds, and simulation platforms for analysis of safety and security incidents, system resilience assessment against accidental and malicious faults, and runtime monitoring for detection and mitigation of adverse events.
      </p>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Our Projects</h2>
        <p className={styles.sectionText}>
          Our projects focuses on building dependable systems. We are particularly interested in the following applications:
        </p>
        <ul className={styles.researchTopics}>
          <li>Resilient Cyber-Physical Systems for Robotic Surgery</li>
          <li>Cognitive Assistant Systems for Emergency Response</li>
          <li>Resilience-by-Construction Design of Medical Devices</li>
          <li>Dependable and Secure Artificial Intelligence</li>

        </ul>
        <p className={styles.sectionText}>
        Please check <a href="/projects" className={styles.link}> Projects </a> page for more information about our projects.
        </p>
      </div>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Our Team</h2>
        <p className={styles.sectionText}>
          Our team is composed of graduate students, undergraduate students, and faculty members. Please check <a href="/people" className={styles.link}> People </a> page for more information about members. We are always looking for new members to join our team. If you are interested in joining us, please{' '}
          <a href="mailto:ha4d@virginia.edu" className={styles.link}>contact us</a>.
        </p>
      </div>
    </section>
  );
}
