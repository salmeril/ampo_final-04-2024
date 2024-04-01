import React from 'react'
import { AboutUsContainer,
    AboutUstextWrapp,
    AboutUsImgWrap,
    AboutUsTextP,
    AboutUsTextH1,
    AboutUsImg
} from './AboutUsStyle'
import logo2 from "../../assest/img/logonosotros.png"

const AboutUs = () => {
  return (
    <>
    <AboutUsContainer id="about">
        <AboutUstextWrapp>
        <AboutUsTextH1>
            Sobre Nosotros
        </AboutUsTextH1>
        <AboutUsTextP>
        "Aporello nace inicialmente del sueño de tres almas emprendedoras, dedicadas a la venta de artículos de bazar, envases y exquisitas fragancias mágicas.
        Con la intención de acompañar y brindar día a día a nuestros clientes una variedad de productos al mejor precio, haciendo de la excelencia y la calidad los pilares fundamentales de nuestra organización."
        </AboutUsTextP>
        </AboutUstextWrapp>
        <AboutUsImgWrap>
            <AboutUsImg src={logo2} />
        </AboutUsImgWrap>   
    </AboutUsContainer>
    </>
  )
}

export default AboutUs