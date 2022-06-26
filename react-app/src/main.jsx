import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './App.css'
import './assets/font/iconfont.css'
import 'font-awesome/css/font-awesome.min.css'
import 'swiper/dist/css/swiper.min.css'
import { BrowserRouter } from 'react-router-dom'
import './style/reset.css'
import './style/style.css'
ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
    <App />
    </BrowserRouter>
    
)
