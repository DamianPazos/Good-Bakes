import styled from 'styled-components';

export const NavegationBarContainer = styled.div`
    width: 100%;
    height: 80px;
    position: sticky;
    top: 0;
    z-index: 99;
    background-color: #F7BECF;
`;

export const NavegationBarWrapper = styled.div`
    margin: auto;
    width: 100%;
    max-width: 1300px;
    height: 100%;
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

export const NavegationBarIconLogo = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    height: 80px;
    width: 80px;
`

export const NavegationBarMenu = styled.ul `
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 600px) {
        width: 100%;
        height: 60vh;
        position: absolute;
        top: 80px;
        left: ${({click}) => click ? 0 : "-100%"};
        flex-direction: column;
        transition: 0.5s all ease-in;
        background: linear-gradient(to bottom, #F7BECF, #ee7ea2);
    }
`;

export const NavegationBarMenuItem = styled.li `
    height: 100%;
    padding: 0.5rem 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    font-family: 'Roboto', sans-serif;
    font-weight: bold;

    @media screen and (max-width: 600px) {
        height: 70px;
    }
`;

export const NavegationBarMenuItemLink = styled.a `
    text-decoration: none;
    color: #000000;

    &:hover {
        color: #450c26;
        transition: all 0.5s ease;
    }
`;

export const NavegationBarIconHamburger = styled.div `
    display: none;

    @media screen and (max-width: 600px) {
        display: flex;
    }
`;
