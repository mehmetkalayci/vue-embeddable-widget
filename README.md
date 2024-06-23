# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

Learn more about IDE Support for Vue in the [Vue Docs Scaling up Guide](https://vuejs.org/guide/scaling-up/tooling.html#ide-support).

# Vue.js 3 Embeddable Widget

define window.mountWidget method in the main.js
```
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

function mountWidget(el) {
    createApp(App).mount(el);
}

window.mountWidget = mountWidget;
```


vite.config.js
```
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: './src/main.js',
      name: 'MyWidget',
      fileName: (format) => `my-widget.${format}.js`
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
});
```

run the following command ```npm run build```

widget.js
```
(function() {
  function loadScript(src, callback) {
    const script = document.createElement('script');
    script.src = src;
    script.onload = callback;
    document.head.appendChild(script);
  }

  function mountWidget() {
    const widgetContainer = document.createElement('div');
    widgetContainer.id = 'my-widget-container';
    document.body.appendChild(widgetContainer);

    window.mountWidget('#my-widget-container');
  }

  loadScript('https://cdn.jsdelivr.net/npm/vue@3.2.45/dist/vue.global.prod.js', function() {
    loadScript('https://example.com/path/to/your/bundle/my-widget.umd.js', mountWidget);
  });
})();
```


usage
```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Embed Vue Widget</title>
</head>
<body>
  <h1>Other Website</h1>
  <script src="https://example.com/path/to/widget.js"></script>
</body>
</html>
```
