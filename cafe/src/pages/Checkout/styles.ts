import styled from "styled-components";

export const LayoutCheckout = styled.div`
  display: flex;
  padding: 0 10rem;
  gap: 2rem;
`
export const CheckoutInfos = styled.div`
  margin-top: 1rem;
  padding: 2.5rem 2.5rem 2rem;
  background-color: ${props => props.theme["base-card"]};
  
  
`
export const HeaderForm = styled.div`
margin-bottom: 2rem;

p:first-child{
    color: ${props=> props.theme["base-subtitle"]};
    display: flex;
    align-items: center;
    gap:0.5rem;
    font-size: 16px;
    line-height: 130%;
    span{
      color: ${props=> props.theme["yellow-dark"]};
      width: 22px;
      height:22px;
    }
  }
  p:last-child{
    font-size: 0.875rem;
    color: ${props=> props.theme["base-text"]};
    padding-left: 1.875rem;
  }
`
export const AdressForm = styled.form`
  

  input{
    background-color: ${props=> props.theme["base-input"]};
    border: none;
    height: 2.625rem;
    margin-bottom: 1rem;
    padding: 0.725rem;
    font-size: 0.875rem;
    color: ${props=>props.theme["base-text"]};
    border-radius: 6px;
  }
  input::placeholder{
    color: ${props=> props.theme["base-label"]};
  }
`