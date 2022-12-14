import { createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
*{
  margin:0;
  padding:0;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
}
body{
  background-color: ${props=> props.theme['background']};
  max-width: 1440px;
  margin: 0 auto;
}
body,input,button,textarea{
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
}
`