import styled from 'styled-components';

export const CaseContainer = styled.section`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 480px){
        flex-direction: column;
    }
`;