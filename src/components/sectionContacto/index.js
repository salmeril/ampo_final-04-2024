import React from 'react'
import { Column1, Column2, ContactoWrapp, ContainerContacto, Icon, SocialMedias, TextP, TextPredes, TextTitle, TextWrapper } from './ContactoStyle'
import contacto from "../../assest/img/contactoimg.png"
import whatsapp from "../../assest/icons/iconmonstr-whatsapp-5.svg"
import facebook from "../../assest/icons/iconmonstr-facebook-5.svg"
import ig from "../../assest/icons/iconmonstr-instagram-15.svg"
import correo from "../../assest/icons/iconmonstr-gmail-5.svg"
import ContactForm from '../form'




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

    
        const handleSendEmail = () => {
            const email = 'contacto@aporello.com.ar'; // Aquí pon tu dirección de correo electrónico
            const subject = 'Consulta desde tu sitio web'; // Asunto predeterminado para el correo
            const body = 'Recorda dejarnos tus datos de contacto para poder comunicarnos contigo.'; // Cuerpo predeterminado para el correo
    
            const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
            window.location.href = mailtoLink;
        };

  return (
    <>
    <ContainerContacto id='contactos'>
        <ContactoWrapp>
            <Column1>
                <TextWrapper>
                    <TextTitle>Contactate con nosotros!</TextTitle>
                    <TextP>Para cualquier consulta que tengas, puedes contactarnos a través de nuestras redes sociales. Estamos aquí para ayudarte en todo momento </TextP>
                    <ContactForm/>
                    <TextPredes>Nuestras redes : </TextPredes>
                    
                </TextWrapper>
                <SocialMedias>
                    <Icon onClick={redirectWp} src={whatsapp} title='Hablemos por WhatsApp'  fill="#FED6F8"/>
                    <Icon src={facebook} onClick={redirectFace} title='Mi pagina de Facebook'/>
                    <Icon src={ig} onClick={redirectInsta} title='Seguime en Instagram'/>
                    <Icon src={correo} onClick={handleSendEmail} title='Enviar correo a contacto@amporello.com.ar'/>
                </SocialMedias>
            </Column1>
            <Column2>
                <img src={contacto}></img>
            </Column2>
        </ContactoWrapp>

    </ContainerContacto>
    </>
   

     
  )
}

export default Contacto