import logo  from '../../assets/logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { Head } from './styles'
export function Header(){

  return(
    <Head>
        <img src={logo} alt="" />
        <nav>
          <span><MapPin size={22}  weight="fill" /> Porto Alegre, RS</span>
          <a href="#"><ShoppingCart size={22}  weight="fill"/></a>
        </nav>     
    </Head>
  )
}