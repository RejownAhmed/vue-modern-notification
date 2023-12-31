<template>
  <div class="flex gap-3">
    <Button
      @click="openNotification('primary', 'bottom-right')"
      icon
      color="primary"
      size="md"
    >
    <Icon icon="bx:border-radius" rotate="-270deg" width="18" height="18" />
    </Button>
    <Button
      @click="openNotification('secondary', 'top-right')"
      icon
      color="secondary"
      size="md"
    >
    <Icon icon="bx:border-radius" rotate="0deg" width="18" height="18" />
    </Button>
    <Button
      @click="openNotification('success', 'top-center')"
      icon
      color="success"
      size="md"
    >
    <Icon icon="bx:border-top" rotate="0deg" width="18" height="18" />
    </Button>
    <Button
      @click="openNotification('warning', 'top-left')"
      icon
      color="warning"
      size="md"
    >
    <Icon icon="bx:border-radius" rotate="-90deg" width="18" height="18" />
    </Button>
    <Button
      @click="openNotification('danger', 'bottom-left')"
      icon
      color="danger"
      size="md"
    >
    <Icon icon="bx:border-radius" rotate="-180deg" width="18" height="18" />
    </Button>
    <Button
      @click="openNotification('dark', 'bottom-center')"
      icon
      color="dark"
      size="md"
    >
    <Icon icon="bx:border-radius" rotate="-180deg" width="18" height="18" />
    </Button>
    <Button
      @click="openNotification('info', 'top-center')"
      icon
      color="info"
      size="md"
    >
    <Icon icon="bx:border-top" width="18" height="18" />
    </Button>
    <Button
      @click="openNotification('light', 'top-right')"
      icon
      color="light"
      size="md"
    >
    <Icon icon="bx:border-radius" width="18" height="18" />
    </Button>
  </div>
</template>

<script setup>
import { Icon } from '@iconify/vue';
import Button from '../button/Button.vue';

import { useNotification, notify } from 'vue-modern-notification';

const toast = useNotification();

function openNotification(color, position){
  notify({
    color,
    position,
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