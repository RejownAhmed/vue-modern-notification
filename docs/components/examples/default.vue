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
    position: 'top-right',
    title: "This is demo title",
    text: "This is demo text ddfg fdg fgh hfg hg hgh jhg jhjk jkj kj kj ljk lkllkl",
  });
}
</script>