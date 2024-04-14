import React, {useState,useEffect} from 'react';
import { Nav,NavContainer,NavMenu,NavLink,NavLogo,NavbarMobilIcon, HeaderBanner, HeaderBannerTextP} from './NavbarStyle'
import logoSF from "../../assest/img/logo2.png"


const NavBar = ({toggle}) => {
  const [scrollNav,setScrollNav] = useState(false);

  const changeNav = ()=>{
      if(window.ScrollY>=80){
          setScrollNav(true);
      }else{
          setScrollNav(false);
      }
  }

  useEffect(()=>{
      window.addEventListener('scroll', changeNav);
  },[]);


  


  // const scrollHome = () =>{
  //     scroll.scrollToTop();
  // }

  return (
    <>
    
    <Nav scrollNav={scrollNav}>
    
    <NavContainer >
      <NavLogo src={logoSF} />
      <NavbarMobilIcon onClick={toggle} />
      
      <NavMenu>
      <NavLink
            smooth={true}
            duration={500}
            spy={true}
            exact='true'
            offset={-80}
            to='/'
        >Inicio</NavLink>
        <NavLink
            smooth={true}
            duration={500}
            spy={true}
            exact='true'
            offset={-80}
            to='about'
        >Nosotros</NavLink>
        <NavLink
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact='true'
                    offset={-80}
                    to='productos'
        >Productos</NavLink>
        <NavLink
            smooth={true}
            duration={500}
            spy={true}
            exact='true'
            offset={-80}
            to='contactos'
        >Contactos</NavLink>
        <NavLink>Tienda Online</NavLink>
      </NavMenu>
    </NavContainer>
    
    </Nav>
    <HeaderBanner>
        <HeaderBannerTextP>
            COMPRA MINIMA MAYORISTA $10.000 - CONSULTE OFERTAS EN PRODUCTOS SELECCIONADOS Y POR COMPRA EN CANTIDAD.
        </HeaderBannerTextP>
        </HeaderBanner> 
    </>
    )
}



export default NavBar