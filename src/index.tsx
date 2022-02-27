import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './App'
import { AppContextContainer } from './components/AppContextContainer'

import './styles/normalize.css'
import './styles/variables.css'

ReactDOM.render(
  <React.StrictMode>
    <AppContextContainer>
      <App />
    </AppContextContainer>
  </React.StrictMode>,
  document.getElementById('root'),
)
