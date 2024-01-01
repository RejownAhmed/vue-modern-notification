<template>
  <div class="flex gap-3">
    <Button
      @click="openNotification('bottom-right')"
      icon
      size="md"
    >
    <Icon icon="bx:border-radius" rotate="-270deg" width="18" height="18" />
    </Button>
    <Button
      @click="openNotification('top-right')"
      icon
      size="md"
    >
    <Icon icon="bx:border-radius" rotate="0deg" width="18" height="18" />
    </Button>
    <Button
      @click="openNotification('top-center')"
      icon
      size="md"
    >
    <Icon icon="bx:border-top" rotate="0deg" width="18" height="18" />
    </Button>
    <Button
      @click="openNotification('top-left')"
      icon
      size="md"
    >
    <Icon icon="bx:border-radius" rotate="-90deg" width="18" height="18" />
    </Button>
    <Button
      @click="openNotification('bottom-left')"
      icon
      size="md"
    >
    <Icon icon="bx:border-radius" rotate="-180deg" width="18" height="18" />
    </Button>
    <Button
      @click="openNotification('bottom-center')"
      icon
      size="md"
    >
    <Icon icon="bx:border-bottom" width="18" height="18" />
    </Button>
  </div>
</template>

<script setup>
import { Icon } from '@iconify/vue';
import Button from '../button/Button.vue';

import { notify } from 'vue-modern-notification';

function openNotification(position){
  notify({
    position,
    title: 'This is a modern notification plugin',
    text: 'The idea, design and functionality all are copied from VueSax component library. Thanks to them for sharing such a library.'
  });
}
</script>