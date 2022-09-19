import {ShoppingCart, Timer, Coffee, Package } from 'phosphor-react'
import imagem from '../../assets/Imagem.png'
import { CafeType } from '../../components/CafeType'
import { Card, Card1, Card2, Card3, Card4, Intro, Title,Content } from './style'
import expressoTradicional from '../../assets/expressoTradicional.png'
import expressoAmericano from '../../assets/expressoAmericano.png'
import cafeLeite from '../../assets/cafeLeite.png'
import capuccino from '../../assets/capuccino.png'
import chocolateQuente from '../../assets/chocolateQuente.png'
import expressoCremoso from '../../assets/expressoCremoso.png'
import expressoGelado from '../../assets/expressoGelado.png'
import irlandes from '../../assets/irlandes.png'
import latte from '../../assets/latte.png'
import machiatto from '../../assets/machiatto.png'
import mocaccino from '../../assets/mocaccino.png'
import cubano from '../../assets/cubano.png'
import havaiano from '../../assets/havaiano.png'
import arabe from '../../assets/arabe.png'
import { useState } from 'react'



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
        <CafeType image = {expressoTradicional} tags={['Tradicional']} name='Expresso Tradicional' description='O tradicional café feito com água quente e grãos moídos'/>
        <CafeType image = {expressoAmericano} tags={['Tradicional']} name='Expresso Americano' description='Expresso diluído, menos intenso que o original'/>
        <CafeType image = {expressoCremoso} tags={['Tradicional']} name='Expresso Cremoso' description='Café expresso tradicional com espuma cremosa'/>
        <CafeType image = {expressoGelado} tags={['Tradicional','Gelado']} name='Expresso Gelado' description='Bebida preparada com café expresso e cubos de gelo'/>
        <CafeType image = {cafeLeite} tags={['Tradicional','COM LEITE']} name='Café com Leite' description='Meio a meio de expresso tradicional com leite vaporizado'/>
        <CafeType image = {latte} tags={['Tradicional','COM LEITE']} name='Latte' description='Uma dose de expresso com o dobro de leite e espuma cremosa'/>
        <CafeType image = {capuccino} tags={['Tradicional','COM LEITE']} name='Capuccino' description='Bebida de canela feita de doses iguais de café, leite e espuma'/>
        <CafeType image = {machiatto} tags={['Tradicional','COM LEITE']} name='Machiatto' description='Café expresso misturado com um pouco de leite quente e espuma'/>
        <CafeType image = {mocaccino} tags={['Tradicional','COM LEITE']} name='Mocaccino' description='Café expresso com calda de chocolate, pouco leite e espuma'/>
        <CafeType image = {chocolateQuente} tags={['Especial','COM LEITE']} name='Chocolate Quente' description='Bebida feita com chocolate dissolvido no leite quente e café'/>
        <CafeType image = {cubano} tags={['Especial', 'ALCOÓLICO','GELADO']} name='Cubano' description='Drink gelado de café expresso com rum,creme de leite e hortelã'/>
        <CafeType image = {havaiano} tags={['Especial']} name='Havaiano' description='Bebida adocicada preparada com café e leite de coco'/>
        <CafeType image = {arabe} tags={['Especial']} name='Árabe' description='Bebida preparada com grãos de café árabe e especiarias'/>
        <CafeType image = {irlandes} tags={['Especial','ALCOÓLICO']} name='Árabe' description='Bebida a base de café, uísque irlândes,açucar e chantilly'/>




      </div>
    </Content>
    </>

  )
}