// styles moved to global stylesheet (globals.css)
import Image from 'next/image';
import Link from 'next/link';
import type { FC } from 'react';
import uvaLogo from '../../public/images/uva-dsa-logo.png';

const Header: FC = () => {
  return (
    <header className="header">
      <div className="logo">
        <Image src={uvaLogo} alt="UVA Logo" width={80} height={80} />
      </div>
      <nav>
        <ul className="navLinks">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/people">People</Link></li>
          <li><Link href="/projects">Projects</Link></li>
          <li><Link href="/publications">Publications</Link></li>
          <li><Link href="/resources">Resources</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
