import React, { useState } from 'react';
import styled from 'styled-components';

const CookieMessageContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: black;
  color: #fff;
  padding: 20px;
`;

const CookieMessageText = styled.p`
  margin: 10px;
`;

const CookieMessageButton = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 8px 16px;
  margin-right: 10px;
  cursor: pointer;
`;

const CookieMessage = () => {
  const [showMessage, setShowMessage] = useState(true);

  const handleAcceptCookies = () => {
    // Aquí puedes almacenar la preferencia del usuario en el almacenamiento local
    setShowMessage(false);
  };

  const handleRejectCookies = () => {
    // Aquí puedes realizar acciones adicionales si el usuario rechaza las cookies
    setShowMessage(false);
  };

  return (
    showMessage && (
      <CookieMessageContainer>
        <CookieMessageText>
          Este sitio web utiliza cookies para mejorar la experiencia del usuario. ¿Aceptas nuestras cookies?
        </CookieMessageText>
        <CookieMessageButton onClick={handleAcceptCookies}>Aceptar</CookieMessageButton>
        <CookieMessageButton onClick={handleRejectCookies}>Rechazar</CookieMessageButton>
      </CookieMessageContainer>
    )
  );
};

export default CookieMessage;
