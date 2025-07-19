import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx';
import { legacy_createStore as createStore } from 'redux'

import rootReducer from './Services/Reducers/Index'
import { Provider } from 'react-redux';
const store = createStore(rootReducer);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
)
