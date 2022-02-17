import {MobileIcon, Nav, NavCta, NavLogo, NavMenu, NavMenuLink} from './NavbarElements';

// Imagens
import logoMaster from '../../assets/img/logo_name.png';
import { useEffect, useState } from 'react';
import { FaBars } from 'react-icons/fa';

const Navbar = ({ toggle }) => {
    const [hasScroll, setHasScroll] = useState(false);

    useEffect(()=>{
        window.onscroll= ()=>{
            if(window.pageYOffset > 80)
                setHasScroll(true);
            else
                setHasScroll(false);
        }
    });
    
    return(
        <Nav>

            <NavLogo src={logoMaster} alt="Logo Mastercomps" />

            <MobileIcon onClick={toggle}>
                <FaBars />
            </MobileIcon>

            <NavMenu>
                <NavMenuLink className='active'>Home</NavMenuLink>

                <NavMenuLink >Serviços</NavMenuLink>

                <NavMenuLink>Cases</NavMenuLink>

                <NavMenuLink>Sobre nós</NavMenuLink>
            </NavMenu>

            <NavCta to="/pricing" >Saiba mais</NavCta>
        </Nav>
    );
};

export default Navbar;