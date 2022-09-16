import styled from "styled-components";

export const LayoutCheckout = styled.form`
  display: flex;
  padding: 0 10rem;
  gap: 2rem;
`
export const CheckoutInfos = styled.div`
  
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
  input:focus{
    outline: 1px solid ${props=>props.theme["yellow-dark"]};
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
      visibility: hidden;
    }
`

//lado direito da página

  export const RightCard = styled.div`
    max-width: 40rem;
    background-color: ${props=> props.theme['base-card']};
    margin-top:1rem;
    padding: 1rem 2.5rem 2.5rem;
    border-top-right-radius:35px;
    border-bottom-left-radius:35px;
  `
  export const CoffeInfos = styled.div`
  display:flex;
  gap: 1.25rem;
  padding: 1.5rem 0;
  border-bottom: 1px solid ${props=> props.theme["base-button"]};
  div{
    p{
      display:flex;
      align-items:center; 
    }
  }
  img{
    max-width: 4rem;
    max-height: 4rem;
  }
  `
  export const DefaultButton = styled.div`
   padding: 0.2rem;
    margin-top: 0.5rem;
    font-size: 0.725rem;
    background-color: ${props=> props.theme['base-button']};
    vertical-align: middle;
    border-radius:6px;
      display: flex;
      align-items: center;
      gap: 0.3rem;
    
  button{
    border: none;
    padding: 0.4rem;
    background-color: transparent;
    display: flex;
    gap: 0.2rem;
    color: ${props=> props.theme['purple']};
    cursor: pointer;

    span{
      color: ${props=> props.theme['base-text']};
      font-size: 0.725rem;
    }
  }
  `
  export const PlusLessButton = styled(DefaultButton)`
    margin-right: 1rem;
    font-size: 1rem;
    button{
      padding: 0 0.2rem;
      transition: all 0.3s ease;
    }
    button:hover{
      color: ${props=> props.theme['purple-dark']};
    }
  `
  export const Valor = styled.div`
    color: ${props=> props.theme["base-text"]};
    font-weight: 700;
  `
  export const ValuesInfo = styled.div`
  padding: 1.5rem 0 0;
  span{
 
  }
  p{
   display: flex;
   justify-content: space-between;
   padding-bottom: 0.75rem;
  
    color: ${props=> props.theme["base-text"]};
    font-size: 0.825rem;
    span:last-child{
      font-size: 1rem;
    }
  }
  // preco final
  div{
   display: flex;
   justify-content: space-between;
   padding-bottom: 1.25rem;
    span{
      color: ${props=> props.theme["base-subtitle"]};
      font-weight: 700;
      font-size: 1.25rem;
  }
  }
  //payment button
  button{
    display: flex;
    width: 100%;
    justify-content: center;
    padding: 0.75rem 0;
    border: none;
    border-radius: 8px;
    background: ${props=> props.theme["yellow"]};
    color: ${props=> props.theme["white"]};
    transition: all 0.4s ease;
    cursor:pointer;
  }
  button:hover{
    background: ${props=> props.theme["yellow-dark"]};
  }
  
  `