import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ThemeProvider } from '@zeturn/watercolor-react'
import '@zeturn/watercolor-react/style.css'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider defaultMode="light">
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
