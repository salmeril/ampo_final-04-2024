import styled from 'styled-components';

export const InfoContainer = styled.div`
  color: #fff;
  width: 80%;
  margin: 0 auto;
  @media screen and (max-width: 768px) {
    padding: 100px 0;
    width : 95%;
    height :70vh;
  }
`

export const InfoWrapper = styled.div`

  background: ${({ Background }) => (Background ? '#99EFF8' : '#FED6F8')};
`

export const InfoRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: ${({ Orden }) => (Orden ? `'col2 col1'` : `'col1 col2'`)};
  width: 100%;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-areas: ${({ Orden }) => (Orden ? `'col2' 'col1'` : `'col2' 'col1'`)};
    height : calc(100vh - 70px);
  }
`

export const Colum1 = styled.div`
background : #E2E8F0;
  grid-area: col1;
  display : flex;
  justify-content: center;
  align-items : center;

  
  @media screen and (max-width: 768px) {
    display : flex;
    text-align : center;
  }
`

export const Colum2 = styled.div`
  margin-bottom: 15px;
  grid-area: col2;
`


export const TextWrapper = styled.div` 
@media screen and (max-width : 480px){
    padding : 10px;
} 
`

export const TopLine = styled.p` 
    color : black;
    font-size : 16px;
    line-height : 16px;
    font-weight : 700;
    letter-spacing : 1.4px;
    text-transform : uppercase;
    margin-bottom : 16px;
`
export const Heading = styled.h1`
    margin-bottom : 24px;
    font-size:  48px;
    line-height: 1.1;
    font-weight: 600;
    color : black;

    @media screen and (max-width : 480px){
        font-size : 32px; 
    } 

`

export const Subtitle = styled.p`
    max-width : 440px;
    margin : 0 0 20px 0;
    font-size : 18px;
    color : black;
    line-height: 23px;
`

export const BtnWrap = styled.div`
    display : flex;
    
` 
export const Btn = styled.a` 
border-radius : 10px;
white-space : none;
background :#4F505C;
padding : 13px 28px;
border : 1px solid #4F505C;
color : white;
outline : none;
cursor : pointer;
display : flex;
justify-content : center;
align-items : center;
transition : all .2s ease-in-out;
text-decoration : none;

&:hover {    
    transition : all .2s ease-in-out;
    background : #E2E0E3;
    color : #4F505C;
    border-color :black;


}

@media screen and (max-width: 768px) {
    display : flex;
    text-align : center;
    margin : 0 auto;
  }
` 

export const ImgWrap = styled.div`
width : 100%;

` 

export const Img = styled.img`
object-fit: cover; 
width : 100%;
height: 440px;
`