import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ToastContainer } from 'react-toastify'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <App />
        <ToastContainer
            position="top-right"
            autoClose={2000}
            newestOnTop={true}
            limit={3}
        />
    </StrictMode>
)
