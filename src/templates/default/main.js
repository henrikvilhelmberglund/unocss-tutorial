// import './app.css'
import './app2.css'
import App from './App.svelte'
import '@unocss/reset/tailwind.css'
import 'virtual:uno.css'
import { mount } from "svelte"

const app = mount(App, {
  target: document.getElementById('app'),
})

export default app
