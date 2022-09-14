import styled from "styled-components";

export const Head = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 2rem 10rem;
    img{
      width: 5.625rem;
      height: 2.5rem;
    }
    nav{
      display: flex;
      gap: 0.75rem;
    }
    span{
      color: ${props=> props.theme["purple-dark"]};
      background: ${props => props.theme["purple-light"]};
      display: flex;
      align-items: center;
      padding:0.5rem;
      border-radius: 8px;
    }
    a{
      text-decoration: none;
      display: flex;
      align-items: center;
      padding:0.5rem;
      border-radius: 8px;
      color: ${props=> props.theme["yellow"]};
      background: ${props => props.theme["yellow-light"]};
    }
`