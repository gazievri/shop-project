function Header() {
  return (
    <nav className="light-blue darken-4">
      <div className="nav-wrapper">
        <a href="#!" className="brand-logo">
          Your Best Shop
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <a
              href="https://github.com/gazievri/shop-project"
              target="_blank"
              rel="noreferrer"
            >
              Repo
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
