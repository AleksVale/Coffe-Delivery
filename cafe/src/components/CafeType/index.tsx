import { Cafe, CardFinal, CartButton, Preco, Tag, Tags } from "./styles";
import {Minus, Plus, ShoppingCart } from 'phosphor-react'
import { useState } from "react";

interface cafeProps{
  'image': string,
  'tags': string[],
  'name': string,
  'description': string,
}

export function CafeType(props : cafeProps){
  interface coffesType {
    'name': string,
    'quantidade': number,
    'value': number,
  }
  const [quantidadeCafe, setQuantidadeCafe] = useState(1)
  const [coffesToBuy, setCoffesToBuy] = useState([{}])

  const esseCafe = {
    'name': props.name,
    'quantidade': quantidadeCafe,
    'value': 9.90
  }

  function adicionaAsCompras(){
  const newCoffes = [...coffesToBuy, esseCafe]
  setCoffesToBuy(newCoffes)
  const carrinho = localStorage.getItem('carrinhoCafeRocket')
  console.log(carrinho)
  console.log(coffesToBuy)
  if(carrinho==null){
    localStorage.setItem('carrrinhoCafeRocket', JSON.stringify(coffesToBuy))
  }
  else{
    const novoCarrinho = JSON.parse(carrinho).concat(coffesToBuy)
    localStorage.setItem('carrinhoCafeRocket', JSON.stringify(novoCarrinho))
  }
  console.log(carrinho)
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
        <CartButton onClick={adicionaAsCompras}>
         <ShoppingCart size={22} weight="fill" />
        </CartButton>
        </CardFinal>
        
      </Preco>
    </Cafe>
  )
}