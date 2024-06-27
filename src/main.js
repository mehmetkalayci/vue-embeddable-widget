import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

function mountWidget(el) {
    createApp(App).mount(el);
}

window.mountWidget = mountWidget;

const widgetMode = import.meta.env.VITE_WIDGET_MODE;

if (widgetMode === 'development') {
    createApp(App).mount('#app');
}