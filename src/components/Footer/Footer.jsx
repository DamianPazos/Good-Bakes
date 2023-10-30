import LogoDark from "../LogoDark/LogoDark";
import "./Footer.css";


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
                                <li><a href="https://www.facebook.com/tupagina" target="_blank">Facebook</a></li>
                                <li><a href="https://twitter.com/tupagina" target="_blank">Twitter</a></li>
                                <li><a href="https://www.linkedin.com/company/tupagina" target="_blank">LinkedIn</a></li>
                            </ul>
                        </div>
                        <div className="footer-info">
                            <h3>Contacto</h3>
                            <p>Email: info@gmail.com</p>
                            <p>Teléfono: +54-011-6693-9734</p>
                            <p>Dirección: Ranelagh, Argentina</p>
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