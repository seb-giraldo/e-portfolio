const Footer = () => {
  return (
    <footer>
      <div class="row footer__row">
        <a href="#" class="footer__anchor">
          <figure class="footer__logo">
            <img
              src="/logo.png"
              alt="Personal Logo"
              class="footer__logo--img"
            />
          </figure>
          <span class="footer__logo--popper">
            Top <i class="fas fa-arrow-up"></i>
          </span>
        </a>
        <div class="footer__social--list">
          <a
            href="https://github.com/seb-giraldo"
            class="footer__social--link link__hover-effect link__hover-effect--white"
            target="_blank"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/sebastian-giraldo-mejia/"
            class="footer__social--link link__hover-effect link__hover-effect--white"
            target="_blank"
          >
            LinkedIn
          </a>
          <a
            href="mailto:sebastiangiraldo96@gmail.com"
            class="footer__social--link link__hover-effect link__hover-effect--white"
            target="_blank"
          >
            Email
          </a>
          <a
            href="./assets/resume.pdf"
            class="footer__social--link link__hover-effect link__hover-effect--white"
            target="_blank"
            download
          >
            Resume
          </a>
        </div>
        <div class="footer__copyright">Copyright © 2026 Sebastian Giraldo</div>
      </div>
    </footer>
  );
};

export default Footer;
