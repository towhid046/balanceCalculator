import React from 'react'
import ReactDOM from 'react-dom/client'
import ContextProvider from './context/GlobalState.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <ContextProvider/>
  </React.StrictMode>,
)
