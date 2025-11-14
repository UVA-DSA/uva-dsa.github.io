// styles moved to global stylesheet (globals.css)
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
    name: 'Zhaomeng',
    role: 'Ph.D. Student',
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

      <div className="separator" />

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

      <div className="separator" />

      {/* Undergraduate Students Section */}
      <div className="section">
        <h2 className="sectionTitle">Undergraduate Researchers</h2>
        <div className="list">
          {undergraduateStudents.map((member, index) => (
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
