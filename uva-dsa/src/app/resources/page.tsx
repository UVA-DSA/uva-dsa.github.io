// styles moved to global stylesheet (globals.css)



const bannerNotice = (
  <p>
        We have Ph.D. positions available for Fall 2027. We are looking for highly motivated students with experience in computer systems dependability & security, robotics, and machine learning to join our team.
  </p>
)

const applicationLinkNotice = (
  <div className="applicationNotice">
    <p className="applicationNoticeText">
      If you are interested, you can submit your information through our application form.
    </p>
    <a
      href="https://forms.gle/eiKSBNb767ow3LxB8"
      target="_blank"
      rel="noopener noreferrer"
      className="applicationButton"
    >
      Open Application Form
    </a>
  </div>
)

export default function Resources() {
  return (
    <section className="aboutSection">
      <h1 className="sectionTitle">Contact Us</h1>
      <p className="intro">
        To learn more about our research, please contact us at <a href="mailto:ha4d@virginia.edu" className="link"> ha4d@virginia.edu </a>.<br />
        We are located in the <a href="https://engineering.virginia.edu/labs-groups/link-lab" target="_blank" className="link"> Link Lab </a> at the University of Virginia School of Engineering and Applied Science, Thornton Hall, 351 McCormick Rd, Charlottesville, VA 22904.
      </p>

      <div className="section">
        <h2 className="sectionTitle">Openings</h2>

        <div className="banner">
          {bannerNotice}
        </div>

        {applicationLinkNotice}

        {/* <h3 className="sectionSubtitle">Ph.D. Applicants</h3>
        <p className="sectionText">
        We have Ph.D. positions available for Fall 2026. We are looking for highly motivated students with experience in computer systems dependability & security, robotics, and machine learning to join our team.
        <br />If you are interested, send us an email along with your most recent CV and transcript.
        </p> */}

      </div>


    </section>
  );
}
