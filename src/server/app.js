const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const port = process.env.PORT || 3001;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/send-email', (req, res) => {
    const { name, email, message } = req.body;

    const transporter = nodemailer.createTransport({
        host: 'smtp.hostinger.com', // Dirección del servidor SMTP proporcionada por tu proveedor de hosting
        port: 465, // Puerto SMTP
        secure: true, // true para SSL
        auth: {
            user: 'form@aporello.com.ar', // Tu dirección de correo electrónico
            pass: 'Formulario2024$' // Tu contraseña de correo electrónico
        }
    });

    const mailOptions = {
        from: 'form@aporello.com.ar', // Tu dirección de correo electrónico
        to: 'contacto@aporello.com.ar', // La dirección de correo electrónico a la que deseas recibir las solicitudes de contacto
        subject: 'Nueva solicitud de contacto',
        text: `Nombre: ${name}\nCorreo electrónico: ${email}\nMensaje: ${message}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error al enviar el correo electrónico:', error);
            res.status(500).send('Error al enviar el correo electrónico');
        } else {
            console.log('Correo electrónico enviado:', info.response);
            res.status(200).send('Correo electrónico enviado correctamente');
        }
    });
});

app.listen(port, () => {
    console.log(`Servidor backend escuchando en el puerto ${port}`);
});
