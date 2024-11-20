import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { Router } from './routes/route'

import { CoffeeCartProvider } from './context/coffee-context'
import { GlobalStyles } from './styles/global'
import { defaultTheme } from './styles/themes/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CoffeeCartProvider>
          <Router />
        </CoffeeCartProvider>
      </BrowserRouter>
      <GlobalStyles />
    </ThemeProvider>
  )
}
