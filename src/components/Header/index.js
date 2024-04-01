import React from 'react'
import { useSpring, animated } from 'react-spring';
import { HeaderDiv,HeaderImg,HeadertextWrapp,HeaderTextH1, HeaderTextP,HeaderBtn} from './HeaderStyle' 
import envases2 from "../../assest/img/envases2.png"

const Header = () => {

    

    const animation = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
        config: { duration: 700 }
      });
    
  return (
    <>
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
    )
}

export default Header

