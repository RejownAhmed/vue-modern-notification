<template>
  <div class="flex gap-3">
    <Button
      @click="openNotification('primary', 'bottom-right', 'auto')"
      icon
      color="primary"
      size="md"
    >
    Auto
    </Button>
    <Button
      @click="openNotification('secondary', 'top-right', '100%')"
      icon
      color="secondary"
      size="md"
    >
    100%
    </Button>
    <Button
      @click="openNotification('success', 'top-center', '50%')"
      icon
      color="success"
      size="md"
    >
    50%
    </Button>
    <Button
      @click="openNotification('warning', 'top-left', '5rem')"
      icon
      color="warning"
      size="md"
    >
    5rem
    </Button>
    <Button
      @click="openNotification('danger', 'bottom-left', '200px')"
      icon
      color="danger"
      size="md"
    >
    200px
    </Button>
  </div>
</template>

<script setup>
import Button from '../button/Button.vue';

import { useNotification, notify } from 'vue-modern-notification';

const toast = useNotification();

function openNotification(color, position, width){
  notify({
    color,
    position,
    width,
    title: 'This is a modern notification plugin',
    text: 'The idea, design and functionality all are copied from 👉 VueSax component library. Thanks to them for sharing such a library.'
  });

  // You can also call like:-

  // Example:-
  // toast.primary({
  //   // .. other options
  // })
  // Or
  // toast.error({
  //   // .. other options
  // })
}
</script>