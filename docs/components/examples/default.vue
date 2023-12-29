<template>
  <div>
    <Button
      @click="openNotification"
    >
      Open notification
    </Button>
  </div>
</template>

<script setup>
import Button from '../button/Button.vue';

import { useNotification } from 'vue-modern-notification';

const toast = useNotification();

function openNotification(){
  toast.primary({
    duration: false,
    position: 'top-right',
    title: 'This is a modern notification plugin',
    text: 'The idea, design and functionality all are copied from VueSax component library. Thanks to them for sharing such a library.'
  });
}
</script>