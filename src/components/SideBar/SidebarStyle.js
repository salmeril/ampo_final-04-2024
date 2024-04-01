import styled from "styled-components"
import {FaTimes} from 'react-icons/fa'
import {Link as LinkR} from 'react-router-dom'
import {Link as Links} from 'react-scroll'


export const SidebarContainer = styled.aside`
    position: fixed;
    z-index : 999;
    width: 100%;
    height : 100%;
    background : #E2E0E3;
    display : grid;
    align-items: center;
    top: 0;
    left: 0;
    transition : .3s ease-in-out;
    opacity : ${({ isOpen }) => (isOpen ? '100%' : '0')};
    top : ${({isOpen})=>( isOpen ? '0' : '-100%')};
` 

export const CloseIcon = styled(FaTimes)`
    color : black;

`
export const Icon = styled.div` 
    position : absolute;
    top : 1.2rem;
    right : 1.5rem;
    background : transparent;
    font-size : 2rem;
    cursor : pointer;
    outline : none;

`

export const SidebarWrapper = styled.div` 
    color : #fff;

`

export const SidebarLinks = styled(Links)`
    display : flex;
    align-items: center;
    justify-content: center;
    font-size : 1.5rem;
    text-decoration : none;
    list-style : none;
    transition : 0.3s ease-in-out;
    color : black;
    cursor : pointer;

    &:hover{
        color : black;
        transition : 0.2s ease-in-out;
         
    }
`

export const SideBtnWrap = styled.div`
    display : flex;
    justify-content : center;
`

export const SidebarMenu = styled.ul`
    display : grid;
    grid-template-columns : 1fr;
    grid-template-rows : repeat(6,80px);
    text-align : center;

    @media and screen (max-width : 480px){
        grid-template-rows : repeat(6,60px);

    }

`

export const SidebarRoutes= styled(LinkR)`
    border-radius : 50px;
    background : #01bf71;
    white-space : nowrap;
    padding : 16px 64px;
    color : black;
    font-size : 16px;
    outline : none;
    border : none;
    cursor : pointer;
    transition : all .2s ease-in-out;
    text-decoration : none;

    &:hover{
        transition : all .2s ease-in-out;
        background : #fff;
        color : black;
    }
`