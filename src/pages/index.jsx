import { useState } from 'react';
import AboutSection from '../components/AboutSection';
import CasesSecion from '../components/CasesSection';
import HeroSection from '../components/HeroSection';
import Navbar from '../components/Navbar';
import ServicesSection from '../components/ServicesSection';
import Sidebar from '../components/Sidebar';

function Home(){

    // Sidebar Control
    const [isOpen, setIsOpen] = useState(false);
    const toggle = ()=>{
        setIsOpen(!isOpen);
    }

    return (
        <>
            <Sidebar isOpen = {isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            <HeroSection />
            <ServicesSection />
            <CasesSecion />
            <AboutSection />
        </>
    )
}

export default Home;