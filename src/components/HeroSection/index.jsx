import { HeroContainter, HeroContent, HeroImg, HeroSpan, HeroText, HeroTitle } from "./HeroElements";

// Images
import heroImg from "../../assets/img/main-section-img.jpg";
import Cta from "../Cta";

const HeroSection = ()=>{
    return(
        <HeroContainter>
            <HeroContent>
                <HeroTitle>
                    Impulsione seu negócio 
                    com as nossas <HeroSpan>Soluções</HeroSpan>
                </HeroTitle>

                <HeroText>
                 Com a mastercomps, voce encontra as soluçoes ideais para 
                 sua empresa crescer online!
                </HeroText>

                <Cta buttonSize='btn--md' buttonColor='purple'>
                    Cases de Sucesso
                </Cta>
            </HeroContent>
            <HeroImg src={heroImg} alt="Conteúdo Principal - Homem com tecnologia" />
        </HeroContainter>
    );
}

export default HeroSection;