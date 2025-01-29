import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { GlobalStyle } from './themes/globalStyle.ts'
import { ThemeProvider } from 'styled-components'
import { theme } from './themes/theme.ts'

createRoot(document.getElementById('root')!).render(

  <StrictMode>
    <ThemeProvider theme={theme}>

      <GlobalStyle />
      <App />
    </ThemeProvider>
  </StrictMode>,
)
