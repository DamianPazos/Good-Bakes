import styled from 'styled-components';

export const HamburgerButtonContainer = styled.div`
.hamburger-container{
    width: 35px;
    height: 30px;
    margin: 10px 10px;
    position: relative;
    cursor: pointer;
    display: inline-block;
  }
  .hamburger-container span{
    background-color:#fff;
    position: absolute;
    border-radius: 2px;
    transition: .3s cubic-bezier(.8, .5, .2, 1.4);
    width:100%;
    height: 4px;
    transition-duration: 500ms
  }
  .hamburger-container span:nth-child(1){
    top:0px;
    left: 0px;
  }
  .hamburger-container span:nth-child(2){
    top:13px;
    left: 0px;
    opacity:1;
  }
  .hamburger-container span:nth-child(3){
    bottom:0px;
    left: 0px;
  }
  .hamburger-container:not(.open):hover span:nth-child(1){
    transform: rotate(-3deg) scaleY(1.1);
  }
  .hamburger-container:not(.open):hover span:nth-child(2){
    transform: rotate(3deg) scaleY(1.1);
  }
  .hamburger-container:not(.open):hover span:nth-child(3){
    transform: rotate(-4deg) scaleY(1.1);
  }
  .hamburger-container.open span:nth-child(1){
    transform: rotate(45deg);
    top: 13px;
  }
  .hamburger-container.open span:nth-child(2){
    opacity:0;
  }
  .hamburger-container.open span:nth-child(3){
    transform: rotate(-45deg);
    top: 13px;
  }
`;