import React, { useState } from 'react';
import iconoWp from '../../assest/img/WhatsApp.svg.webp'

const WpButton = () => {
  const phoneNumber = '5491123456789'; // Reemplaza con tu número de WhatsApp
  const message = encodeURIComponent('Hola, estoy interesado en tus productos.'); // Mensaje predeterminado

  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <button title='Envianos un mensaje'
    onClick={handleClick}
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}
    style={{
      position: 'fixed',
      bottom: '20px',
      right: '20px',
      zIndex: '9999',
      backgroundColor: isHovered ? '#128C7E' : '#25D366',
      color: '#fff',
      border: 'none',
      borderRadius: '50%',
      width: isHovered ? '70px' : '60px', // Ancho aumentado al pasar el mouse
      height: isHovered ? '70px' : '60px', // Altura aumentada al pasar el mouse
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      boxShadow: '0 2px 5px rgba(0, 0, 0, 0.3)',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease, width 0.3s ease, height 0.3s ease', // Transición suave
    }}
  >
      <img
        src={iconoWp}
        alt="WhatsApp"
        style={{ width: '50px', height: '50px' }}
      />
    </button>
  );
};

export default WpButton;
