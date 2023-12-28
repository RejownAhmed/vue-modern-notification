---
title: 'Installation'
outline: deep
---

# Get started
To get started with our plugin/package, first you have to install the package using ``npm`` or ``yarn``.
Follow along the guide to use it properly in your project.

## Installation
### Using npm

```bash
npm install vue-modern-notification
```

### Using Yarn
```bash
yarn add vue-modern-notification
```

## Creating the app
```javascript
import { createApp } from 'vue';
import App from "@/App.vue";
import VueModernNotification from 'vue-modern-notification';
// ... other imports

const app = createApp()

app.use(VueModernNotification);
    .mount("#app")

```

## Configuration
Currently, we only support the customization of default colors to match your projects theme. Feel free to give a **pool request** with new customization abilities. 😃

### Default colors
- <div class="flex gap-3">Primary <span class="bg-primary w-[25px] h-[25px] rounded"></span></div>
- <div class="flex gap-3">Secondary <span class="bg-secondary w-[25px] h-[25px] rounded"></span></div>
- <div class="flex gap-3">Success <span class="bg-success w-[25px] h-[25px] rounded"></span></div>
- <div class="flex gap-3">Warning <span class="bg-warning w-[25px] h-[25px] rounded"></span></div>
- <div class="flex gap-3">Danger <span class="bg-danger w-[25px] h-[25px] rounded"></span></div>

:::tip
Put the RGB numerical color values as an array. 

For example: ``rgb(255, 255, 255)`` would be ``[255,255,255]``
:::

```javascript
// Config
const config = {
  colors: {
    primary: [26,92,255],
    // ....
    danger: [242,19,93] // Used for error toaster
  }
}

app.use(VueModernNotification, config)
  .mount("#app")
```