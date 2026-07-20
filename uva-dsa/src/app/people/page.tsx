// styles moved to global stylesheet (globals.css)
import Image from 'next/image';
import { dissertationByAuthor } from '@/data/dissertations';

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
    role: 'Ph.D. Student',
    image: '/images/people/keshara-headshot.jpg',
    website: 'https://keshara2032.github.io/',
  },
  {
    name: 'Xueren Ge',
    role: 'Ph.D. Student',
    image: '/images/people/xueren-headshot.jpg',
    website: 'https://xueren-ge.github.io/',
  },
  {
    name: 'Hamid Roodabeh',
    role: 'Ph.D. Student',
    image: '/images/people/hamid-headshot.jpg',
    website: 'https://hamidrezaro.github.io/',
  },
  {
    name: 'Zhaomeng Zhang',
    role: 'Ph.D. Student',
    image: '/images/people/zhaomeng-headshot.jpg',
    website: 'https://zhaomeng-zhang.github.io/',

  },
];

const undergraduateStudents = [
  {
    name: 'Aidan Liu',
    role: 'Undergraduate Student',
    image: '/images/people/aidan_liu.png',
    website: 'https://www.linkedin.com/in/aidan-liu-618126291/',
  },
  {
    name: 'Brian Xu',
    role: 'Undergraduate Student',
    image: '/images/people/brian_xu.jpeg',
    website: 'https://www.linkedin.com/in/brian-xu-135998288/',
  },
  {
    name: 'Farjan Ahmed',
    role: 'Undergraduate Student',
    image: '/images/people/farjan_ahmed.jpeg',
    website: 'https://www.linkedin.com/in/farjan-ahmed1461/',
  },
  {
    name: 'James Beck',
    role: 'Undergraduate Student',
    image: '/images/people/placeholder-headshot.svg',
    website: '',
  },
];

const alumni = [
  {
    group: 'Graduate Students and Postdocs',
    members: [
      { name: 'Zongyu (Zoey) Li', detail: 'Ph.D., 2025', destination: 'Meta', website: 'https://www.zongyuli.net' },
      { name: 'Xugui Zhou', detail: 'Ph.D., 2024', destination: 'Assistant Professor @ Louisiana State University', website: 'https://xugui-zhou.github.io/' },
      { name: 'Kay Hutchinson', detail: 'Ph.D., 2023', destination: '', website: 'https://kch4fk.github.io' },
      { name: 'Maryam Bagheri', detail: 'Postdoc, 2024', destination: 'NVIDIA', website: 'https://www.linkedin.com/in/maryam-bagheri-15623450/' },
      { name: 'Mustafa Hotaki', detail: 'M.Sc., 2020', destination: 'Counterpoint Consulting', website: 'https://www.linkedin.com/in/mustafa-hotaki/' },
      { name: 'Bulbul Ahmed', detail: 'M.Sc., 2019', destination: 'Ph.D. @ University of Florida', website: 'https://www.linkedin.com/in/bulbul-ahmed-9261188a/' },
      { name: 'Sile Shu', detail: 'M.Sc., 2019', destination: 'Amazon', website: 'https://www.linkedin.com/in/sile-shu-47758816b/' },
      { name: 'Mohammad Samin Yasar', detail: '', destination: 'Ph.D. @ UVA', website: 'https://www.linkedin.com/in/yasarsamin/' },
      { name: 'Yongming Qin', detail: '', destination: 'Ph.D. @ UVA', website: 'https://yongming-qin.github.io' },
    ],
  },
  {
    group: 'Undergraduate Students',
    members: [
      { name: 'Sebastian Condyles', detail: '', destination: '', website: '' },
      { name: 'Tessa Heick', detail: '', destination: '', website: '' },
      { name: 'Sahil Murtaza', detail: '', destination: '', website: '' },
      { name: 'Nitya Khamar', detail: '', destination: '', website: '' },
      { name: 'Alex Farmer', detail: '', destination: '', website: '' },
      { name: 'Maximilian Meer', detail: '', destination: '', website: '' },
      { name: 'Zachary Schrader', detail: '', destination: '', website: '' },
      { name: 'Abhishek Satpathy', detail: '', destination: '', website: '' },
      { name: 'Grant Xiao', detail: '', destination: '', website: '' },
      { name: 'Saahith Janapati', detail: '', destination: 'M.Sc. @ CMU', website: '' },
      { name: 'Shrisha Yapalparvi', detail: '', destination: '', website: '' },
      { name: 'Chloe Smith', detail: '', destination: 'Elder Research', website: '' },
      { name: 'Maxfield Kouzel', detail: '', destination: 'Yext', website: '' },
      { name: 'Casey Ladd', detail: '', destination: '', website: '' },
      { name: 'Sneha Iyer', detail: '', destination: 'M.Sc. @ Cornell', website: '' },
      { name: 'Haotian Ren', detail: '', destination: 'Amazon', website: '' },
      { name: 'Shruti Bala', detail: '', destination: '', website: '' },
      { name: 'Kathleen Yao', detail: '', destination: '', website: '' },
      { name: 'Joyce Park', detail: '', destination: '', website: '' },
      { name: 'Ian Reyes', detail: '', destination: 'IBM', website: '' },
      { name: 'Aishwarya Gavili', detail: '', destination: '', website: '' },
      { name: 'Sharon Lu', detail: '', destination: '', website: '' },
      { name: 'Rohan Chandra', detail: '', destination: '', website: '' },
      { name: 'Brandon Brnich', detail: '', destination: '', website: '' },
      { name: 'Sion Kim', detail: '', destination: 'Amazon', website: '' },
      { name: 'Devin Gardner', detail: '', destination: '', website: '' },
      { name: 'Asha Maran', detail: '', destination: '', website: '' },
      { name: 'Elizabeth Shelton', detail: '', destination: 'Alarm.com', website: '' },
      { name: 'Harshneet Bhatia', detail: '', destination: '', website: '' },
      { name: 'Erick Tian', detail: '', destination: '', website: '' },
      { name: 'Michael Tang', detail: '', destination: '', website: '' },
      { name: 'Gabriel Mallari', detail: '', destination: '', website: '' },
      { name: 'Ailec Wu', detail: '', destination: 'Ph.D. @ Caltech', website: '' },
      { name: 'Annie Chapman', detail: '', destination: '', website: '' },
      { name: 'Terry Tsai', detail: '', destination: '', website: '' },
      { name: 'JoonHyung Park', detail: '', destination: '', website: '' },
      { name: 'Hojun Jeong', detail: '', destination: '', website: '' },
      { name: 'Haonan (Neal) Chen', detail: '', destination: '', website: '' },
      { name: 'Elli Veer', detail: '', destination: '', website: '' },
      { name: 'Robert Pierce', detail: '', destination: 'M.Sc. @ UVA', website: '' },
    ],
  },
];

const groupGetTogethers = [
  {
    event: 'Group Lunch 2024',
    date: '02/15/2024',
    image: '/images/people/lunch_2024.jpg'
  },
  {
    event: 'Group Lunch 2023',
    date: '11/10/2023',
    image: '/images/people/lunch_2023.jpg'
  },
  {
    event: 'Tech Girls 2018',
    date: '10/20/2018',
    image: '/images/people/TechGirls_2018_1.jpg'
  }
]

export default function People() {
  return (
    <section className="peopleSection">

      {/* Principal Investigators Section */}
      <div className="section">
        <h2 className="sectionTitle">Principal Investigator</h2>
        <div className="list">
          {PIs.map((member, index) => (
                        <a
                        key={index}
                        href={member.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cardLink"
                      >
            
            <div key={index} className="card">
              <div className="imageContainer">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={300}
                  height={200}
                  className="image"
                  objectFit="cover"
                />
              </div>
              <h2 className="name">{member.name}</h2>
            </div>
            </a>
          ))}
        </div>
      </div>


      {/* Graduate Students Section */}
      <div className="section">
        <h2 className="sectionTitle">Graduate Students</h2>
        <div className="list">
          {graduateStudents.map((member, index) => (
              <a
              key={index}
              href={member.website}
              target="_blank"
              rel="noopener noreferrer"
              className="cardLink"
            >
            <div key={index} className="card">
              <div className="imageContainer">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={300}
                  height={200}
                  className="image"
                  objectFit="cover"
                />
              </div>
              <h2 className="name">{member.name}</h2>
              <h3 className="role">{member.role}</h3>
            </div>
            </a>
          ))}
        </div>
      </div>


      {/* Undergraduate Students Section */}
      <div className="section">
        <h2 className="sectionTitle">Undergraduate Students</h2>
        <div className="list">
          {undergraduateStudents.map((member, index) => {
            const card = (
              <div className="card">
                {member.image && (
                  <div className="imageContainer">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={300}
                      height={200}
                      className="image"
                      objectFit="cover"
                    />
                  </div>
                )}
                <h2 className="name">{member.name}</h2>
                <h3 className="role">{member.role}</h3>
              </div>
            );
            return member.website ? (
              <a
                key={index}
                href={member.website}
                target="_blank"
                rel="noopener noreferrer"
                className="cardLink"
              >
                {card}
              </a>
            ) : (
              <div key={index} className="cardLink">
                {card}
              </div>
            );
          })}
        </div>
      </div>
    
      {/* Alumni Section */}
      <div className="section">
        <h2 className="sectionTitle">Alumni</h2>
        {alumni.map((group, groupIndex) => (
          <div key={groupIndex} className="alumniGroup">
            <h3 className="alumniGroupTitle">{group.group}</h3>
            <ul className="alumniList">
              {group.members.map((member, memberIndex) => (
                <li key={memberIndex} className="alumniItem">
                  {member.website ? (
                    <a
                      className="alumniName alumniLink"
                      href={member.website}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {member.name}
                    </a>
                  ) : (
                    <span className="alumniName">{member.name}</span>
                  )}
                  {member.detail && (
                    <span className="alumniDetail">
                      {" ("}
                      {member.detail}
                      {dissertationByAuthor[member.name] && (
                        <>
                          {" - "}
                          <a
                            className="alumniLink"
                            href={dissertationByAuthor[member.name].url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Dissertation
                          </a>
                        </>
                      )}
                      {")"}
                    </span>
                  )}
                  {member.destination && (
                    <span className="alumniDest"> → {member.destination}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

    <div className="separator" />
      <div className="section">
        <div className="list">
          {groupGetTogethers.map((event, index) => (
            <div key={index} >
              <div  className="socialImageContainer">
                <Image
                  src={event.image}
                  alt={event.event}
                  fill
                  className="image"
                  objectFit="cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="separator" />
    </section>
  );
}
