import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import App from './App.tsx'
import './index.css'
import { store } from './redux/store.ts'

createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <StrictMode>
            <App />
            <ToastContainer
                position="top-right"
                autoClose={2000}
                newestOnTop={true}
                limit={3}
            />
        </StrictMode>
    </Provider>
)
