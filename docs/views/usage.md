---
title: 'Usage guide'
outline: deep
---

# Usage Guide
Using our plugin is very simple. 😃

## Using ``useNotification`` helper
```vue
<template>
  <div>
    <button @click="primary()">Primary</button>
    <button @click="secondary()">Secondary</button>
    <button @click="success()">Success</button>
    <button @click="warning()">Warning</button>
    <button @click="danger()">Danger</button>
    <button @click="dark()">Dark</button>
    <button @click="info()">Info</button>
    <button @click="light()">Light</button>
  </div>
</template>
<script setup>
import { useNotification } from 'vue-modern-notification';

const toast = useNotification();

const primary = ()=>{
  toast.primary({
    title: "Title goes here",
    text: "Description goes here",
    //... other props 
    // (See the props page for available props)
  })
}

const secondary = ()=>{
  toast.secondary({...})
}
const success = ()=>{
  toast.success({...})
}
const warning = ()=>{
  toast.warning({...})
}
const danger = ()=>{
  toast.error({...})
}
const dark = ()=>{
  toast.dark({...})
}
const info = ()=>{
  toast.info({...})
}
const light = ()=>{
  toast.light({...})
}
</script>
```

## Using ``notify`` helper
```vue
<template>
  <div>
    <button @click="primary()">Primary</button>
    <!-- ... Others -->
  </div>
</template>
<script setup>
import { notify } from 'vue-modern-notification';

const primary = ()=>{
  notify({
    color: "primary",
    title: "Title goes here",
    text: "Description goes here",
    //... other props 
    // (See the props page for available props)
  })
}
// ... Others
</script>
```
