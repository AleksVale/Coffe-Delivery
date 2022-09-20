import { Cafe, CardFinal, CartButton, Preco, Tag, Tags } from "./styles";
import {Minus, Plus, ShoppingCart } from 'phosphor-react'
import { useState } from "react";
interface cafe{
  'name': string,
  'quantidadeCafe': number,
  'valor': number
}
interface cafeProps{
  'image': string,
  'tags': string[],
  'name': string,
  'description': string,
  'adicionarCarrinho': (cafe:cafe) => void
}

export function CafeType(props : cafeProps){
  const [quantidadeCafe, setQuantidadeCafe] = useState(1)
  const esseCafe = {
    'name': props.name,
    'quantidade': quantidadeCafe,
    'value': 9.90
  }


  


  function diminuiCafe(){
    setQuantidadeCafe(quantidadeCafe - 1)
  }
  function aumentaCafe(){
    setQuantidadeCafe(quantidadeCafe + 1)
  }



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
         <button onClick={diminuiCafe}><Minus/></button><span>{quantidadeCafe}</span><button onClick={aumentaCafe}><Plus/></button>
        </div>
        <CartButton onClick={aumentaCafe}>
         <ShoppingCart size={22} weight="fill" />
        </CartButton>
        </CardFinal>
        
      </Preco>
    </Cafe>
  )
}