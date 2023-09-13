import "./css/style.css";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="contacts">
          <a className="contacts-link" href="mailto:info@dmitry@gmail.com">
            <img className="contacts-icon" src="../../img/mail.svg" alt="" />
            info@dmitry@gmail.com
          </a>
          <a className="contacts-link" href="tel:+37125521551">
            <img className="contacts-icon" src="../../img/tel.svg" alt="" />
            +371 255-21-551
          </a>
        </div>
      </div>
    </div>
  );
};
