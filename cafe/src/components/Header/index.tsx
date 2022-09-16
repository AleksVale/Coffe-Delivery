import logo  from '../../assets/logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { Head } from './styles'
export function Header(){

  return(
    <Head>
        <a href="/"><img src={logo} alt="" /></a>
        <nav>
          <span><MapPin size={22}  weight="fill" /> Porto Alegre, RS</span>
          <a href="/checkout"><ShoppingCart size={22}  weight="fill"/></a>
        </nav>     
    </Head>
  )
}