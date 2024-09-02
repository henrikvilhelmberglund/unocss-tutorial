// import './app.css'
import './app2.css'
import App from './App.svelte'
import { mount } from "svelte"
import 'virtual:uno.css'

const app = mount(App, {
  target: document.getElementById('app'),
})

export default app
