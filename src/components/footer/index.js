import React from 'react';
import styled from 'styled-components';
import LogoFooter from '../../assest/img/Aporello Beige.png'

// Define estilos para el footer y el logo
const FooterContainer = styled.footer`
  background-color: black;
  color: white;
  padding: 0.5vh;
  display: flex;
  flex-direction: column; /* Coloca los elementos en una columna */
  align-items: center;
`;

const Logo = styled.img`
  width: 18vh; /* Ajusta el tamaño del logo según tus necesidades */
  margin-right: 20px; /* Espacio entre el logo y los enlaces */

  @media screen and (min-width : 840px){
    margin-right: 55vh;
}

`;

const Separator = styled.hr`
  border: 0;
  border-top: 1px solid white;
  width: 100%; /* Asegura que la línea horizontal se extienda por completo */
`;

const NavContainer = styled.nav`
  display: flex;
  flex-wrap: wrap; /* Permite que los elementos se envuelvan en filas adicionales */
  justify-content: center; /* Centra los enlaces horizontalmente */
  align-items: center;
`;

const FooterLink = styled.a`
  color: white;
  text-decoration: none;
  margin-right: 20px;
  margin-bottom: 10px; /* Espacio entre los enlaces */
  


  @media screen and (max-width : 768px){
    display: none;
}
`;

const TextoMarca = styled.p`
  margin-top: 20px; /* Espacio entre los enlaces y la marca */
`;

const LogoButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  margin-right: 20px; /* Espacio entre el logo y los enlaces */
`;

const Footer = () => {

    const handleButtonClick = () => {
        // Aquí puedes especificar la acción que deseas realizar al hacer clic en el botón
        window.location.href = '/'; // Por ejemplo, redireccionar a la página de inicio
      };

  return (
    <FooterContainer>
      <NavContainer>
        {/* Logo */}
        <LogoButton onClick={handleButtonClick}><Logo src={LogoFooter} alt="Logo" /></LogoButton>
        
        {/* Enlaces */}
        <FooterLink href="#/">Inicio</FooterLink>
        <FooterLink href="#about">Nosotros</FooterLink>
        <FooterLink href="#productos">Productos</FooterLink>
        <FooterLink href="#contactos">Contactos</FooterLink>
        <FooterLink href="#seccion3"></FooterLink>
      </NavContainer>
      {/* Separador */}
      <Separator />
      {/* Marca */}
      <TextoMarca>© 2024 @doutsidethebox Todos los derechos reservados.</TextoMarca>
    </FooterContainer>
  );
};

export default Footer;
