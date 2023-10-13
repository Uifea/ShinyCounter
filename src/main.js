import { createApp } from 'vue'
import App from './App.vue'
import TheFooter from '@/TheFooter.vue'
import TheHeader from '@/TheHeader'
import components from '@/components/UI'
import Vfocus from './directives/Vfocus'
import {router} from './router'
import store from './store'
import '@/style.css'

const app = createApp(App);


components.forEach(component => {
    app.component(component.name, component)
})

app.directive('focus', Vfocus)
app
    .use(store)
    .use(router)
    .mount('#app')


createApp(TheHeader).mount('#header')
createApp(TheFooter).mount('#footer')

