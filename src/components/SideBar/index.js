import React from 'react'
import 
{
SidebarContainer
,Icon
,CloseIcon
,SidebarWrapper,
SidebarMenu,
SidebarLinks} 
from './SidebarStyle'

const SideBar = ({isOpen,toggle})=> { 
    //TODO: terminar el sidebar!
    return(
        <SidebarContainer isOpen={isOpen} onClick={toggle}> 
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                <SidebarLinks to='/' onClick={toggle}>
                        Inicio
                    </SidebarLinks>
                    <SidebarLinks to='about' onClick={toggle}>
                        Nosotros
                    </SidebarLinks>
                    <SidebarLinks to='productos' onClick={toggle}>
                        Productos
                    </SidebarLinks>
                    <SidebarLinks to='contacto'onClick={toggle}>
                        Contactos
                    </SidebarLinks>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    );
}

export default SideBar;