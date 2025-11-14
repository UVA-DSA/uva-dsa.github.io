// styles moved to global stylesheet (globals.css)
import Link from 'next/link';
import type { FC } from 'react';

const Header: FC = () => {
  return (
    <header className="header">
	  <div></div>
      <nav>
        <ul className="navLinks">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/projects">Research</Link></li>
          <li><Link href="/publications">Publications</Link></li>
          <li><Link href="/people">People</Link></li>
          <li><Link href="/resources">Resources</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
