<template>
  <div class="flex gap-3">
    <Button
      @click="openNotification('primary', 'bottom-right')"
      icon
      color="primary"
      size="md"
    >
    Default
    </Button>
    <Button
      @click="openNotification('secondary', 'top-right', false)"
      icon
      color="secondary"
      size="md"
    >
    None
    </Button>
    <Button
      @click="openNotification('success', 'top-center', 10000)"
      icon
      color="success"
      size="md"
    >
    10 seconds
    </Button>
    <Button
      @click="openNotification('warning', 'top-left', 1000)"
      icon
      color="warning"
      size="md"
    >
    1 second
    </Button>
    <Button
      @click="openNotification('danger', 'bottom-left', 3000)"
      icon
      color="danger"
      size="md"
    >
    3 seconds
    </Button>
  </div>
</template>

<script setup>
import { Icon } from '@iconify/vue';
import Button from '../button/Button.vue';

import { useNotification, notify } from 'vue-modern-notification';

const toast = useNotification();

function openNotification(color, position, duration = true){
  notify({
    color,
    position,
    duration,
    showProgress: true,
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