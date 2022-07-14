function Footer() {
  return (
    <footer className="page-footer light-blue darken-4">
      <div className="footer-copyright">
        <div className="container">
          {`© ${new Date().getFullYear()}. Ruslan Gaziev`}
          <a className="grey-text text-lighten-4 right" href="https://github.com/gazievri/shop-project">
            Repo
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
