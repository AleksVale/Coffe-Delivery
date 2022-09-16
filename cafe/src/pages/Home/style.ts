import styled from "styled-components";

export const Intro = styled.div`
  display: flex;
  gap: 56px;
  padding: 5.75rem 10rem;
`
export const Title = styled.div`
max-width: 40rem;
  h1{
    font-family: 'Baloo 2', cursive;
    font-weight: 800;
    font-size:3rem;
    margin-bottom: 1rem;
    color: ${props=> props.theme["base-title"]};
  }
  p{
    margin-bottom: 4.125rem;
    font-size: 1.25rem;
    line-height: 130%;
    color: ${props=> props.theme["base-subtitle"]};
  }
`
export const Card = styled.div`
  display: flex;
  gap:2.5rem; 
  p{
    display: flex;
    align-items: center;
    span:last-child{
      color: ${props=> props.theme["base-text"]};
    }
  }
  p:first-child{
    margin-bottom: 1.25rem;
  }
`
export const CardType = styled.span`
  padding: 0.5rem;
  border-radius: 50%;
  margin-right: 0.75rem;
  display: flex;
  color: ${props=> props.theme.white};
  `

export const Card1 = styled(CardType)`
  background: ${props=> props.theme["yellow-dark"]};
`
export const Card2 = styled(CardType)`
  background: ${props=> props.theme["yellow"]};
`
export const Card3 = styled(CardType)`
  background: ${props=> props.theme["base-subtitle"]};
`
export const Card4 = styled(CardType)`
  background: ${props=> props.theme["purple"]};
`
export const Content = styled.div`
  padding: 10rem; 
  h1{
    font-family: 'Baloo 2', cursive;
    font-weight: 800;
    font-size: 2rem;
  }
  div{
    display: flex;
    flex-wrap: wrap;
  }
`