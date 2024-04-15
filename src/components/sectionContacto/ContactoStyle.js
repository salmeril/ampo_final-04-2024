import styled from "styled-components"

export const ContainerContacto = styled.section`
color: black;
width: 80%;

margin: 100px auto;

@media screen and (max-width: 768px) {
  padding: 100px 0;
  
}
`

export const ContactoWrapp = styled.div`
width : 100%;
height : 100%;
display : flex;
`

export const Column1 = styled.div`
width : 50%;

@media screen and (max-width : 1024px){
    width : 100%;
}

`
export const TextWrapper = styled.div`

`

export const TextTitle = styled.h1`
font-size : 42px;
margin-bottom : 20px;
@media screen and (max-width : 1024px){
    text-align : center;
}

`

export const TextP = styled.p`
font-size : 21px;
margin-bottom : 50px;

`

export const TextPredes = styled.p`
font-size : 17px;
font-weight : bold;
margin-top: 25px;

@media screen and (max-width : 1024px){
    text-align : center;
    margin : 20px auto;
}
`

export const SocialMedias = styled.div`
display :flex;
margin-top : 15px;
@media screen and (max-width : 1024px){
    text-align : center;
    margin : 0 auto;
}

`

export const Icon = styled.img`
 color : red;
 width : 50px;
 margin : 0 5px;
cursor : pointer;

@media screen and (max-width : 1024px){
    text-align : center;
    margin : 0 auto;
}
`


export const Column2 = styled.div`
    width : 50%;
    padding : 0 20px;

    @media screen and (max-width : 1024px){
        display : none;
    }
    
`