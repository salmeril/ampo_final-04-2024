import React from 'react';
import { Column1, Column2, ContactoWrapp, ContainerContacto, Icon, SocialMedias, TextP, TextPredes, TextTitle, TextWrapper } from './ContactoStyle';
import contacto from "../../assest/img/contactoimg.png";
import whatsapp from "../../assest/icons/iconmonstr-whatsapp-5.svg";
import facebook from "../../assest/icons/iconmonstr-facebook-5.svg";
import ig from "../../assest/icons/iconmonstr-instagram-15.svg";
import correo from "../../assest/icons/iconmonstr-gmail-5.svg";
import ContactForm from '../form/index'; // Ajusta la ruta según sea necesario

const Contacto = () => {
  const redirectWp = () => {
    window.location.href = "https://www.google.com";
  };

  const redirectInsta = () => {
    window.location.href = "https://www.instagram.com/aporello.bazaryenvases/";
  };

  const redirectFace = () => {
    window.location.href = "https://www.google.com";
  };

  const redirectCorreo = () => {
    window.location.href = "https://www.google.com";
  };

  return (
    <>
      <ContainerContacto id='contactos'>
        <ContactoWrapp>
          <Column1>
            <TextWrapper>
              <TextTitle>Contactate con nosotros!</TextTitle>
              <TextP>Para cualquier consulta que tengas, puedes contactarnos a través de nuestras redes sociales. Estamos aquí para ayudarte en todo momento.</TextP>
              <ContactForm />
              <TextPredes>Nuestras redes :</TextPredes>
            </TextWrapper>
            <SocialMedias>
              <Icon onClick={redirectWp} src={whatsapp} title='Hablemos por WhatsApp' fill="#FED6F8" />
              <Icon src={facebook} onClick={redirectFace} title='Mi pagina de Facebook' />
              <Icon src={ig} onClick={redirectInsta} title='Seguime en Instagram' />
              <Icon src={correo} onClick={redirectCorreo} title='Enviar correo a contacto@amporello.com.ar' />
            </SocialMedias>
          </Column1>
          <Column2>
            <img src={contacto} alt="Contacto" />
          </Column2>
        </ContactoWrapp>
      </ContainerContacto>
    </>
  );
};

export default Contacto;
