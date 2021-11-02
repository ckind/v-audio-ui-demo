import { createApp } from 'vue'
import App from './App.vue'
import VAudioUI from "v-audio-ui"

const app = createApp(App);

app.use(VAudioUI);
app.mount('#app')
