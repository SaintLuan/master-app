import styled from "styled-components";

const purp = '#494554';
const gray = '#3D3473';

export const TitleContainer = styled.article`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 3rem 0 1rem 0;
`;

export const TitleTop = styled.span`
    color: ${purp};
    font: 600 1.25rem/1 'Nunito', arial, sans-serif ;
    &:before{
        padding: 0 15px 0 0;
        content: url(${props => props.svg});
        vertical-align: -35%;
    }    
`;

export const TittleBottom = styled.h2`
    color: ${gray};

    @media screen and (max-width: 480px){
        font-size: 1.2rem;
    }
`;