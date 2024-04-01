import styled from "styled-components";

export const HeaderDiv = styled.header`
width : 100%;
background : #E2E0E3;
height: calc(100vh - 80px);
display :grid;
grid-auto-colums : minmax(1fr, 1fr);
align-items : center;
grid-template-areas : 'col1 col2'
`

export const HeaderImg = styled.img`
width : 100%;
height: calc(100vh - 80px);
object-fit: cover; 
grid-area : col1;

@media screen and (max-width : 1024px){
    display : none;
}

`

export const HeadertextWrapp = styled.div`
    width : 90%;
    grid-area : col2;
    justify-content: center;
    align-items: center; 
    flex-direction : column;


    @media screen and (max-width : 1024px){
    
        width : 100%;
        text-align : center;
    }

    
`

export const HeaderTextH1 = styled.h1`
    color : #4F505C;
    display : flex;
    font-size : 41px;
    justify-content : flex-end;
    margin : 15px 0;

`

export const HeaderTextP = styled.p`
    color : #4F505C;
    display : flex;
    font-size : 1.1rem;
    justify-content : flex-end;
    margin : 20px 0;

     width : 90%;

     @media screen and (max-width : 1024px){
        margin : 0 auto;
    }
`

export const HeaderBtn = styled.button`
border-radius : 10px;
white-space : none;
background :#4F505C;
padding : 16px 28px;
border : 1px solid #4F505C;
color : white;
outline : none;
cursor : pointer;
display : flex;
justify-content : center;
align-items : center;
transition : all .2s ease-in-out;

&:hover {    
    transition : all .2s ease-in-out;
    background : #E2E0E3;
    color : #4F505C;
    border-color :black;


}

@media screen and (max-width : 1024px){
    margin : 20px auto;
    width : 80%;
    text-align : center;
}
`