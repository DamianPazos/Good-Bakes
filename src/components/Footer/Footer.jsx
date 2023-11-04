import LogoDark from "../LogoDark/LogoDark";
import facebookImage from '../../images/facebook.png';
import instagramImage from '../../images/instagram.png';
import tikTokImage from '../../images/tik-tok.png';
import whatsappImage from '../../images/whatsapp.png';
import { FooterContainer, FooterContent, FooterWrap } from "./Footer.elements";



const Footer = () => {

    return (
<FooterContainer>
    <FooterWrap>
        <FooterContent>
                        <div className="footer-logo">
                            <LogoDark/>
                        </div>
                        <div className="footer-social">
                            <h3>Seguime</h3>
                            <ul>
                                <li><a href="https://www.facebook.com/GoodBakesPasteleria" target="_blank" rel="noreferrer"><img src={facebookImage} alt="F"/></a></li>
                                <li><a href="https://www.instagram.com/good.bakes____/" target="_blank" rel="noreferrer"><img src={instagramImage} alt="F"/></a></li>
                                <li><a href="https://www.tiktok.com/@daniiozzia" target="_blank" rel="noreferrer"><img src={tikTokImage} alt="F"/></a></li>
                                <li><a href="https://api.whatsapp.com/send?phone=5491166939734&text=Hola!%20Quiero%20encargarte%20..." target="_blank" rel="noreferrer"><img src={whatsappImage} alt="F"/></a></li>
                            </ul>
                        </div>
                        <div className="footer-info">
                            <h3>Contacto</h3>
                            <p>danielaiozzia.gb@gmail.com</p>
                            <p>+54-011-6693-9734</p>
                            <p>Ranelagh, Argentina</p>
                        </div>
        </FooterContent>
                    <div className="footer-copyright">
                        <p>&copy; 2023 Good Bakes. Todos los derechos reservados.</p>
                    </div>
    </FooterWrap>
</FooterContainer>
    );

};

export default Footer;