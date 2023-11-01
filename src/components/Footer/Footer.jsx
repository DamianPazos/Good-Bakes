import LogoDark from "../LogoDark/LogoDark";
import "./Footer.css";
import facebookImage from '../../images/facebook.png';
import instagramImage from '../../images/instagram.png';
import tikTokImage from '../../images/tik-tok.png';
import whatsappImage from '../../images/whatsapp.png';



const Footer = () => {

    return (
        <div className="footer">
            <footer>
                <div className="container">
                    <div className="footer-content">
                        <div className="footer-logo">
                            <LogoDark/>
                        </div>
                        <div className="footer-social">
                            <h3>Seguime</h3>
                            <ul>
                                <li><a href="https://www.facebook.com/GoodBakesPasteleria" target="_blank"><img src={facebookImage} alt="F"/></a></li>
                                <li><a href="https://www.instagram.com/good.bakes____/" target="_blank"><img src={instagramImage} alt="F"/></a></li>
                                <li><a href="https://www.tiktok.com/@daniiozzia" target="_blank"><img src={tikTokImage} alt="F"/></a></li>
                                <li><a href="https://api.whatsapp.com/send?phone=5491166939734&text=Hola!%20Quiero%20encargarte%20..." target="_blank"><img src={whatsappImage} alt="F"/></a></li>
                            </ul>
                        </div>
                        <div className="footer-info">
                            <h3>Contacto</h3>
                            <p>idanielaiozzia.gb@gmail.com</p>
                            <p>+54-011-6693-9734</p>
                            <p>Ranelagh, Argentina</p>
                        </div>
                    </div>
                    <div className="footer-copyright">
                        <p>&copy; 2023 Good Bakes. Todos los derechos reservados.</p>
                    </div>
                </div>
            </footer>
        </div>
    );

};

export default Footer;