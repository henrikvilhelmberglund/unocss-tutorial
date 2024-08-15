// import './app.css'
import './app2.css'
import App from './App.svelte'
import { mount } from "svelte"
import initUnocssRuntime from '@unocss/runtime'
import config from "./uno.config.js"

initUnocssRuntime({ defaults: config })

const app = mount(App, {
  target: document.getElementById('app'),
})

export default app
