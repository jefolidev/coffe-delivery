import { ThemeProvider } from 'styled-components'
import { AddCartButton, RemoveButton, SubmitButton } from './components/buttons'
import { InputNumber, InputText } from './components/inputs'
import { GlobalStyles } from './styles/global'
import { defaultTheme } from './styles/themes/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <SubmitButton content="Entrar" />
      <RemoveButton content="Remover" />

      <form>
        <InputText placeholder="Nome" />
        <InputNumber placeholder="1" />
        <AddCartButton />
      </form>
      <GlobalStyles />
    </ThemeProvider>
  )
}
