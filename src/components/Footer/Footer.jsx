import LogoDark from "../LogoDark/LogoDark";
import facebookImage from '../../images/facebook.png';
import instagramImage from '../../images/instagram.png';
import tikTokImage from '../../images/tik-tok.png';
import whatsappImage from '../../images/whatsapp.png';
import { 
    FooterContainer,
    FooterContent, 
    FooterCopyright, 
    FooterCopyrightText, 
    FooterInfo, 
    FooterInfoParagraph, 
    FooterInfoTitle, 
    FooterLogo, 
    FooterSocial, 
    FooterSocialContent, 
    FooterSocialIcon, 
    FooterSocialLinks, 
    FooterSocialTitle, 
    FooterWrap } from "./Footer.elements";



const Footer = () => {

    return (
        <FooterContainer>
            <FooterWrap>
                <FooterContent>
                    <FooterLogo>
                        <LogoDark />
                    </FooterLogo>
                    <FooterSocial>
                        <FooterSocialTitle>
                            Seguime
                        </FooterSocialTitle>
                        <FooterSocialContent>
                            <FooterSocialLinks href="https://www.facebook.com/GoodBakesPasteleria" target="_blank" rel="noreferrer">
                                <FooterSocialIcon src={facebookImage} alt="F" />
                            </FooterSocialLinks>
                            <FooterSocialLinks href="https://www.instagram.com/good.bakes____/" target="_blank" rel="noreferrer">
                                <FooterSocialIcon src={instagramImage} alt="F" />
                            </FooterSocialLinks>
                            <FooterSocialLinks href="https://www.tiktok.com/@daniiozzia" target="_blank" rel="noreferrer">
                                <FooterSocialIcon src={tikTokImage} alt="F" />
                            </FooterSocialLinks>
                            <FooterSocialLinks href="https://api.whatsapp.com/send?phone=5491166939734&text=Hola!%20Quiero%20encargarte%20..." target="_blank" rel="noreferrer">
                                <FooterSocialIcon src={whatsappImage} alt="F" />
                            </FooterSocialLinks>
                        </FooterSocialContent>
                    </FooterSocial>
                    <FooterInfo>
                        <FooterInfoTitle>
                            Contacto
                        </FooterInfoTitle>
                        <FooterInfoParagraph>
                            danielaiozzia.gb@gmail.com
                        </FooterInfoParagraph>
                        <FooterInfoParagraph>
                            +54-011-6693-9734
                        </FooterInfoParagraph>
                        <FooterInfoParagraph>
                            Ranelagh, Argentina
                        </FooterInfoParagraph>
                    </FooterInfo>
                </FooterContent>
                <FooterCopyright>
                    <FooterCopyrightText>
                    &copy; 2023 Good Bakes. Todos los derechos reservados
                    </FooterCopyrightText>
                </FooterCopyright>
            </FooterWrap>
        </FooterContainer>
    );

};

export default Footer;