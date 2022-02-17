import styled from "styled-components";

var gray = '#494554';
var purp = '#7063A7';

export const HeroContainter = styled.main`
    display: flex;
    align-items: center;
    justify-content: center;

    margin: 1.5rem 5%;

    @media screen and (max-width: 480px){
        flex-direction: column-reverse;
    }
`;

export const HeroImg = styled.img`
    width: 45%;
    @media screen and (max-width: 480px){
        width: 85%;
        margin: 0 0 1rem 0;
    }
`;

export const HeroContent = styled.section`
    width: 45%;
    @media screen and (max-width: 480px){
        width: 95%;
        margin: 1rem 0;

    }
`;

export const HeroTitle = styled.h1`
    font: 600 2.25rem/1.5 'Poppins', arial, sans-serif ;
    color: ${gray};
    width: 95%;
    @media screen and (max-width: 480px){
        font-size: 1.5rem;
    }
`;

export const HeroSpan = styled.span`
    font: 600 2.25rem/1.5 'Poppins', arial, sans-serif ;
    color: ${purp};

    @media screen and (max-width: 480px){
        font-size: 1.5rem;
    }
`;

export const HeroText = styled.p`
    width: 65%;
    font: 500 1.15rem/1.5 'Poppins', arial, sans-serif ;
    color: ${gray};
    margin: .5rem 0;

    @media screen and (max-width: 480px){
        font-size: 1.1rem;
        width: 90%;
    }
`;