import { BrowserRouter } from 'react-router-dom'

import { GlobalStyle } from './styles'
import Rotas from './routes'
import Header from './components/Header'

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <Header />
        <Rotas />
      </BrowserRouter>
    </>
  )
}

export default App
