import "./css/style.css";
import code from "../../img/code.svg";

export const Header = () => {
  return (
      <header className="header">
        <div className="container">
          <div className="header-inner">
            <div className="header-brand">WEBDEVELOPER</div>
            <div className="header-logo">
              <img className="img" src={code} alt="logo" />
            </div>
            <nav className="header-nav">
              <a className="header-nav-link active" href="#">
                Home
              </a>
              <a className="header-nav-link" href="#">
                About me
              </a>
              <a className="header-nav-link" href="#">
                Contacts
              </a>
            </nav>
          </div>
        </div>
      </header>
  );
};
