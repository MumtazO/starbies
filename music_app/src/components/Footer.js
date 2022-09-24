import "./footer.css";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <>
      <footer className="footer">
        <p>
          <Link to="/about">About</Link>
        </p>
        <p>
          <Link to="/privacypolicy">Privacy Policy</Link>
        </p>
        <p>© 2022 Starbies</p>
      </footer>
    </>
  );
}

export default Footer;
