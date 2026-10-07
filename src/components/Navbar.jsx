const Navbar = () => {
  return (
    <div className="nav__container">
      <nav>
        <div className="personal__logo">Sebastian Giraldo</div>
        <ul className="nav__link--list">
          <li className="nav__link">
            <a
              href="#languages"
              className="nav__link--anchor link__hover-effect link__hover-effect--black"
            >
              Languages
            </a>
          </li>
          <li className="nav__link">
            <a
              href="#projects"
              className="nav__link--anchor link__hover-effect link__hover-effect--black"
            >
              Projects
            </a>
          </li>
          <li className="nav__link">
            <a
              href="/Sebastian Giraldo Resume.pdf"
              target="_blank"
              class="nav__link--anchor link__hover-effect link__hover-effect--black"
            >
              Resume
            </a>
          </li>
          <li className="nav__link">
            <a
              href="mailto:sebastiangiraldo96@gmail.com"
              className="nav__link--anchor nav__link--anchor-primary"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
