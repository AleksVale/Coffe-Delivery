import { Cafe, CardFinal, CartButton, Preco, Tag } from "./styles";
import {Minus, Plus, ShoppingCart } from 'phosphor-react'
import expressoTradicional from '../../assets/expressoTradicional.png'

export function CafeType(){

  return(
    <Cafe>
      <img src={expressoTradicional}></img>
      <Tag>TRADICIONAL</Tag>
      <h3>Expresso Tradicional</h3>
      <p>O tradicional café feito com água quente e grãos moídos</p>
      <Preco>
        <div>R$ <span>9,90</span></div>
        <CardFinal>
        <div>
         <button><Minus/></button><span>1</span><button><Plus/></button>
        </div>
        <CartButton>
         <ShoppingCart size={22} weight="fill" />
        </CartButton>
        </CardFinal>
        
      </Preco>
    </Cafe>
  )
}