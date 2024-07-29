import './app.css'
import App from './App.svelte'
import 'virtual:uno.css'
import { mount } from "svelte"

const app = mount(App, {
  target: document.getElementById('app'),
})

export default app
