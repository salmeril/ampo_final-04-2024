import styled from "styled-components";
import {Link as LinkS} from "react-scroll"
import {FaBars} from 'react-icons/fa'

//
export const Nav = styled.nav` 
background : white;
height : 80px;
display: flex;
width : 100%;
top : 0;
z-index : 10;
font-size : 1rem;
position : sticky;
justify-content : center;
align-items : center;
`

//contenedor del navbar 
export const NavContainer = styled.div`
    display: flex;
    justify-content : space-between;
    height : 80px;
    z-index : 1;
    width : 100%;
    padding : 0 24px;
    max-width : 1100px;

`
// export const NavbarLogo = styled.

export const NavMenu = styled.ul`
    display : flex;
    align-items : center;
    list-style : none;
    text-align : center;
    margin-right : -22px;

    @media screen and (max-width : 1024px){
        display : none;
    }
`

export const NavItem = styled.li`
    height : 80px;
`

export const NavLogoContainer = styled.div`

`

export const NavLogo = styled.img`
color : #fff;
justify-self : flex-start;
cursor : pointer;
display :flex;
align-items : center;
margin-left : 10px;
font-weight : bold;
text-decoration : none;
font-size: 2rem;

@media screen and (max-width : 1024px){
    margin-left : 5px;

 
}

`

export const NavLink = styled(LinkS)`
    color : #5A5A5A;
    display : flex;
    text-decoration : none;
    padding : 0 1rem;
    font-weight : 400;
    cursor: pointer;

    &:hover{
        color: black;
        transition : 0.3s;
    }

    @media screen and (max-width : 1200px){
        display : none;
    }
`

export const NavbarMobilIcon = styled(FaBars)`
    display: none;
    @media screen and (max-width : 1200px){
        display: block;
        position : absolute;
        top : 12px;
        right : 0;
        transform : translate(-100%, 60%);
        font-size : 1.7rem;
        cursor : pointer;
        color : #010606;
    }

`



export const HeaderBanner = styled.div`
display: block;
align-items: center;
jusify-content: center;
width: 100%;
background: #000000;
height: 5vh;
position : fixed;
top: 80px ;

margin-bottom: 5px;

align-items : center;


@media screen and (max-width : 1024px){
    
    width : 100%;
    text-align : center;
}
@media screen and (max-width : 1440px){
    
    width : 100%;
    text-align : center;
}


`

export const HeaderBannerTextP = styled.p`
    color : white;
    display : flex;
    font-size : 1.2 rem;
    justify-content : center;
    margin-top: 15px;
     width : 100%;

     @media screen and (max-width : 1024px){
        margin-top: 5px;
        font-size: 0.7rem;
    }
`