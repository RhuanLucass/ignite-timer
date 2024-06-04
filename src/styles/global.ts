import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus{
    outline: 0;
    box-sizing: 0 0 0 2px ${(props) => props.theme.green_500};
  }

  body{
    background: ${(props) => props.theme.gray_900};
    color: ${(props) => props.theme.gray_300};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button{
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }
`
