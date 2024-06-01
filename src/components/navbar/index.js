import React, {useState,useEffect} from 'react';
import { Nav,NavContainer,NavMenu,NavLink,NavLogo,NavbarMobilIcon, HeaderBanner, HeaderBannerTextP} from './NavbarStyle'
import logoSF from "../../assest/img/Aporello Negro.png"
import imagen1 from '../../assest/img/1banner.gif'; // Ruta de tu primera imagen
import imagen2 from '../../assest/img/2banner.gif'; // Ruta de tu segunda imagen
import imagen3 from '../../assest/img/3banner.gif'; // Ruta de tu tercera imagen

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
       
      </NavMenu>
    </NavContainer>
    
    </Nav>
    <HeaderBanner>
        <HeaderBannerTextP>
            COMPRA MINIMA MAYORISTA EN BAZAR PLASTICO $70.000 + ENV. Y FRASCOS DE VIDRIO $20.000 + ENV. - CONSULTE OFERTAS EN PRODUCTOS SELECCIONADOS.
        </HeaderBannerTextP>
        </HeaderBanner> 
    </>
    )
}



export default NavBar