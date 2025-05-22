/* @refresh reload */
import { render } from 'solid-js/web'
import './app.css'
import 'uno.css'
import '@unocss/reset/tailwind.css'
import '@fontsource/poppins/500.css'
import App from './App.jsx'

const root = document.getElementById('root')

render(() => <App />, root)
