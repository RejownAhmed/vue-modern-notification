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
} from "./chunk-DZXPXYRK.js";

// node_modules/vue-modern-notification/dist/vue-modern-notification.js
(function() {
  "use strict";
  try {
    if (typeof document < "u") {
      var t = document.createElement("style");
      t.appendChild(document.createTextNode('.vs-icon-close{width:30px;height:30px;display:flex;align-items:center;justify-content:center;position:relative;transition:all .25s ease}.vs-icon-close:before{background:rgb(var(--color-text)/1);content:"";position:absolute;width:16px;transform:rotate(-45deg);height:2px;border-radius:2px;transition:all .3s ease}.vs-icon-close:after{background:rgb(var(--color-text)/1);content:"";position:absolute;width:16px;height:2px;transform:rotate(45deg);border-radius:2px;transition:all .3s ease}.vs-icon-close:hover:after{width:12px;transform:rotate(180deg)}.vs-icon-close:hover:before{width:12px;transform:rotate(180deg)}.notification-enter-active{transition:all .3s ease .05s,transform .3s ease,margin .25s ease,-webkit-clip-path 8s ease .8s;transition:all .3s ease .05s,transform .3s ease,margin .25s ease,clip-path 8s ease .8s;transition:all .3s ease .05s,transform .3s ease,margin .25s ease,clip-path 8s ease .8s,-webkit-clip-path 8s ease .8s}.notification-leave-to{max-height:0px!important;padding-top:0!important;padding-bottom:0!important;margin-top:0!important;margin-bottom:0!important;box-shadow:0 0 #0000;opacity:0!important;-webkit-clip-path:circle(0% at 80% 35%)!important;clip-path:circle(0% at 80% 35%)!important}.notification-enter-from{transform:translate(25%);-webkit-clip-path:circle(0% at 80% 35%)!important;clip-path:circle(0% at 80% 35%)!important}.notification-enter-from .notification__content{opacity:0;transform:translate(10%)}.notification-container{position:fixed;right:0;bottom:0;z-index:200000;transition:all 25s ease;padding:10px 0;display:flex;flex-direction:column;align-items:flex-end;justify-content:flex-end}.notification-container--top-right{bottom:auto;top:0;display:flex;flex-direction:column-reverse}.notification-container--top-center{bottom:auto;top:0;display:flex;flex-direction:column-reverse;left:50%;right:auto;transform:translate(-50%)}.notification-container--top-center .notification--sticky{margin:3px 20px;border-radius:20px}.notification-container--top-center .notification--sticky:last-child{border-radius:0 0 20px 20px;margin-top:-10px}.notification-container--top-center .notification{-webkit-clip-path:circle(120% at 50% 0%);clip-path:circle(120% at 50% 0%);transition:all .25s ease,transform .3s ease,max-height .25s ease,-webkit-clip-path .5s ease .1s;transition:all .25s ease,transform .3s ease,max-height .25s ease,clip-path .5s ease .1s;transition:all .25s ease,transform .3s ease,max-height .25s ease,clip-path .5s ease .1s,-webkit-clip-path .5s ease .1s}.notification-container--top-center .notification.notification--border{border:3px solid transparent;border-top:3px solid rgb(var(--color-border)/1)}.notification-container--top-center .notification-enter-from{transform:translateY(-25%);-webkit-clip-path:circle(0% at 50% 0%)!important;clip-path:circle(0% at 50% 0%)!important}.notification-container--top-center .notification-enter-from .notification__content{opacity:0;transform:translateY(-10%)}.notification-container--bottom-center{left:50%;right:auto;transform:translate(-50%)}.notification-container--bottom-center .notification--sticky{margin:3px 20px;border-radius:20px}.notification-container--bottom-center .notification--sticky:last-child{border-radius:20px 20px 0 0;margin-bottom:-10px}.notification-container--bottom-center .notification{-webkit-clip-path:circle(120% at 50% 100%);clip-path:circle(120% at 50% 100%);transition:all .25s ease,transform .3s ease,max-height .25s ease,-webkit-clip-path .5s ease .1s;transition:all .25s ease,transform .3s ease,max-height .25s ease,clip-path .5s ease .1s;transition:all .25s ease,transform .3s ease,max-height .25s ease,clip-path .5s ease .1s,-webkit-clip-path .5s ease .1s}.notification-container--bottom-center .notification.notification--border{border:3px solid transparent;border-bottom:3px solid rgb(var(--color-border)/1)}.notification-container--bottom-center .notification-enter-from{transform:translateY(25%);-webkit-clip-path:circle(0% at 50% 100%)!important;clip-path:circle(0% at 50% 100%)!important}.notification-container--bottom-center .notification-enter-from .notification__content{opacity:0;transform:translateY(10%)}.notification-container--top-left{bottom:auto;top:0;left:0;right:auto;display:flex;flex-direction:column-reverse;align-items:flex-start;justify-content:flex-end}.notification-container--top-left .notification--sticky{margin-left:0;border-radius:0 20px 20px 0}.notification-container--top-left .notification{-webkit-clip-path:circle(145% at 0% 50%);clip-path:circle(145% at 0% 50%)}.notification-container--top-left .notification.notification--border{border:3px solid transparent;border-left:3px solid rgb(var(--color-border)/1)}.notification-container--top-left .notification-enter-from{transform:translate(-25%);-webkit-clip-path:circle(0% at 20% 35%)!important;clip-path:circle(0% at 20% 35%)!important}.notification-container--top-left .notification-enter-from .notification__content{opacity:0;transform:translate(-10%)}.notification-container--bottom-left{left:0;right:auto}.notification-container--bottom-left .notification--sticky{margin-left:0;border-radius:0 20px 20px 0}.notification-container--bottom-left .notification{-webkit-clip-path:circle(145% at 0% 50%);clip-path:circle(145% at 0% 50%)}.notification-container--bottom-left .notification.notification--border{border:3px solid transparent;border-left:3px solid rgb(var(--color-border)/1)}.notification-container--bottom-left .notification-enter-from{transform:translate(-25%);-webkit-clip-path:circle(0% at 20% 35%)!important;clip-path:circle(0% at 20% 35%)!important}.notification-container--bottom-left .notification-enter-from .notification__content{opacity:0;transform:translate(-10%)}.notification{position:relative;max-width:340px;width:100%;height:auto;border-radius:20px;box-shadow:0 10px 30px -5px #0000001a;overflow:hidden;-webkit-clip-path:circle(145% at 100% 50%);clip-path:circle(145% at 100% 50%);background:rgb(var(--color-background)/1);color:rgb(var(--color-text)/1);margin:3px 10px;transition:all .25s ease,transform .3s ease .1s,max-height .25s ease,-webkit-clip-path .5s ease .1s;transition:all .25s ease,transform .3s ease .1s,max-height .25s ease,clip-path .5s ease .1s;transition:all .25s ease,transform .3s ease .1s,max-height .25s ease,clip-path .5s ease .1s,-webkit-clip-path .5s ease .1s}.notification:hover:not(.notification--flat){box-shadow:0 0 #0000001a;transform:translateY(3px)}.notification--noPadding{padding:0!important}.notification.notification--icon{padding-left:50px!important}.notification--width-auto{width:auto;max-width:none}.notification--width-all{max-width:calc(100vw - 50px);width:calc(100vw - 50px)}.notification--square{border-radius:0!important}.notification--sticky{margin-right:0;margin-bottom:0;border-radius:20px 0 0 20px}.notification--flat{box-shadow:0 0 #0003;background:#fff;color:rgb(var(--color-text)/1)}.notification--flat:hover:after{background:rgb(var(--color-background)/.15)}.notification--flat .notification__progress{height:2px;background:rgb(var(--color-text)/1)}.notification--flat .notification__close,.notification--flat .notification__content{color:rgb(var(--color-text)/1)}.notification--flat.notification--border{border:0px solid transparent!important;border-right:3px solid rgb(var(--color-border)/1)!important}.notification--flat:after{content:"";background:rgb(var(--color-background)/.1);width:100%;height:100%;border-radius:inherit;position:absolute;top:0;left:0;z-index:-1;transition:all .25s ease}.notification.notification--onClick{cursor:pointer}.notification.notification--border{border:0px;border-right:3px solid rgb(var(--color-border)/1)}.notification__progress{width:0%;height:3px;background:rgb(var(--color-text)/1);position:absolute;bottom:0;left:0;transition:all .25s ease}.notification__close{color:rgb(var(--color-text)/1);position:absolute;border:0px;background:transparent;top:2px;right:2px;transform:scale(.75);padding:0}.notification__icon{position:absolute;top:calc(50% - 22px);background:transparent;width:45px;height:45px;left:2px;border-radius:0 35% 35% 0;display:flex;align-items:center;justify-content:center}.notification__icon i{font-size:1.2rem}.notification__content{position:relative;width:auto;height:auto;transition:all .25s ease .2s;opacity:1}.notification__content__text{width:100%}.notification__content__text p{margin:0;padding:6px 0 0;font-size:.75rem;line-height:1rem}.notification__content__header{width:100%;margin:0;padding:0}.notification__content__header h4{width:100%;margin:0;padding:0;font-size:.9rem;line-height:1.25;font-weight:500}@keyframes progressNoti{0%{width:0%}to{width:100%}}@media (max-width: 600px){.notification-container{width:100%;padding:0}.notification{margin:3px 0!important;border-radius:0!important;width:100%!important;max-width:100%!important;min-width:100%!important}.notification:hover{transform:translate(0)!important}.notification:last-child{margin-bottom:0!important}.notification-parent{padding:0;width:100%!important;max-width:100%!important}.notification-parent .notification--sticky{margin-bottom:0!important}.notification-parent.notification-parent--top-center .notification:last-child{margin-bottom:3px;margin-top:0!important}}')), document.head.appendChild(t);
    }
  } catch (i) {
    console.error("vite-plugin-css-injected-by-js", i);
  }
})();
var j = { class: "vs-icon-close" };
var F = {
  __name: "closeIcon",
  setup(t) {
    return ref(), (i, o) => (openBlock(), createElementBlock("i", j));
  }
};
var I = {
  key: 0,
  class: "notification__icon"
};
var M = ["innerHTML"];
var z = { class: "notification__content" };
var W = {
  key: 0,
  class: "notification__content__header"
};
var R = {
  key: 1,
  class: "notification__content__text"
};
var U = {
  key: 1,
  class: "notification__loading"
};
var A = {
  __name: "Notification",
  props: {
    customComponent: Object,
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
        "dark",
        "light",
        "info"
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
        "dark",
        "light",
        "info"
      ].includes(t)
    },
    icon: [String, Object],
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
  setup(t, { expose: i }) {
    const o = t, s = ref(0), l = ref(0), a = ref(false), y = computed(() => {
      const e = {};
      return a.value && (o.color ? (e["--color-background"] = `var(--color-${o.color})`, o.color === "light" ? e["--color-text"] = "var(--color-dark)" : e["--color-text"] = "var(--color-light)", o.flat && o.color !== "light" && (e["--color-text"] = `var(--color-${o.color})`)) : (e["--color-text"] = "var(--color-dark)", e["--color-background"] = "var(--color-light)"), typeof o.border != "boolean" ? e["--color-border"] = `var(--color-${o.border})` : o.border && (e["--color-border"] = "var(--color-dark)")), e;
    }), f = (e) => {
      o.onClick && o.onClick(e), o.closeOnClick && p();
    };
    function p() {
      a.value = false, o.onClose && o.onClose(evt);
    }
    const n = (e) => {
      s.value = e;
    };
    function P(e) {
      e.style.maxHeight = "0px", e.style.padding = "0px 20px";
    }
    function $(e, _) {
      const k = e.scrollHeight;
      e.style.maxHeight = `${k + 40}px`, window.innerWidth < 600 ? e.style.padding = "15px" : e.style.padding = "20px", _();
    }
    function B(e, _) {
      const k = e.parentNode;
      setTimeout(() => {
        _();
        const b = k.parentNode;
        b.childNodes.length == 1 && document.body.removeChild(b), k.remove(), o.onDestroy && o.onDestroy();
      }, 250);
    }
    return watch(() => o.showProgress, () => {
      o.showProgress && o.duration !== false && (l.value = setInterval(() => {
        s.value++;
      }, o.duration / 100));
    }, { immediate: true }), onMounted(() => {
      a.value = true;
    }), onBeforeUnmount(() => {
      clearInterval(l.value);
    }), i({
      close: p,
      changeProgress: n
    }), (e, _) => (openBlock(), createBlock(Transition, {
      name: "notification",
      onBeforeEnter: P,
      onEnter: $,
      onLeave: B
    }, {
      default: withCtx(() => [
        a.value ? (openBlock(), createElementBlock("div", {
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
          style: normalizeStyle({ ...y.value, width: o.width }),
          onClick: f
        }, [
          o.icon ? (openBlock(), createElementBlock("div", I, [
            typeof o.icon != "string" ? (openBlock(), createBlock(resolveDynamicComponent(o.icon), { key: 0 })) : (openBlock(), createElementBlock("span", {
              key: 1,
              innerHTML: o.icon
            }, null, 8, M))
          ])) : createCommentVNode("", true),
          createBaseVNode("div", z, [
            o.title ? (openBlock(), createElementBlock("header", W, [
              createBaseVNode("h4", null, toDisplayString(o.title), 1)
            ])) : createCommentVNode("", true),
            o.text ? (openBlock(), createElementBlock("div", R, [
              createBaseVNode("p", null, toDisplayString(o.text), 1)
            ])) : createCommentVNode("", true),
            t.customComponent ? (openBlock(), createBlock(resolveDynamicComponent(o.customComponent), { key: 2 })) : createCommentVNode("", true)
          ]),
          createBaseVNode("button", {
            class: "notification__close",
            onClick: p
          }, [
            createVNode(F)
          ]),
          o.loading ? (openBlock(), createElementBlock("div", U)) : createCommentVNode("", true),
          createBaseVNode("div", {
            class: "notification__progress",
            style: normalizeStyle({
              width: `${s.value}%`
            })
          }, null, 4)
        ], 6)) : createCommentVNode("", true)
      ]),
      _: 1
    }));
  }
};
var r = {
  colors: {
    primary: [26, 92, 255],
    secondary: [125, 51, 255],
    success: [70, 201, 58],
    warning: [255, 130, 0],
    danger: [242, 19, 93],
    dark: [30, 30, 30],
    light: [255, 255, 255],
    info: [59, 222, 200]
  },
  position: "top-right",
  duration: 4e3,
  flat: false,
  sticky: false,
  square: false,
  width: null,
  showProgress: false,
  noPadding: false
};
function d(t) {
  let i = {};
  i = { ...t }, typeof t.duration == "number" || t.duration === false ? i.duration = t.duration : i.duration = r.duration, typeof t.flat != "boolean" && (i.flat = r.flat), typeof t.sticky != "boolean" && (i.sticky = r.sticky), typeof t.square != "boolean" && (i.square = r.square), typeof t.noPadding != "boolean" && (i.noPadding = r.noPadding), typeof t.showProgress != "boolean" && (i.showProgress = r.showProgress), typeof t.width != "string" && (i.width = r.width), (t.width == "100%" || window.innerWidth < 600) && (t.position === "top-left" || t.position === "top-right" ? t.position = "top-center" : (t.position === "bottom-left" || t.position === "bottom-right" || !t.position) && (t.position = "bottom-center")), typeof t.position != "string" && (t.position = r.position);
  const o = document.querySelector(
    `.notification-container--${t.position || "bottom-right"}`
  ) || document.createElement("div");
  document.querySelector(
    `.notification-container--${t.position || "bottom-right"}`
  ) || (o.className = "notification-container", o.classList.add(
    `notification-container--${t.position || "bottom-right"}`
  ), document.body.appendChild(o));
  const s = document.createElement("div");
  s.style.width = "100%", t.classNotification && s.classList.add(t.classNotification);
  const l = r.colors;
  Object.keys(l).forEach((f) => {
    s.style.setProperty(`--color-${f}`, `${l[f][0]} ${l[f][1]} ${l[f][2]}`);
  });
  const a = h(A, i);
  render(a, s), o.appendChild(s);
  const y = a.component;
  return t.sticky || i.duration && setTimeout(() => {
    y.exposed.close();
  }, i.duration), y.exposed;
}
function J() {
  let t;
  return {
    primary: (n = {}) => {
      n.color = "primary", t = d(n);
    },
    // Call methods
    secondary: (n = {}) => {
      n.color = "secondary", t = d(n);
    },
    // Call methods
    success: (n = {}) => {
      n.color = "success", t = d(n);
    },
    // Call methods
    warning: (n = {}) => {
      n.color = "warning", t = d(n);
    },
    // Call methods
    error: (n = {}) => {
      n.color = "danger", t = d(n);
    },
    // Call methods
    dark: (n = {}) => {
      n.color = "dark", t = d(n);
    },
    // Call methods
    light: (n = {}) => {
      n.color = "light", t = d(n);
    },
    // Call methods
    info: (n = {}) => {
      n.color = "info", t = d(n);
    },
    // Call methods
    // Return exposed functions/properties so that they can be called manually
    // Exposed functions are defined in the notification component
    instance: t
  };
}
var K = {
  install: (t, i = {}) => {
    i.colors && (r.colors = { ...r.colors, ...i.colors }), i.position && (r.position = i.position), i.border && (r.border = i.border), (typeof i.duration == "number" || i.duration === false) && (r.duration = i.duration), i.flat && (r.flat = i.flat), i.sticky && (r.sticky = i.sticky), i.square && (r.square = i.square), i.width && (r.width = i.width), i.noPadding && (r.noPadding = i.noPadding), i.showProgress && (r.showProgress = i.showProgress);
  }
};
export {
  K as default,
  d as notify,
  J as useNotification
};
//# sourceMappingURL=vue-modern-notification.js.map
