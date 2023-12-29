import {
  Transition,
  computed,
  createBaseVNode,
  createBlock,
  createCommentVNode,
  createElementBlock,
  createVNode,
  h,
  normalizeClass,
  normalizeStyle,
  onBeforeUnmount,
  onMounted,
  openBlock,
  ref,
  render,
  resolveDynamicComponent,
  toDisplayString,
  watch,
  withCtx
} from "./chunk-ZBR2ML67.js";

// node_modules/vue-modern-notification/dist/vue-modern-notification.js
(function() {
  "use strict";
  try {
    if (typeof document < "u") {
      var t = document.createElement("style");
      t.appendChild(document.createTextNode('.vs-icon-close{width:30px;height:30px;display:flex;align-items:center;justify-content:center;position:relative;transition:all .25s ease}.vs-icon-close:before{background:rgb(var(--color-text)/1);content:"";position:absolute;width:16px;transform:rotate(-45deg);height:2px;border-radius:2px;transition:all .3s ease}.vs-icon-close:after{background:rgb(var(--color-text)/1);content:"";position:absolute;width:16px;height:2px;transform:rotate(45deg);border-radius:2px;transition:all .3s ease}.vs-icon-close:hover:after{width:12px;transform:rotate(180deg)}.vs-icon-close:hover:before{width:12px;transform:rotate(180deg)}.notification-enter-active{transition:all .3s ease .05s,transform .3s ease,margin .25s ease,-webkit-clip-path 8s ease .8s;transition:all .3s ease .05s,transform .3s ease,margin .25s ease,clip-path 8s ease .8s;transition:all .3s ease .05s,transform .3s ease,margin .25s ease,clip-path 8s ease .8s,-webkit-clip-path 8s ease .8s}.notification-leave-to{max-height:0px!important;padding-top:0!important;padding-bottom:0!important;margin-top:0!important;margin-bottom:0!important;box-shadow:0 0 #0000;opacity:0!important;-webkit-clip-path:circle(0% at 80% 35%)!important;clip-path:circle(0% at 80% 35%)!important}.notification-enter-from{transform:translate(25%);-webkit-clip-path:circle(0% at 80% 35%)!important;clip-path:circle(0% at 80% 35%)!important}.notification-enter-from .notification__content{opacity:0;transform:translate(10%)}.notification-container{position:fixed;right:0;bottom:0;z-index:200000;transition:all 25s ease;padding:10px 0;display:flex;flex-direction:column;align-items:flex-end;justify-content:flex-end}.notification-container--top-right{bottom:auto;top:0;display:flex;flex-direction:column-reverse}.notification-container--top-center{bottom:auto;top:0;display:flex;flex-direction:column-reverse;left:50%;right:auto;transform:translate(-50%)}.notification-container--top-center .notification--sticky{margin:3px 20px;border-radius:20px}.notification-container--top-center .notification--sticky:last-child{border-radius:0 0 20px 20px;margin-top:-10px}.notification-container--top-center .notification{-webkit-clip-path:circle(120% at 50% 0%);clip-path:circle(120% at 50% 0%);transition:all .25s ease,transform .3s ease,max-height .25s ease,-webkit-clip-path .5s ease .1s;transition:all .25s ease,transform .3s ease,max-height .25s ease,clip-path .5s ease .1s;transition:all .25s ease,transform .3s ease,max-height .25s ease,clip-path .5s ease .1s,-webkit-clip-path .5s ease .1s}.notification-container--top-center .notification.notification--border{border:3px solid transparent;border-top:3px solid rgb(var(--color-border)/1)}.notification-container--top-center .notification-enter-from{transform:translateY(-25%);-webkit-clip-path:circle(0% at 50% 0%)!important;clip-path:circle(0% at 50% 0%)!important}.notification-container--top-center .notification-enter-from .notification__content{opacity:0;transform:translateY(-10%)}.notification-container--bottom-center{left:50%;right:auto;transform:translate(-50%)}.notification-container--bottom-center .notification--sticky{margin:3px 20px;border-radius:20px}.notification-container--bottom-center .notification--sticky:last-child{border-radius:20px 20px 0 0;margin-bottom:-10px}.notification-container--bottom-center .notification{-webkit-clip-path:circle(120% at 50% 100%);clip-path:circle(120% at 50% 100%);transition:all .25s ease,transform .3s ease,max-height .25s ease,-webkit-clip-path .5s ease .1s;transition:all .25s ease,transform .3s ease,max-height .25s ease,clip-path .5s ease .1s;transition:all .25s ease,transform .3s ease,max-height .25s ease,clip-path .5s ease .1s,-webkit-clip-path .5s ease .1s}.notification-container--bottom-center .notification.notification--border{border:3px solid transparent;border-bottom:3px solid rgb(var(--color-border)/1)}.notification-container--bottom-center .notification-enter-from{transform:translateY(25%);-webkit-clip-path:circle(0% at 50% 100%)!important;clip-path:circle(0% at 50% 100%)!important}.notification-container--bottom-center .notification-enter-from .notification__content{opacity:0;transform:translateY(10%)}.notification-container--top-left{bottom:auto;top:0;left:0;right:auto;display:flex;flex-direction:column-reverse;align-items:flex-start;justify-content:flex-end}.notification-container--top-left .notification--sticky{margin-left:0;border-radius:0 20px 20px 0}.notification-container--top-left .notification{-webkit-clip-path:circle(145% at 0% 50%);clip-path:circle(145% at 0% 50%)}.notification-container--top-left .notification.notification--border{border:3px solid transparent;border-left:3px solid rgb(var(--color-border)/1)}.notification-container--top-left .notification-enter-from{transform:translate(-25%);-webkit-clip-path:circle(0% at 20% 35%)!important;clip-path:circle(0% at 20% 35%)!important}.notification-container--top-left .notification-enter-from .notification__content{opacity:0;transform:translate(-10%)}.notification-container--bottom-left{left:0;right:auto}.notification-container--bottom-left .notification--sticky{margin-left:0;border-radius:0 20px 20px 0}.notification-container--bottom-left .notification{-webkit-clip-path:circle(145% at 0% 50%);clip-path:circle(145% at 0% 50%)}.notification-container--bottom-left .notification.notification--border{border:3px solid transparent;border-left:3px solid rgb(var(--color-border)/1)}.notification-container--bottom-left .notification-enter-from{transform:translate(-25%);-webkit-clip-path:circle(0% at 20% 35%)!important;clip-path:circle(0% at 20% 35%)!important}.notification-container--bottom-left .notification-enter-from .notification__content{opacity:0;transform:translate(-10%)}.notification{position:relative;max-width:340px;width:100%;height:auto;border-radius:20px;box-shadow:0 10px 30px -5px #0000001a;overflow:hidden;-webkit-clip-path:circle(145% at 100% 50%);clip-path:circle(145% at 100% 50%);background:rgb(var(--color-background)/1);color:rgb(var(--color-text)/1);margin:3px 10px;transition:all .25s ease,transform .3s ease .1s,max-height .25s ease,-webkit-clip-path .5s ease .1s;transition:all .25s ease,transform .3s ease .1s,max-height .25s ease,clip-path .5s ease .1s;transition:all .25s ease,transform .3s ease .1s,max-height .25s ease,clip-path .5s ease .1s,-webkit-clip-path .5s ease .1s}.notification:hover:not(.notification--flat){box-shadow:0 0 #0000001a;transform:translateY(3px)}.notification--noPadding{padding:0!important}.notification.notification--icon{padding-left:50px!important}.notification--width-auto{width:auto;max-width:none}.notification--width-all{max-width:calc(100vw - 50px);width:calc(100vw - 50px)}.notification--square{border-radius:0!important}.notification--sticky{margin-right:0;margin-bottom:0;border-radius:20px 0 0 20px}.notification--flat{box-shadow:0 0 #0003;background:#fff;color:rgb(var(--color-text)/1)}.notification--flat:hover:after{background:rgb(var(--color-background)/.15)}.notification--flat .notification__progress{height:2px;background:rgb(var(--color-text)/1)}.notification--flat .notification__close,.notification--flat .notification__content{color:rgb(var(--color-text)/1)}.notification--flat.notification--border{border:0px solid transparent!important;border-right:3px solid rgb(var(--color-border)/1)!important}.notification--flat:after{content:"";background:rgb(var(--color-background)/.1);width:100%;height:100%;border-radius:inherit;position:absolute;top:0;left:0;z-index:-1;transition:all .25s ease}.notification.notification--onClick{cursor:pointer}.notification.notification--color:not(.notification--flat){color:#fff}.notification.notification--color:not(.notification--flat) .notification__progress{background:#fff}.notification.notification--color:not(.notification--flat) .notification__close{color:#fff}.notification.notification--color:not(.notification--flat) .notification__loading:after{border:2px solid #fff;border-top:2px solid transparent;border-left:2px solid transparent;border-right:2px solid transparent}.notification.notification--color:not(.notification--flat) .notification__loading:before{border:2px dashed #fff;border-top:2px solid transparent;border-left:2px solid transparent;border-right:2px solid transparent}.notification.notification--border{border:0px;border-right:3px solid rgb(var(--color-border)/1)}.notification__progress{width:0%;height:3px;background:rgb(var(--color-text)/1);position:absolute;bottom:0;left:0;transition:all .25s ease}.notification__close{color:rgb(var(--color-text)/1);position:absolute;border:0px;background:transparent;top:2px;right:2px;transform:scale(.75);padding:0}.notification__icon{position:absolute;top:calc(50% - 22px);background:transparent;width:45px;height:45px;left:2px;border-radius:0 35% 35% 0;display:flex;align-items:center;justify-content:center}.notification__icon i{font-size:1.2rem}.notification__content{position:relative;width:auto;height:auto;transition:all .25s ease .2s;opacity:1}.notification__content__text{width:100%}.notification__content__text p{margin:0;padding:6px 0 0;font-size:.75rem;line-height:1rem}.notification__content__header{width:100%;margin:0;padding:0}.notification__content__header h4{width:100%;margin:0;padding:0;font-size:.9rem;line-height:1.25}@keyframes progressNoti{0%{width:0%}to{width:100%}}@media (max-width: 600px){.notification-container{width:100%;padding:0}.notification{margin:3px 0!important;border-radius:0!important;width:100%!important;max-width:100%!important;min-width:100%!important}.notification:hover{transform:translate(0)!important}.notification:last-child{margin-bottom:0!important}.notification-parent{padding:0;width:100%!important;max-width:100%!important}.notification-parent .notification--sticky{margin-bottom:0!important}.notification-parent.notification-parent--top-center .notification:last-child{margin-bottom:3px;margin-top:0!important}}')), document.head.appendChild(t);
    }
  } catch (i) {
    console.error("vite-plugin-css-injected-by-js", i);
  }
})();
var O = { class: "vs-icon-close" };
var T = {
  __name: "closeIcon",
  setup(t) {
    return ref(), (e, o) => (openBlock(), createElementBlock("i", O));
  }
};
var z = {
  key: 0,
  class: "notification__icon"
};
var W = { class: "notification__content" };
var j = {
  key: 0,
  class: "notification__content__header"
};
var M = {
  key: 1,
  class: "notification__content__text"
};
var R = {
  key: 1,
  class: "notification__loading"
};
var U = {
  __name: "Notification",
  props: {
    customComponent: {
      // Any type
    },
    title: String,
    text: String,
    color: {
      type: String,
      default: null,
      validator: (t) => [
        "primary",
        "secondary",
        "success",
        "danger",
        "warning",
        // TODO: Need to add below three colors
        "info",
        "light",
        "dark"
      ].includes(t)
    },
    colorName: String,
    border: {
      type: [String, Boolean],
      default: null,
      validator: (t) => [
        "primary",
        "secondary",
        "success",
        "danger",
        "warning",
        // TODO: Need to add below three colors
        "info",
        "light",
        "dark"
      ].includes(t)
    },
    icon: String,
    onClose: Function,
    onClick: Function,
    buttonClose: Boolean,
    flat: Boolean,
    onDestroy: Function,
    sticky: Boolean,
    square: Boolean,
    width: String,
    showProgress: Boolean,
    duration: [Number, Boolean],
    noPadding: Boolean,
    closeOnClick: Boolean,
    classNotification: String
  },
  setup(t, { expose: e }) {
    const o = t, c = ref(0), l = ref(0), r = ref(false), i = computed(() => {
      const n = {};
      return r.value && (o.color ? (n["--color-text"] = "255 255 255", n["--color-background"] = `var(--color-${o.color})`, o.flat && (n["--color-text"] = `var(--color-${o.color})`)) : (n["--color-text"] = "32 32 33", n["--color-background"] = "255 255 255"), typeof o.border != "boolean" ? n["--color-border"] = `var(--color-${o.border})` : o.border && (n["--color-border"] = "32 32 33")), n;
    }), w = (n) => {
      o.onClick && o.onClick(n), o.closeOnClick && _();
    };
    function _() {
      r.value = false, o.onClose && o.onClose(evt);
    }
    const x = (n) => {
      c.value = n;
    };
    function C(n) {
      n.style.maxHeight = "0px", n.style.padding = "0px 20px";
    }
    function $(n, g) {
      const p = n.scrollHeight;
      n.style.maxHeight = `${p + 40}px`, window.innerWidth < 600 ? n.style.padding = "15px" : n.style.padding = "20px", g();
    }
    function B(n, g) {
      const p = n.parentNode;
      setTimeout(() => {
        g();
        const m = p.parentNode;
        m.childNodes.length == 1 && document.body.removeChild(m), p.remove(), o.onDestroy && o.onDestroy();
      }, 250);
    }
    return watch(() => o.showProgress, () => {
      o.showProgress && o.duration !== false && (l.value = setInterval(() => {
        c.value++;
      }, o.duration / 100));
    }, { immediate: true }), onMounted(() => {
      r.value = true;
    }), onBeforeUnmount(() => {
      clearInterval(l.value);
    }), e({
      close: _,
      changeProgress: x
    }), (n, g) => (openBlock(), createBlock(Transition, {
      name: "notification",
      onBeforeEnter: C,
      onEnter: $,
      onLeave: B
    }, {
      default: withCtx(() => [
        r.value ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: normalizeClass(["notification", [
            {
              "notification--color": o.color,
              "notification--border": o.border,
              "notification--icon": o.icon,
              "notification--onClick": o.onClick,
              "notification--flat": o.flat,
              "notification--sticky": o.sticky,
              "notification--square": o.square,
              "notification--width-all": o.width == "100%",
              "notification--width-auto": o.width == "auto",
              "notification--noPadding": o.noPadding
            },
            `notification--${o.color}`,
            o.classNotification
          ]]),
          style: normalizeStyle({ ...i.value }),
          onClick: w
        }, [
          o.icon ? (openBlock(), createElementBlock("div", z, toDisplayString(o.icon), 1)) : createCommentVNode("", true),
          createBaseVNode("div", W, [
            o.title ? (openBlock(), createElementBlock("header", j, [
              createBaseVNode("h4", null, toDisplayString(o.title), 1)
            ])) : createCommentVNode("", true),
            o.text ? (openBlock(), createElementBlock("div", M, [
              createBaseVNode("p", null, toDisplayString(o.text), 1)
            ])) : createCommentVNode("", true),
            t.customComponent ? (openBlock(), createBlock(resolveDynamicComponent(o.customComponent), { key: 2 })) : createCommentVNode("", true)
          ]),
          createBaseVNode("button", {
            class: "notification__close",
            onClick: _
          }, [
            createVNode(T)
          ]),
          o.loading ? (openBlock(), createElementBlock("div", R)) : createCommentVNode("", true),
          createBaseVNode("div", {
            class: "notification__progress",
            style: normalizeStyle({
              width: `${c.value}%`
            })
          }, null, 4)
        ], 6)) : createCommentVNode("", true)
      ]),
      _: 1
    }));
  }
};
var u = {
  primary: [26, 92, 255],
  secondary: [125, 51, 255],
  success: [70, 201, 58],
  warning: [255, 130, 0],
  danger: [242, 19, 93]
};
function y(t) {
  let e = {};
  e = { ...t }, e.duration = 4e3, (typeof t.duration == "number" || t.duration === false) && (e.duration = t.duration), (t.width == "100%" || window.innerWidth < 600) && (t.position === "top-left" || t.position === "top-right" ? t.position = "top-center" : (t.position === "bottom-left" || t.position === "bottom-right" || !t.position) && (t.position = "bottom-center")), typeof t.position != "string" && (t.position = "bottom-right");
  const o = document.querySelector(
    `.notification-container--${t.position || "bottom-right"}`
  ) || document.createElement("div");
  document.querySelector(
    `.notification-container--${t.position || "bottom-right"}`
  ) || (o.className = "notification-container", o.classList.add(
    `notification-container--${t.position || "bottom-right"}`
  ), document.body.appendChild(o));
  const c = document.createElement("div");
  c.style.width = "100%", t.classNotification && c.classList.add(t.classNotification), Object.keys(u).forEach((i) => {
    c.style.setProperty(`--color-${i}`, `${u[i][0]} ${u[i][1]} ${u[i][2]}`);
  });
  const l = h(U, e);
  render(l, c), o.appendChild(c);
  const r = l.component;
  return t.sticky || e.duration && setTimeout(() => {
    r.exposed.close();
  }, e.duration), r.exposed;
}
function G() {
  let t;
  return {
    primary: (i = {}) => {
      i.color = "primary", t = y(i);
    },
    // Call methods
    secondary: (i = {}) => {
      i.color = "secondary", t = y(i);
    },
    // Call methods
    success: (i = {}) => {
      i.color = "success", t = y(i);
    },
    // Call methods
    warning: (i = {}) => {
      i.color = "warning", t = y(i);
    },
    // Call methods
    error: (i = {}) => {
      i.color = "danger", t = y(i);
    },
    // Call methods
    // Return exposed functions/properties so that they can be called manually
    // Exposed functions are defined in the notification component
    instance: t
  };
}
var J = {
  install: (t, e = {}) => {
    e.colors && (u = { ...u, ...e.colors });
  }
};
export {
  J as default,
  y as notify,
  G as useNotification
};
//# sourceMappingURL=vue-modern-notification.js.map
