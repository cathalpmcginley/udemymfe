import { createApp} from 'vue'
import Dashboard from './components/Dashboard.vue'

const mount = (el) => {
    if (el) {
        const app = createApp(Dashboard)
        app.mount(el)
    }
}
if (process.env.NODE_ENV === 'development') {
    const el = document.querySelector('#local-sandbox-dashboard')
    if (el) {
        mount(el)
    }

}

export { mount }
