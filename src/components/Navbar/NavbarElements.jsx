import styled from 'styled-components';
import { Link as LinkExt } from 'react-router-dom';

const mainColor = '#3D3473';

export const Nav = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 5rem;

    @media screen and (max-width: 768px){
        padding: 2rem 3rem;
    }
`;

export const NavLogo = styled.img`
    width: 115px;
    @media screen and (max-width: 768px){
        width: 100px;
    }
`;

export const MobileIcon = styled.aside`
    display: none;

    @media screen and (max-width: 768px){
        display: block;
        position: absolute;
        top: 2rem;
        right: 1.2rem;

        transform: translate(-100%, 60%);
        font-size: 2rem;
        color: #244A6F;
        cursor: pointer;
    }
`;

export const NavCta = styled(LinkExt)`
    border: 2px solid ${mainColor};
    border-radius: 15px;
    font:  500 1.2rem/1 'Poppins', arial, sans-serif;
    color: ${mainColor};
    padding: 15px 35px;

    @media screen and (max-width: 768px){
        display: none;
    }
`;

export const NavMenu = styled.ul`
    display: flex;
    margin-top: 20px;
    
    @media screen and (max-width: 768px){
        display: none;
    }
`;

export const NavMenuLink = styled.li`
    margin: 0 1.25rem;
    font:  500 1.4rem/1 'Poppins', arial,  sans-serif;
    color: ${mainColor};

    &.active{
        &:after{
            content:"";
            width: 10px;
            height: 10px;
            margin-top: 0;
            background: ${mainColor};
            border-radius:50%;
            display: flex;
            margin-top: 15%;
            margin-left: 40%;

        }
    }

`;

