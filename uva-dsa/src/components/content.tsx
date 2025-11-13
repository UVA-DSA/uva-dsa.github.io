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
          fill
          className="heroImage"
          priority
        />
      </div>
      <div className="heroText">
        <div className="heroTextWelcome">
        <p className="sectionText">
		Welcome to the UVA Dependable Systems & Analytics Group!
        </p>
        <p className="sectionText">   
        We design and validate resilient cyber-physical systems for medical devices, surgical robots, and autonomous platforms. Combining dependable computing, fault tolerance, machine learning, and real-time embedded systems, we build data-driven methods, testbeds, and simulators to analyze incidents, assess resilience to faults and attacks, and enable runtime monitoring and mitigation.
        </p>
        </div>
      </div>
      
      <div className="separator" />

      <News />


    </section>
  );
};

export default Content;
