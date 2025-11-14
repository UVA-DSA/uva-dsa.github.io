// styles moved to global stylesheet (globals.css)
import Image from 'next/image';
import type { FC } from 'react';
import heroImage from '../../public/images/uva-main-dsa.png';

import News from './news';


const Content: FC = () => {

    // News content is rendered by the News component
  
  return (
    <section className="hero">
      <div className="heroImageWrapper">
        <Image
          src={heroImage}
          alt="UVA Campus"
          className="heroImage"
          priority
        />
      </div>
      
      <div className="separator" />

      <News />
      
    </section>
  );
};

export default Content;
