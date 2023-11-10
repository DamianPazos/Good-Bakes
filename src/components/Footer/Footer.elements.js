import styled from "styled-components";

export const FooterContainer = styled.div `
    height: 220px;
    width: 100%;
    background-color: #A46E7E;

    @media screen and (max-width: 600px) {
        height: 100%;
    }
`;

export const FooterWrap = styled.div `
    margin: auto;
    width: 100%;
    max-width: 1300px;
    height: 100%;
    align-items: center;
`;

export const FooterContent = styled.div `
    justify-content: space-between;
    display: flex;

    @media screen and (max-width: 600px) {
        flex-direction: column;
    }
`;

export const FooterLogo = styled.div `
    width: 200px;
    height: 200px;

    @media screen and (max-width: 600px) {
        margin-left: auto;
        margin-right: auto;
    }
`;

export const FooterSocial = styled.div `
    font-size: 1.2rem;
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    list-style: none;
    padding: 0;
    color: #450c26;

    @media screen and (max-width: 600px) {
        margin-top: 0px;
    }
`;

export const FooterSocialTitle = styled.h3 `
    margin-top: 40px;
    margin-bottom: 15px;

    @media screen and (max-width: 600px) {
        margin-top: 0;
        text-align: center;
    }
`;

export const FooterSocialContent = styled.div`
    margin-right: 10px;
    display: grid;
    list-style-type: none;
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
    align-items: center;
    justify-content: center;
    padding: 0;
    margin-right: 0;

    @media screen and (max-width: 600px){
        width: 200px;
        margin: auto;
    }
`;

export const FooterSocialLinks = styled.a `
    display: inline-block;
    width: 30px;
    height: 30px;
    margin: auto;
    align-self: center;
    line-height: 50px;
    text-decoration: none;
`;

export const FooterSocialIcon = styled.img `
    width: 100%;
    height: 100%;
`;

export const FooterInfo = styled.div `
    font-size: 1.0rem;
    font-family: 'Roboto', sans-serif;
    padding: 0;
    color: #450c26;

    @media screen and (max-width: 600px) {
        margin-top: 10px;
    }
`;

export const FooterInfoTitle = styled.h3 `
    margin-top: 40px;
    margin-bottom: 12px;

    @media screen and (max-width: 600px) {
        text-align: center;
        margin-top: 10px;
    }
`;

export const FooterInfoParagraph = styled.p `
    margin-top: 10px;
    padding-right: 5px;
    text-align: center;
`;

export const FooterCopyright = styled.div `
    
    @media screen and (max-width: 600px) {
        margin-top: 10px;
    }
`;

export const FooterCopyrightText = styled.p `
    text-align: center;
`;
