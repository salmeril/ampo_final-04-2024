import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import { HeaderDiv, HeaderImg, HeadertextWrapp, HeaderTextH1, HeaderTextP, HeaderBtn} from './HeaderStyle';
import imagen1 from '../../assest/img/Diseno_sin_titulo_32.png'; // Ruta de tu primera imagen
import imagen2 from '../../assest/img/Diseno_sin_titulo_34.png'; // Ruta de tu segunda imagen
import imagen3 from '../../assest/img/Diseno_sin_titulo_38.png'; // Ruta de tu tercera imagen
import imagen5 from '../../assest/img/3header.png'; // Ruta de tu tercera imagen


const Header = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [imageAnimation, setImageAnimation] = useSpring(() => ({
        opacity: 0,
        config: { duration: 700 }
    }));

    const images = [imagen1, imagen2, imagen3, imagen5 ];

    useEffect(() => {
        const interval = setInterval(() => {
            setImageAnimation({ opacity: 0 }); // Fade out the image
            setTimeout(() => {
                setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
            }, 300); // Wait for fade out to complete
            setTimeout(() => {
                setImageAnimation({ opacity: 1 }); // Fade in the image
            }, 400); // Wait for image change to complete
        }, 5000);

        return () => clearInterval(interval);
    }, [images.length, setImageAnimation]);

    const handleScrollToProducts = () => {
        const productsSection = document.getElementById('productos');
        
        if (productsSection) {
            const productsSectionTop = productsSection.offsetTop;
            const windowHeight = window.innerHeight;
            const scrollTo = productsSectionTop - (windowHeight / 2);
            
            window.scrollTo({
                top: scrollTo,
                behavior: 'smooth'
            });
        }
    };

    return (
        <>
            <HeaderDiv id='/'>
                <HeadertextWrapp>
                    <HeaderTextH1>Encuentra todos tus productos!</HeaderTextH1>
                    <HeaderTextP>Te invitamos a conocer todos los productos que tenemos para ofrecerte!</HeaderTextP>
                    <HeaderBtn onClick={handleScrollToProducts}>Ver Productos</HeaderBtn>
                </HeadertextWrapp>
                <animated.div style={{ opacity: imageAnimation.opacity }}>
                    <HeaderImg src={images[currentImageIndex]} /> {/* Aquí se pasa la imagen actual */}
                </animated.div>
            </HeaderDiv>
        </>
    );
};

export default Header;
