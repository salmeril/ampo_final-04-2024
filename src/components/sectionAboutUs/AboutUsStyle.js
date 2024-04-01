import styled from "styled-components";

export const AboutUsContainer = styled.section`
width : 100%;
height : 100vh;
background : #4F505C;
display :grid;
grid-auto-colums : minmax(1fr, 1fr);
align-items : center;
grid-template-areas : 'col1 col2';

@media screen and (max-width : 1024px){
    display : flex;
    jusitfy-content : center;
    flex-direction : columns;
}
`

export const AboutUstextWrapp = styled.div`
padding : 0 15px;
grid-area : col1;
margin : 0px 40px; 

@media screen and (max-width : 1024px){
    margin : 0 auto;
    padding: 1rem;
}
`

export const AboutUsTextH1 = styled.h1`
font-size : 2.6rem;
color : #fff;
margin : 20px 0;

@media screen and (max-width : 1024px){
    margin : 0 auto;
    text-align : center;
}

`

export const AboutUsTextP = styled.p`
color : #fff;
font-size : 1.1rem;
width : 70%;

@media screen and (max-width : 1024px){
   
    margin : 20px auto;
    text-align : center;
}
`

export const AboutUsImgWrap = styled.div`
padding : 0 20px;
grid-area : col2;
margin : 0px 40px; 

@media screen and (max-width : 1024px){
    display : none;
}

`
export const AboutUsImg = styled.img`
@media screen and (max-width : 1024px){
    width : 100px;
}
`




