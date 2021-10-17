import styled from 'styled-components';

export const Container = styled.div`
    background-color: var(--dark);
    width: 15%;
    height: 100vh;
    position: fixed;
`;
export const List = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 4rem;
`;
export const Items = styled.li`
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--white);
    letter-spacing: 0.08rem;
    font-size: 1.65rem;
    font-weight: 600;
    width: 90%;
    list-style-type: none;
    margin-bottom: 2.5rem;
    padding-bottom: 1rem;
    border-bottom: 0.8px solid #272727;
    cursor: pointer;
    transition: 0.5s;

    &:last-child{
        border-bottom: none;
    }
    &:hover{
        border-bottom: 0.8px solid #7a7a7a;
    }
`;
