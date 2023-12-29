<template>
  <div class="flex gap-3">
    <Button
      @click="openNotification('primary', 'bottom-right')"
      icon
      color="primary"
      size="md"
    >
    <Icon icon="fa:home" width="18" height="18" />
  </Button>
  <Button
    @click="openNotification('secondary', 'bottom-center')"
    icon
    color="secondary"
    size="md"
  >
  <Icon icon="fa:home" width="18" height="18" />
</Button>
  <Button
    @click="openNotification('success', 'bottom-left')"
    icon
    color="success"
    size="md"
  >
  <Icon icon="fa:home" width="18" height="18" />
</Button>
  <Button
    @click="openNotification('warning', 'top-left')"
    icon
    color="warning"
    size="md"
  >
  <Icon icon="fa:home" width="18" height="18" />
</Button>
  <Button
    @click="openNotification('danger', 'top-center')"
    icon
    color="danger"
    size="md"
  >
  <Icon icon="fa:home" width="18" height="18" />
</Button>
  <Button
    @click="openNotification('dark', 'top-right')"
    icon
    color="dark"
    size="md"
  >
  <Icon icon="fa:home" width="18" height="18" />
</Button>

  </div>
</template>

<script setup>
import { h } from 'vue';
import { Icon } from '@iconify/vue';
import Button from '../button/Button.vue';

import { useNotification, notify } from 'vue-modern-notification';

const toast = useNotification();

function openNotification(color, position){
  notify({
      color,
      position,
      icon: h(Icon, {
        icon: 'fa:home'
      }),
      title: 'Toaster title goes here',
      text: 'This is a modern vue 3 toaster plugin copied the idea, styles and functionality from VueSax component library. '
  })
}
</script>