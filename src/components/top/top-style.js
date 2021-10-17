import styled  from 'styled-components';

export const Container = styled.div`
    position: sticky;
    top: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--dark);
    height: 5rem;
    z-index: 9999;
`;
export const Logo = styled.div`
    margin-left: 5rem;
    margin-top: 3rem;
    height: 5rem;
    width: 5rem;
    cursor: pointer;

    .logoImg{
        height: 4rem;
        width: 5rem;
    }
`;
export const Icon = styled.img`
    
`;
