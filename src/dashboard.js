// In your dashboard entry point (e.g., dashboard.js)
import { createApp } from 'vue'
import DashboardApp from './components/pages/dashboardmain/App.vue'
import dashboardRouter from './dashboardRouter'

const app = createApp(DashboardApp)
app.use(dashboardRouter)
app.mount('#dashboard-app')
