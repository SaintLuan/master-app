import React from 'react';
import { CloseIcon, SidebarContainer, Icon, SidebarWrapp, SidebarMenu, SidebarLink, SidebarCta, SidebarCtaWrap } from './SidebarElements';


const Sidebar = ({ isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>

            <SidebarWrapp>
                <SidebarMenu>
                    <SidebarLink to="home" onClick={toggle}>Home</SidebarLink>
                    <SidebarLink to="training" onClick={toggle}>Serviços</SidebarLink>
                    <SidebarLink to="events" onClick={toggle}>Cases</SidebarLink>
                    <SidebarLink to="contatc" onClick={toggle}>Sobre nós</SidebarLink>
                </SidebarMenu>

                <SidebarCtaWrap>
                    <SidebarCta to="/pricing" >Saiba mais</SidebarCta>
                </SidebarCtaWrap>

                
            </SidebarWrapp>
        </SidebarContainer>

    )
}

export default Sidebar
