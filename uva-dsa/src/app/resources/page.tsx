// styles moved to global stylesheet (globals.css)



const bannerNotice = (
  <p>
        We have Ph.D. positions available for Fall 2026. I am looking for highly motivated students with experience in computer systems dependability & security, robotics, and machine learning to join our team.
        If you are interested, send me an email along with your most recent CV and transcript.
  </p>
)

export default function Resources() {
  return (
    <section className="aboutSection">
      <h1 className="sectionTitle">Contact Us</h1>
      <p className="intro">
        To learn more about our research, please contact us at <a href="mailto:ha4d@virginia.edu" className="link"> ha4d@virginia.edu </a>.
        We are located in the <a href="https://engineering.virginia.edu/labs-groups/link-lab" target="_blank" className="link"> Link Lab </a> at the University of Virginia School of Engineering and Applied Science, Thornton Hall, 351 McCormick Rd, Charlottesville, VA 22904.
      </p>

      <div className="section">
        <h2 className="sectionTitle">Openings</h2>
        <p className="sectionText">
          We are always looking for new members to join our team.
        </p>

      {/* Banner notice */}
      <div className="banner">
        {bannerNotice}
      </div>

        {/* <h3 className="sectionSubtitle">Ph.D. Applicants</h3>
        <p className="sectionText">
        We have Ph.D. positions available for Fall 2026. I am looking for highly motivated students with experience in computer systems dependability & security, robotics, and machine learning to join our team.
        If you are interested, send me an email along with your most recent CV and transcript.
        </p> */}

      </div>


    </section>
  );
}
