import styled from "styled-components";

export const Cafe = styled.div`
 background: ${props=> props.theme["base-card"]};
 padding: 0 1.5rem 1rem;
 margin: 3.375rem 1.5rem 3.375rem 0;
 display:flex;
 flex-direction: column;
 align-items: center;
 max-width: 16rem;
 border-top-right-radius: 15%;
 img{
  max-width: 400px;
  margin-top:-1.25rem;
 }
 h3{
  color:${props=> props.theme["base-subtitle"]};
  font-family: 'Baloo 2', cursive;
  font-weight: 700;
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
 }
 p{
  color: ${props=> props.theme["base-label"]};
  font-size: 0.875rem;
  margin-bottom: 2rem;
 }
`
export const Tag = styled.span`
  color: ${props=> props.theme["yellow-dark"]};
  background-color: ${props=> props.theme["yellow-light"]};
  padding: 4px 8px;
  margin: 0.725rem 1rem;
  font-weight: 800;
  font-size: 0.625rem;
  border-radius: 100px;
`
export const Preco = styled.div`
  padding-bottom:1.25rem;
  gap:1rem;
  display: flex;
  align-items: center;
`
export const CardFinal = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  div{
    display: flex;
    gap:0.3rem;
    align-items: center;
    button{
      background-color: ${props=> props.theme["base-button"]};
      padding: 0.5rem;
      cursor: pointer;
      outline: none;
      border: none;
    }
  }
  div:first-child{
    background-color: ${props=> props.theme["base-button"]};
    border-radius: 8px;
  }
`
export const CartButton = styled.button`
    background-color: ${props=> props.theme["purple-dark"]};
    color: ${props=> props.theme["white"]};
    border-radius:8px;
    padding: 0.5rem;
    border: none;
    cursor: pointer;
`