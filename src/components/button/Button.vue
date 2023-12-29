<template>
  <div>
    <button
      type="button"
      class="btn"
      :class="buttonClasses"
      :style="buttonStyles"
      :disabled="props.disabled"
      v-wave
    >
      <slot />
    </button>
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  color: {
    type: String,
    default: "primary",
    validator: (value) =>
      [
        "primary",
        "secondary",
        "success",
        "danger",
        "warning",
        "info",
        "light",
        "dark",
        "submit",
        "transparent",
      ].includes(value),
  },
  gradient: Boolean,
  size: {
    type: String,
    default: "md",
    validator: (value) => ["sm", "md", "lg"].includes(value),
  },
  ripple: Boolean,
  rippleInvert: Boolean,
  rippleSolid: Boolean,
  icon: Boolean,
  square: Boolean,
  flat: Boolean,
  active: Boolean,
  block: Boolean,
  outlined: Boolean,
  disabled: Boolean,
});

//Computed
const buttonClasses = computed(() => {
  return [
    props.outlined ? `btn-outline-${props.color}` : `btn-${props.color}`,
    {
      disabled: props.disabled,
      active: props.active,
      "btn-icon": props.icon,
      "rounded-default": !props.square,
      "btn-flat": props.flat,
      "btn-gradient": props.gradient,
    },
    `btn-${props.size}`,
  ];
});

const buttonStyles = computed(() => {
  const style = {};
  if (props.gradient) {
    style["--color"] = `var(--color-${props.color})`;
  }

  return style;
});
const rippleColor = computed(() => {
  let color = `radial-gradient(circle, rgba(0,0,0, 0.05),rgba(0,0,0, 0.6))`;

  if (props.rippleInvert) {
    color = `radial-gradient(circle, rgba(0,0,0, 0.6),rgba(0,0,0, 0))`;
  }

  if (props.rippleSolid) {
    color = `rgba(0,0,0, 1)`;
  }

  if (props.rippleCut1) {
    color = `rgba(255,255,255, 1)`;
  }

  return color;
});
</script>
<style lang="scss">
.btn {
  @apply relative 
  select-none 
  overflow-hidden 
  text-default 
  inline-flex 
  gap-1 
  items-center 
  justify-center 
  leading-normal 
  z-[1];

  &:not(.btn-flat) {
    @apply ease-in duration-200;
    &:hover{
      -webkit-transform: translateY(-3px);
      -moz-transform: translateY(-3px);
      -o-transform: translateY(-3px);
      transform: translateY(-3px);
    }
  }

  &:not(.btn-icon) {
    &.btn-sm {
      @apply text-[0.8rem] py-[8px] 
        px-[12px];
    }

    &.btn-md {
      @apply text-default py-[9px] 
        px-[15px];
    }
    &.btn-lg {
      @apply py-[8px] 
        px-[16px] text-base;
    }
  }

  &.btn-icon {
    &.btn-sm {
      @apply p-[6px];
    }

    &.btn-md {
      @apply p-[8px];
    }

    &.btn-lg {
      @apply p-[10px];
    }
  }

  &.btn-primary {
    @apply text-white 
        bg-primary;
    &:not(.btn-flat) {
      @apply hover:shadow-primary;
    }
  }

  &.btn-secondary {
    @apply text-white 
        bg-secondary;

    &:not(.btn-flat) {
      @apply hover:shadow-secondary;
    }
  }

  &.btn-success {
    @apply text-white 
        bg-success;

    &:not(.btn-flat) {
      @apply hover:shadow-success;
    }
  }

  &.btn-warning {
    @apply text-white 
        bg-warning;

    &:not(.btn-flat) {
      @apply hover:shadow-warning;
    }
  }

  &.btn-danger {
    @apply text-white 
        bg-danger;

    &:not(.btn-flat) {
      @apply hover:shadow-danger;
    }
  }

  &.btn-dark {
    @apply text-white 
        bg-dark;

  }

  &.btn-light {
    @apply text-dark 
        bg-light;

  }

  &.btn-info {
    @apply text-white 
        bg-info;

  }
  
  &.btn-gradient {
    &::before {
      content: "";
      position: absolute;
      background: linear-gradient(
        30deg,
        rgb(var(--color) / 0) 33%,
        rgb(var(--color) / 1)
      );
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: inherit;
      pointer-events: none;
      -webkit-transition: all 0.4s ease;
      transition: all 0.4s ease;
      z-index: -1;
      -webkit-filter: hue-rotate(-40deg);
      filter: hue-rotate(-40deg);
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
    }

    &.btn-primary,
    // &.btn-success,
    &.btn-secondary {
      &::before {
        -webkit-filter: hue-rotate(40deg);
        filter: hue-rotate(40deg);
      }
    }
  }
}
</style>
