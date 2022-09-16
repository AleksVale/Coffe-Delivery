import { AdressForm, CheckoutInfos, CoffeInfos, First, HeaderForm, PlusLessButton, LayoutCheckout, DefaultButton, PaymentForm, RightCard, Second, TypePayment } from "./styles";
import { MapPinLine, CurrencyDollar, CreditCard, Bank, Money, Minus, Plus, Trash } from "phosphor-react";
import cafeExpresso from '../../assets/expressoTradicional.png'

export function Checkout(){
  function isChecked(){
    const cartao = document.getElementById('cartao') as HTMLInputElement
    const  label1 = document.getElementById('cartaoLabel')

    const debito = document.getElementById('debito') as HTMLInputElement
    const  label2 = document.getElementById('debitoLabel')

    const dinheiro = document.getElementById('dinheiro') as HTMLInputElement
    const  label3 = document.getElementById('dinheiroLabel')
    if (cartao.checked){
    if (label3 != null && label2 != null && label1 != null){
    label1.style.border = '1px solid purple'
    label2.style.border = 'none'
    label3.style.border = 'none'
    } 
    }
   
    if (debito.checked){
      if (label3 != null && label2 != null && label1 != null){
      label2.style.border = '1px solid purple'
      label1.style.border = 'none'
      label3.style.border = 'none'
      } 
      }
       if (dinheiro.checked){
    
        if (label3 != null && label2 != null && label1 != null){
        label3.style.border = '1px solid purple'
        label1.style.border = 'none'
        label2.style.border = 'none'
        } 
        }

    
  }



  return(
    <LayoutCheckout>
      <div>
        <h3>Complete seu pedido</h3>
        <CheckoutInfos>
          <First>
         <HeaderForm> 
            <p><span><MapPinLine size={22} /></span> Endereço de Entrega</p>
            <p>Informe o endereço onde deseja receber seu pedido</p>
          </HeaderForm>
            <AdressForm>
              <p><input type="text" placeholder="CEP" required/></p>
              <p><input type="text" placeholder="Rua" required/></p>
              <p><input type="text" placeholder="Número" required/>  <input type="text" placeholder="Complemento" /></p>
              <p><input type="text" placeholder="Bairro" required/> <input type="text" placeholder="Cidade" required/> <input type="text" required placeholder="UF"/></p>
            </AdressForm>
          </First>
          <Second>
            <PaymentForm>
              <p><span><CurrencyDollar size={22} weight="fill"/></span> <span>Pagamento</span></p>
              <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
            </PaymentForm>
            <TypePayment>
              <div>
               <label htmlFor="cartao" id="cartaoLabel"><span><CreditCard size={20} weight="thin" /></span>
                CARTÃO DE CRÉDITO</label>
                <input onChange={isChecked} type="radio" id="cartao" value="cartao" name="pagamento"/>
              </div>
              <div>
               <label id="debitoLabel" htmlFor="debito"><span><Bank size={20} weight="thin" /></span>
                CARTÃO DE DÉBITO</label>
                <input onChange={isChecked}  type="radio" id="debito" value="debito" name="pagamento"/>
              </div>
              <div>
               <label id="dinheiroLabel" htmlFor="dinheiro"><span><Money size={20} weight="thin" /></span>
                DINHEIRO</label>
                <input onChange={isChecked} type="radio" id="dinheiro" value="dinheiro" name="pagamento"/>
              </div>
            </TypePayment>
          </Second>
        </CheckoutInfos>
      </div>
      <div>
      
       <h3>Cafés selecionados</h3>
      
      <RightCard>
        <CoffeInfos>
          <img src={cafeExpresso} alt="" />
          <div>
            <p>Expresso Tradicional</p>
            <p>
              <PlusLessButton><span><Minus size={14}/></span> 1 <span><Plus size={14}/></span></PlusLessButton>
              <DefaultButton><span><Trash size={14}/></span></DefaultButton>
            </p>          
          </div>
          <div>R$ <span>9,90</span></div>
        </CoffeInfos>
      </RightCard>
      </div>
    </LayoutCheckout>
  )
}