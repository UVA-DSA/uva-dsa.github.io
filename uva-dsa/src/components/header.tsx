// styles moved to global stylesheet (globals.css)

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="logo">UVA DSA</div>
      <nav>
        <ul className="navLinks">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/people">People</a></li>
          <li><a href="/projects">Projects</a></li>
          <li><a href="/resources">Resources</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
