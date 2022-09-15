import { AdressForm, CheckoutInfos, HeaderForm, LayoutCheckout } from "./styles";
import { MapPinLine } from "phosphor-react";

export function Checkout(){

  return(
    <LayoutCheckout>
      <div>
        <h3>Complete seu pedido</h3>
        <CheckoutInfos>
         <HeaderForm> 
            <p><span><MapPinLine size={22} /></span> Endereço de Entrega</p>
            <p>Informe o endereço onde deseja receber seu pedido</p>
          </HeaderForm>
          <AdressForm>
            <p><input type="text" placeholder="CEP"/></p>
            <p><input type="text" placeholder="Rua"/></p>
            <p><input type="text" placeholder="Número"/>  <input type="text" placeholder="Complemento" /></p>
            <p><input type="text" placeholder="Bairro" /> <input type="text" placeholder="Cidade"/> <input type="text" placeholder="UF"/></p>
          </AdressForm>
        </CheckoutInfos>
        
      </div>
      <div>mundo</div>
    </LayoutCheckout>
  )
}