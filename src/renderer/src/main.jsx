import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { HashRouter } from 'react-router-dom'
import { ServiceContextProvider } from './Context/Contexto'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ServiceContextProvider>
    <HashRouter >
      <App />
    </HashRouter>
  </ServiceContextProvider>
)
