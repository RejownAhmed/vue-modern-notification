<template>
  <div class="p-10">
    <div class="flex gap-3 mb-3">
      <Button color="primary" @click="primary" size="sm">
        Notify
      </Button>
      <Button color="secondary" @click="secondary" size="sm">
        Notify
      </Button>
      <Button color="success" @click="success" size="sm">
        Notify
      </Button>
      <Button color="warning" @click="warning" size="sm">
        Notify
      </Button>
      <Button color="danger" @click="danger" size="sm">
        Notify
      </Button>
    </div>
    <div class="flex gap-3">
      <Button color="primary" @click="primaryFlat" size="sm">
        Notify flat
      </Button>
      <Button color="secondary" @click="secondaryFlat" size="sm">
        Notify flat
      </Button>
      <Button color="success" @click="successFlat" size="sm">
        Notify flat
      </Button>
      <Button color="warning" @click="warningFlat" size="sm">
        Notify flat
      </Button>
      <Button color="danger" @click="dangerFlat" size="sm">
        Notify flat
      </Button>
    </div>
  </div>
</template>
<script setup>
import { h, markRaw, ref } from "vue";
import Button from "@/components/button/Button.vue";
import { useNotification } from "@/plugins/notification";
import { Icon } from "@iconify/vue";

const showModal = ref(false);
const toast = useNotification();

const primary = ()=>{
  toast.primary({
      // showProgress: true,
      // duration: false,
      flat: false,
      icon: h(Icon, {
        icon: 'fa:home'
      }),
      title: 'Toaster title goes here',
      text: 'This is a modern vue 3 toaster plugin copied the idea, styles and functionality from VueSax component library. '
  })
}

const secondary = ()=>{
  toast.secondary({
      showProgress: true,
      duration: false,
      // flat: true,
      position: 'top-right',
      title: 'Documentation Vuesax 4.0+',
      text: 'These documents refer to the latest version of vuesax (4.0+), to see the documents of the previous versions you can do it here 👉 Vuesax 3.x'
  })
}

const success = ()=>{
  toast.success({
      showProgress: true,
      duration: false,
      // flat: true,
      position: 'top-right',
      title: 'Documentation Vuesax 4.0+',
      text: 'These documents refer to the latest version of vuesax (4.0+), to see the documents of the previous versions you can do it here 👉 Vuesax 3.x'
  })
}

const danger = ()=>{
  toast.error({
      showProgress: true,
      duration: false,
      // flat: true,
      position: 'top-right',
      title: 'Documentation Vuesax 4.0+',
      text: 'These documents refer to the latest version of vuesax (4.0+), to see the documents of the previous versions you can do it here 👉 Vuesax 3.x'
  })
}

const warning = ()=>{
  toast.warning({
      showProgress: true,
      duration: false,
      // flat: true,
      position: 'top-right',
      title: 'Documentation Vuesax 4.0+',
      text: 'These documents refer to the latest version of vuesax (4.0+), to see the documents of the previous versions you can do it here 👉 Vuesax 3.x'
  })
}

// Flat noti

const primaryFlat = ()=>{
  toast.primary({
      showProgress: true,
      // duration: false,
      flat: true,
      position: 'top-right',
      title: 'Documentation Vuesax 4.0+',
      text: 'These documents refer to the latest version of vuesax (4.0+), to see the documents of the previous versions you can do it here 👉 Vuesax 3.x'
  })
}

const secondaryFlat = ()=>{
  toast.secondary({
      showProgress: true,
      // duration: false,
      flat: true,
      position: 'top-right',
      title: 'Documentation Vuesax 4.0+',
      text: 'These documents refer to the latest version of vuesax (4.0+), to see the documents of the previous versions you can do it here 👉 Vuesax 3.x'
  })
}

const successFlat = ()=>{
  toast.success({
      showProgress: true,
      // duration: false,
      flat: true,
      position: 'top-right',
      title: 'Documentation Vuesax 4.0+',
      text: 'These documents refer to the latest version of vuesax (4.0+), to see the documents of the previous versions you can do it here 👉 Vuesax 3.x'
  })
}

const dangerFlat = ()=>{
  toast.error({
      showProgress: true,
      // duration: false,
      flat: true,
      position: 'top-right',
      title: 'Documentation Vuesax 4.0+',
      text: 'These documents refer to the latest version of vuesax (4.0+), to see the documents of the previous versions you can do it here 👉 Vuesax 3.x'
  })
}

const warningFlat = ()=>{
  toast.warning({
      showProgress: true,
      // duration: false,
      flat: true,
      position: 'top-right',
      title: 'Documentation Vuesax 4.0+',
      text: 'These documents refer to the latest version of vuesax (4.0+), to see the documents of the previous versions you can do it here 👉 Vuesax 3.x'
  })
}
</script>
