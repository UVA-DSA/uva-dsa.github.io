// styles moved to global stylesheet (globals.css)
import type { FC } from 'react';


const newsItems = [
  {
    title: 'UVA-DSA has two papers accepted to AAAI-2026',
    description: 'EMSQA in the Main Oral Track and EgoEMS in the Social Impact Track',
    links: [
      {
        title: 'EMSQA Project Page',
        url: 'https://uva-dsa.github.io/EMSQA/',
      },
      {
        title: 'EgoEMS Project Page',
        url: 'https://uva-dsa.github.io/EgoEMS/',
      },
    ],
    date: 'November 7, 2025',
  },
  {
    title: 'Keshara Wins Poster Award at 2025 UVA SEAS AI/ML Resource Fair',
    description: 'CognitiveEMS: Real-Time Multimodal Cognitive Assistant for Emergency Medical Services',
    links: [],
    date: 'October 15, 2025',
  },
];



const News: FC = () => {

    // Sort news items by date in descending order
    const sortedNewsItems = [...newsItems].sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
  
    return (

    <section className="hero">
              {/* News Section */}
      <div className="newsSection">
      <h2 className="newsTitle">Latest News</h2>
      <div className="newsStack">
        {sortedNewsItems.map((news, index) => (
          <div key={index} className="newsCard">
            <div className="newsCardBody">
              <div className="newsCardDetails">
                <h3 className="newsItemTitle">{news.title}</h3>
                <p className="newsItemDate">
                  {new Date(news.date).toLocaleDateString()}
                </p>
                <p className="newsItemDescription">{news.description}</p>
              </div>
              {news.links.length > 0 && (
                <div className="newsLinksColumn">
                  {news.links.map((link, linkIndex) => (
                    <p key={linkIndex} className="newsItemLink">
                      <span className="newsItemLinkLabel">Link:&nbsp;</span>
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {link.title}
                      </a>
                    </p>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>

  </section>
);
};

export default News;
