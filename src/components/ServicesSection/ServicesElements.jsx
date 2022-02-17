import styled from "styled-components";

export const ServicesContainer = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;

    margin: 3rem 0;

    @media screen and (max-width: 480px){
        flex-direction: column;
    }
`;

export const ServiceCard = styled.article`
    max-width: 20%;
    width: 100%;

    background: #FFFFFF;
    box-shadow: 3px 2px 15px rgba(0, 0, 0, 0.25);
    border-radius: 25px;
    padding: 1.5rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    margin: 0 1rem;

    @media screen and (max-width: 480px){
        max-width: 80%;
        width: 100%;
        margin: .75rem 0;
    }
`;

export const CardImg = styled.img`

`;

export const CardTitle = styled.h2`
    font: 500 1.5rem/1 'Nunito', arial, sans-serif ;
    padding: 1.5rem 0;

    @media screen and (max-width: 480px){
        font-size: 1.25rem;
    }
`;

export const CardText = styled.p`
    font: 400 1.12rem/1.25 'Poppins', arial, sans-serif ;
    padding: .25rem 0;

    @media screen and (max-width: 480px){
        font-size: 1rem;
    }
`;