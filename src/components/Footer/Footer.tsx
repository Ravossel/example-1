import "./css/style.css";
import mail from "../../img/mail.svg";
import tel from "../../img/tel.svg";


export const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="contacts">
          <a className="contacts-link" href="mailto:info@dmitry@gmail.com">
            <img className="contacts-icon" src={mail} alt="" />
            info@dmitry@gmail.com
          </a>
          <a className="contacts-link" href="tel:+37125521551">
            <img className="contacts-icon" src={tel} alt="" />
            +371 255-21-551
          </a>
        </div>
      </div>
    </div>
  );
};
