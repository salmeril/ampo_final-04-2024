import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import { HeaderDiv, HeaderImg, HeadertextWrapp, HeaderTextH1, HeaderTextP, HeaderBtn} from './HeaderStyle';
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
                        <HeaderBtn>Ver Productos</HeaderBtn>
                    </HeadertextWrapp>
                </animated.div>
            </HeaderDiv>
        </>
    );
};



export default Header;
