<template>
  <div class="p-10">
    <div class="flex gap-3">
      <Button color="primary" @click="notify" size="sm">
        Notify
      </Button>
  </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import Button from "@/components/button/Button.vue";
import Modal from "@/components/modal/Modal.vue";
import { useNotification } from "@/plugins/notification";

const showModal = ref(false);
const toast = useNotification();

const notify = ()=>{
  toast.primary({
      duration: false,
      // showProgress: true,
      border: 'warning',
      position: 'top-right',
      title: 'Documentation Vuesax 4.0+',
      text: 'These documents refer to the latest version of vuesax (4.0+), to see the documents of the previous versions you can do it here 👉 Vuesax 3.x'
  })
}
</script>
