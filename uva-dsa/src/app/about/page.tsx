// styles moved to global stylesheet (globals.css)

export default function About() {
  return (
    <section className="aboutSection">
      <h1 className="sectionTitle">About Us</h1>
      <p className="intro">
      Our research focuses on design and validation of Resilient Cyber-Physical Systems (CPS) with applications to medical devices, surgical robots, and autonomous systems. We take a multidisciplinary approach to safety and security assurance in CPS by leveraging techniques from dependable computing and fault-tolerance, machine learning, and real-time embedded systems. We develop data-driven methods, realistic testbeds, and simulation platforms for analysis of safety and security incidents, system resilience assessment against accidental and malicious faults, and runtime monitoring for detection and mitigation of adverse events.
      </p>

      <div className="section">
        <h2 className="sectionTitle">Our Projects</h2>
        <p className="sectionText">
          Our projects focuses on building dependable systems. We are particularly interested in the following applications:
        </p>
        <ul className="researchTopics">
          <li>Resilient Cyber-Physical Systems for Robotic Surgery</li>
          <li>Cognitive Assistant Systems for Emergency Response</li>
          <li>Resilience-by-Construction Design of Medical Devices</li>
          <li>Dependable and Secure Artificial Intelligence</li>

        </ul>
        <p className="sectionText">
        Please check <a href="/projects" className="link"> Projects </a> page for more information about our projects.
        </p>
      </div>

      <div className="section">
        <h2 className="sectionTitle">Our Team</h2>
        <p className="sectionText">
          Our team is composed of graduate students, undergraduate students, and faculty members. Please check <a href="/people" className="link"> People </a> page for more information about members. We are always looking for new members to join our team. If you are interested in joining us, please{' '}
          <a href="mailto:ha4d@virginia.edu" className="link">contact us</a>.
        </p>
      </div>
    </section>
  );
}
