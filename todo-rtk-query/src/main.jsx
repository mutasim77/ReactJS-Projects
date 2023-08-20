import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App/App'
import { Provider } from 'react-redux';
import store from './store/store';
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
