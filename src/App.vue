<template>
  <div class="p-10">
    <Button color="primary" @click="notify" size="sm">
      Notify
    </Button>
  </div>
</template>
<script setup>
import { ref } from "vue";
import Button from "@/components/button/Button.vue";
import { useNotification } from "@/plugins/notification";

const showModal = ref(false);
const toast = useNotification();

const notify = ()=>{
  toast.warning({
      showProgress: true,
      // duration: false,
      border: 'danger',
      // flat: true,
      position: 'top-right',
      title: 'Documentation Vuesax 4.0+',
      text: 'These documents refer to the latest version of vuesax (4.0+), to see the documents of the previous versions you can do it here 👉 Vuesax 3.x'
  })
}
</script>
