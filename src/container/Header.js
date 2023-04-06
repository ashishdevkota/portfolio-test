import logo from "./assets/logo.png";

let Header = () => {
  return (
    <header id="top" class="header">
      <div class="left">
        <a class="logo" href="/index.html">
          <img id="logo" src={logo} alt="logo" />
        </a>
      </div>
      <div id="hamburger">
        <span class="hamburger"></span>
      </div>

      <div class="right">
        <div class="menu-list">
          <a href="/about.html"> About Me </a>
          <a href="/contact.html"> Contact </a>
        </div>

        <div class="social-link">
          <a id="mail" href="mailto:ashishdevkota03@gmail.com">
            ashishdevkota03@gmail.com
          </a>
          <a class="icons" href="#">
            <i class="fa-brands fa-twitter fa-xl"></i>
          </a>
          <a class="icons" href="#">
            <i class="fa-brands fa-linkedin fa-xl"></i>
          </a>
          <a class="icons" href="#">
            <i class="fa-brands fa-github fa-xl"></i>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
