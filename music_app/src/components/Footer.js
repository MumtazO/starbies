import './footer.css'
import { Link } from "react-router-dom";
function Footer(){
    
    return(      
<>
<footer className="footer">
    <ul>
        <li>
        <Link to="/about">About</Link>
        </li>
        <li>
        <Link to="/privacypolicy">Privacy Policy</Link>
        </li>
        <li>© 2022 Starbies</li>
    </ul>
</footer>

 </>

       
    )
}

export default Footer;
