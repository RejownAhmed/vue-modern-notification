<template>
  <Transition
    name="notification"
    @before-enter="onBeforeEnter"
    @enter="onEnter"
    @leave="onLeave"
  >
    <div
      v-if="isVisible"
      class="notification"
      :class="[
        {
          'notification--color': props.color,
          'notification--border': props.border,
          'notification--icon': props.icon,
          'notification--onClick': props.onClick,
          'notification--onClickClose': props.onClickClose,
          'notification--flat': props.flat,
          'notification--sticky': props.sticky,
          'notification--square': props.square,
          'notification--width-all': props.width == '100%',
          'notification--width-auto': props.width == 'auto',
          'notification--noPadding': props.noPadding,
        },
        `notification--${props.color}`,
        props.classNotification,
      ]"
      :style="{ ...notificationStyleRootVars }"
      @click="clicked"
    >
      <!-- icon -->
      <div class="notification__icon" v-if="props.icon">
        {{ props.icon }}
      </div>
      <!-- content -->
      <div class="notification__content">
        <header class="notification__content__header" v-if="props.title">
          <h4>
            {{ props.title }}
          </h4>
        </header>
        <div v-if="props.text" class="notification__content__text">
          <p>
            {{ props.text }}
          </p>
        </div>
        <component 
          v-if="customComponent" 
          :is="props.customComponent" 
        />
      </div>
      <!-- close button -->
      <button class="notification__close" @click="handleClickClose">
        <CloseIcon />
      </button>
      <!-- loadind -->
      <div class="notification__loading" v-if="props.loading" />
      <!-- progress -->
      <div
        class="notification__progress"
        :style="{
          width: `${progress}%`,
        }"
      />
    </div>
  </Transition>
</template>
<script setup>
import { ref, watch, computed, onMounted, onBeforeUnmount } from "vue";
import CloseIcon from "./icons/closeIcon.vue";

const props = defineProps({
  customComponent: {
    // Any type
  },
  title: String,
  text: String,
  color: {
    type: String,
    default: null,
    validator: (value) =>
      [
        "primary",
        "secondary",
        "success",
        "danger",
        "warning",
        "info",
        "dark"
      ].includes(value),
  },
  colorName: String,
  border: {
    type: [String, Boolean],
    default: null,
    validator: (value) =>
      [
        "primary",
        "secondary",
        "success",
        "danger",
        "warning",
        "info",
        "light",
        "dark"
      ].includes(value),
  },
  icon: String,
  onClickClose: Function,
  onClick: Function,
  buttonClose: Boolean,
  flat: Boolean,
  onDestroy: Function,
  sticky: Boolean,
  square: Boolean,
  width: String,
  showProgress: Boolean,
  duration: Number,
  countProgress: Number,
  noPadding: Boolean,
  clickClose: Boolean,
  classNotification: String,
});

//refs
const progress = ref(0);
const intervalProgress = ref(0);
const isVisible = ref(false);

// Computed
const notificationStyleRootVars = computed(() => {
  const rootVars = {};

  if (isVisible.value) {
    if (props.color){ 
      rootVars["--color-text"] = `255 255 255`;
      rootVars["--color-background"] = `var(--color-${props.color})`;
      
      if (props.flat) {
        rootVars["--color-text"] = `var(--color-${props.color})`;
        
      }

    } else {
      rootVars["--color-text"] = `32 32 33`;
      rootVars["--color-background"] = `255 255 255`;
    }
    // TODO: Update below code and make classes for individual border type
    // E.g:- border--primary
    if (typeof props.border !== 'boolean'){
      rootVars["--color-border"] = `var(--color-${props.border})`;
    } else if (props.border){
      rootVars["--color-border"] = `32 32 33`;

    }
  }

  return rootVars
});
// Custom methods
const clicked = (evt) => {
  if (props.onClick) {
    props.onClick(evt);
  }
  if (props.clickClose) {
    close();
    if (props.onClickClose) {
      props.onClickClose(evt);
    }
  }
};

function close() {
  isVisible.value = false;
}

function handleClickClose() {
  isVisible.value = false;
}

// 

const changeProgress = (val) => {
    progress.value = val
}

// Transition hookes
function onBeforeEnter(el) {
  el.style.maxHeight = `0px`;
  el.style.padding = `0px 20px`;
}

function onEnter(el, done) {
  const h = el.scrollHeight;
  el.style.maxHeight = `${h + 40}px`;
  if (window.innerWidth < 600) {
    el.style.padding = `15px`;
  } else {
    el.style.padding = `20px`;
  }
  done();
}

function onLeave(el, done) {
  const parent = el.parentNode
  setTimeout(() => {
    done();
    const container = parent.parentNode

    if (container.childNodes.length == 1) {
      document.body.removeChild(container)
    }

    parent.remove() // Remove the parent div

    if (props.onDestroy) {
      props.onDestroy();
    }
  }, 250);

}

// Vue methods
watch(()=> props.showProgress, ()=>{
  if (props.showProgress && props.duration) {
    intervalProgress.value = setInterval(() => {
      progress.value++
    }, (props.duration / 100))
  }

}, {immediate: true})


onMounted(()=>{
    isVisible.value = true;
  })

  onBeforeUnmount(()=>{
    clearInterval(intervalProgress.value)
  })

defineExpose({
  close,
  changeProgress
})
</script>