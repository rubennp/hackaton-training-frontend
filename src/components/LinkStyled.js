import styled from 'styled-components';

const LinkStyled = styled.a`
    background-color: ${props => props.color};
    color: black;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 15vh;

    span {
        font-size: 1.5em;
    }

    &:hover {
        cursor: pointer;
        text-shadow: 1px 1px 10px rgba(0, 0, 0, 0.2);
        box-shadow: inset 0px 2px 10px rgba(0, 0, 0, 0.2);
    }
`;

export default LinkStyled;