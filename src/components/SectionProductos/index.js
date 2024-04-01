import React from 'react'
import {
    InfoContainer,
    InfoWrapper,
    InfoRow,
    Colum1,
    TextWrapper,
    TopLine,
    Subtitle,
    BtnWrap,
    Colum2,
    ImgWrap,
    Img,
    Btn
} from "./ProductosStyle"

const SectionProductos = ({
    orden,
    titulo,
    parrafo,
    foto,
    background,
    url_catalogo,
}) => {

    var redirectCatalogo = () => {
        window.location.href ={url_catalogo};
      };

  return (
    <>
      <InfoContainer id='productos' >
                <InfoWrapper Background={background}>
                    <InfoRow  Orden={orden}>
                        <Colum1>
                            <TextWrapper>
                                <TopLine>{titulo}</TopLine>
                                <Subtitle >{parrafo}</Subtitle>
                                <BtnWrap>
                                    <Btn href={url_catalogo}>Ver Productos</Btn>
                                </BtnWrap>
                            </TextWrapper>
                        </Colum1>
                        <Colum2>
                            <ImgWrap>
                                <Img src={foto}/> 
                            </ImgWrap>
                        </Colum2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
            </>
  )
}

export default SectionProductos