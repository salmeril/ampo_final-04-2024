import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import { HeaderDiv, HeaderImg, HeadertextWrapp, HeaderTextH1, HeaderTextP, HeaderBtn, HeaderBanner, HeaderBannerTextP } from './HeaderStyle';
import imagen1 from '../../assest/img/1banner.gif'; // Ruta de tu primera imagen
import imagen2 from '../../assest/img/2banner.gif'; // Ruta de tu segunda imagen
import imagen3 from '../../assest/img/3banner.gif'; // Ruta de tu tercera imagen
import envases2 from "../../assest/img/envases2.png";

const Header = () => {
    const animation = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
        config: { duration: 700 }
    });

    const images = [imagen1, imagen2, imagen3];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [images.length]);

    // Define imageSize aquí antes de pasarlo como prop
    const imageSize = {
        image1: { width: '100%', height: '100px' }, // Modifica las dimensiones para la imagen 1
        image2: { width: '1000px', height: '100px' }, // Modifica las dimensiones para la imagen 2
        image3: { width: '1000px', height: '100px' }  // Modifica las dimensiones para la imagen 3
    };

    return (
        <>
            {/* Pasamos currentImageIndex y imageSize como prop a ImageSlider */}
            
            
            <HeaderDiv id='/'>
                
                <animated.div style={animation}>
                    <HeaderImg src={envases2} />
                </animated.div>
                <animated.div style={animation}>
                    <HeadertextWrapp>
                        <HeaderTextH1>Encuentra todos tus productos!</HeaderTextH1>
                        <HeaderTextP>Te invitamos a conocer todos los productos que tenemos para ofrecerte!</HeaderTextP>
                        <HeaderBtn>Ver Tienda</HeaderBtn>
                    </HeadertextWrapp>
                </animated.div>
            </HeaderDiv>
        </>
    );
};

const ImageSlider = ({ images, currentImageIndex, imageSize }) => {
    return (
        <HeaderBanner>
           <img 
                src={images[currentImageIndex]} 
                alt={`Imagen ${currentImageIndex + 1}`} 
                style={{ 
                    width: '100%', // Establece el ancho al 100% del contenedor
                    height: 'auto', // Ajusta automáticamente la altura para mantener la relación de aspecto
                    objectFit: 'cover', // Ajusta la imagen para cubrir todo el contenedor manteniendo su relación de aspecto
                }} 
            />
        </HeaderBanner>
    );
};

export default Header;
