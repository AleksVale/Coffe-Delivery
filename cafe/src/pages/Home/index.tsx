import {ShoppingCart, Timer, Coffee, Package } from 'phosphor-react'
import imagem from '../../assets/Imagem.png'
import { CafeType } from '../../components/CafeType'
import { Card, Card1, Card2, Card3, Card4, CardType, Intro, Title,Content } from './style'

export function Home(){

  return(
    <>
    <Intro>
      <div>
        <Title>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
        </Title>
        <Card>
          <div>
            <p><Card1><ShoppingCart size={16} weight="fill" /></Card1><span>Compra simples e segura</span></p>
            <p><Card2><Timer size={16} weight="fill"/> </Card2><span>Entrega rápida e rastreada</span></p>
          </div>
          <div>
            <p><Card3><Package size={16} weight="fill"/></Card3><span>Embalagem mantém o café intacto</span></p>
            <p><Card4><Coffee size={16} weight="fill"/></Card4> <span> O café chega fresquinho até você</span></p>
          </div>
        </Card>
      </div>
      <img src={imagem} alt="" />
    </Intro>
    <Content>
      <h1>Nossos cafés</h1>
      <div>
        <CafeType/>
        <CafeType/>
        <CafeType/>
        <CafeType/>
        <CafeType/>
        <CafeType/>
        <CafeType/>
        <CafeType/>
      </div>
    </Content>
    </>

  )
}