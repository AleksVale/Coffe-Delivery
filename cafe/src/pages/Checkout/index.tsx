import { AdressForm, CheckoutInfos, First, HeaderForm, LayoutCheckout, PaymentForm, Second, TypePayment } from "./styles";
import { MapPinLine, CurrencyDollar, CreditCard, Bank, Money } from "phosphor-react";

export function Checkout(){

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
               <label htmlFor="cartao"><span><CreditCard size={20} weight="thin" /></span>
                CARTÃO DE CRÉDITO</label>
                <input type="radio" id="cartao" value="cartao" name="pagamento"/>
              </div>
              <div>
               <label htmlFor="debito"><span><Bank size={20} weight="thin" /></span>
                CARTÃO DE DÉBITO</label>
                <input type="radio" id="debito" value="debito" name="pagamento"/>
              </div>
              <div>
               <label htmlFor="dinheiro"><span><Money size={20} weight="thin" /></span>
                DINHEIRO</label>
                <input type="radio" id="dinheiro" value="dinheiro" name="pagamento"/>
              </div>
            </TypePayment>
          </Second>
        </CheckoutInfos>
        
      </div>
      <div>mundo</div>
    </LayoutCheckout>
  )
}