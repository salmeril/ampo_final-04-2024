import React, { useState } from 'react';
import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: auto;
  background: #f9f9f9;
  padding: 30px;
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Label = styled.label`
  margin-bottom: 10px;
  font-weight: bold;
  font-size: 1rem;
`;

const Input = styled.input`
  margin-bottom: 20px;
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Textarea = styled.textarea`
  margin-bottom: 20px;
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 1rem;
  background-color: #4CAF50;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }
`;

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });

    if (response.ok) {
      setSubmitted(true);
    } else {
      alert('Error al enviar el formulario. Inténtalo de nuevo más tarde.');
    }
  };

  if (submitted) {
    return <p>¡Gracias por tu mensaje! Te responderemos pronto.</p>;
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        Nombre:
        <Input type="text" name="name" value={formData.name} onChange={handleChange} required />
      </Label>
      <Label>
        Correo electrónico:
        <Input type="email" name="email" value={formData.email} onChange={handleChange} required />
      </Label>
      <Label>
        Mensaje:
        <Textarea name="message" value={formData.message} onChange={handleChange} required />
      </Label>
      <Button  type="submit">Enviar</Button>
    </Form>
  );
};

export default ContactForm;
