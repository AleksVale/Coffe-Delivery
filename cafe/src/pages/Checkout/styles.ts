import styled from "styled-components";

export const LayoutCheckout = styled.div`
  display: flex;
  padding: 0 10rem;
  gap: 2rem;
`
export const CheckoutInfos = styled.form`
  
  max-width: 40rem;
  border-radius: 4px;
`
export const First = styled.div`
margin-top: 1rem;
padding: 2.5rem 2.5rem 2rem;
background-color: ${props => props.theme["base-card"]};
border-radius: 4px;
`
export const Second = styled.div`
margin-top: 0.75rem;
padding: 2.5rem 2.5rem 2rem;
background-color: ${props => props.theme["base-card"]};
border-radius: 4px;
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
export const AdressForm = styled.div`
  
  p{
    display: flex;
    gap: 0.75rem;
  }
  input{
    display: inline-block;
    background-color: ${props=> props.theme["base-input"]};
    width: 12.5rem;
    border: none;
    height: 2.625rem;
    margin-bottom: 1rem;
    padding: 0.725rem;
    font-size: 0.875rem;
    color: ${props=>props.theme["base-text"]};
    border-radius: 6px;
  }
  p:nth-child(2){
    input{
      width: 100%;
    }
  }
    p:nth-child(3){
      input:first-child{
      width: 12.5rem;
    }
    input:last-child{
      width: calc(100% - 13rem);
    }
  }
  p:last-child{
    
    input:first-child{
     max-width: 12.5rem;
    }
    input:last-child{
      width: 3.75rem;
    }
  }



  input::placeholder{
    color: ${props=> props.theme["base-label"]};
  }
`
export const PaymentForm = styled.div`
padding-bottom: 2rem;
 p{
  display:flex;
  align-items: center;
  gap: 0.5rem;

  span:first-child{
    color: ${props=> props.theme["purple"]};
    font-size: 1rem;
  }
  span:last-child{
    color: ${props=> props.theme["base-subtitle"]};
    font-size: 1rem;
  }
 }
 p:last-child{
  color: ${props=> props.theme['base-text']};
  font-size: 0.825rem;
  padding-left: 1.875rem;
 }
`
export const TypePayment = styled.div`
    display: flex;
    color: ${props=> props.theme['base-text']};
    flex: 1 1 0px;

    span{
      color: ${props=> props.theme['purple']};
    }
    label{
      display: flex;
      padding: 1rem;
      gap: 0.75rem;
      align-items: center;
      font-size: 0.7rem;
      background-color: ${props=> props.theme['base-button']};
      margin-right: 0.75rem;
      border-radius: 6px;
    }
    input{
      /* visibility: hidden; */
    }
    input[type="radio"]:checked+label{
      background-color: red;
    }
`