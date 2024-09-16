// import './app.css'
import App from './App.svelte'
import { mount } from "svelte"
import initUnocssRuntime from '@unocss/runtime'
import config from './uno.config'

initUnocssRuntime({ defaults: config })

const app = mount(App, {
  target: document.getElementById('app'),
})

export default app
