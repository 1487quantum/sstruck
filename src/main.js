import { createApp } from 'vue'
import App from './App.vue'
<<<<<<< Updated upstream

createApp(App).mount('#app')
=======
import router from './router'
import Toast, { POSITION } from "vue-toastification"
import "vue-toastification/dist/index.css";

const app = createApp(App)
let options = {
    position: POSITION.TOP_RIGHT
  }

app.use(Toast, options)
app.use(router)
app.mount('#app')
>>>>>>> Stashed changes
