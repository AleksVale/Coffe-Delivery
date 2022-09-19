import { Cafe, CardFinal, CartButton, Preco, Tag, Tags } from "./styles";
import {Minus, Plus, ShoppingCart } from 'phosphor-react'

interface cafeProps{
  'image': string,
  'tags': string[],
  'name': string,
  'description': string,
}

export function CafeType(props : cafeProps){

  return(
    <Cafe>
      <img src={props.image}></img>
      <Tags>
        {props.tags.map(tag => (
          <Tag>{tag}</Tag>
        ))}
      </Tags>
      
      <h3>{props.name}</h3>
      <p>{props.description}</p>
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