import "./footer.css";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <>
      <div className="container">
        <h6>Contacto</h6>
        <footer className="navbar navbar-expand-lg ">
          <div className="container-fluid">
            <ul className="footer__contact">
              <li className="footer__contact__li">
                <Link
                  to={
                    "https://www.linkedin.com/in/santiago-dur%C3%A9-9699571ba/"
                  }
                  className="footer__contact--link"
                >
                  LinkedIn
                </Link>
              </li>
              <li className="footer__contact__li">
                <Link
                  className="footer__contact--link"
                  to="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSBnpsKJKhdkhdSLbpXgVDDLXlsCjFTMJlRMrQBbDwqbszSNTTglzPbGGQNrFKMSNNnmKfDr"
                >
                  E-mail
                </Link>
              </li>
              <li className="footer__contact__li">
                <Link
                  className="footer__contact--link"
                  to="https://www.instagram.com/_santidure/"
                >
                  Instagram
                </Link>
              </li>
              <li className="footer__contact__li">
                <Link
                  className="footer__contact--link"
                  to="https://wa.me/+543471521764"
                >
                  Whatsapp
                </Link>
              </li>
            </ul>
          </div>
        </footer>
        <section>
          <p className="copyright__p">© Copyright | Santiago Duré</p>
        </section>
      </div>
    </>
  );
}

export default Footer;
