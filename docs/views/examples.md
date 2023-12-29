<script setup>
import Default from "../components/examples/default.vue";

</script>

# Notification

## Default

:::tabs
== Preview
<Default />
== Code
<<< @/components/examples/default.vue{vue}
:::

## Position

Change the notification position with the position property

supported values

- `bottom-right` <Badge type="text" text="Default"/>
- `top-right`
- `top-center`
- `top-left`
- `bottom-left`
- `bottom-center`

:::tabs
== Preview
<Default />
== Code
<<< @/components/examples/default.vue{vue}
:::

## Color

Use the color property to change the base color of the component and some of the child components, to better understand the handling of colors and themes you can see it [here](/docs/theme/)

Allowed values   are:

- primary
- success
- danger
- warning
- dark
- RGB
- HEX

:::tabs
== Preview
<Default />
== Code
<<< @/components/examples/default.vue{vue}
:::

## Icons

Add the icon provided as the value of the `icon` property to the notification

:::tabs
== Preview
<Default />
== Code
<<< @/components/examples/default.vue{vue}
:::

## Progress

Add a progress bar to the notification, if the value of the `progress` property is `auto` be determined by the `duration` property to reach 100%, if you want the value to be manual you can add a number of the (0 - 100) being 100 100% and use the function in the `changeProgress` instance and change the value to the one provided as the first parameter

:::tabs
== Preview
<Default />
== Code
<<< @/components/examples/default.vue{vue}
:::

<card>

## Duration <Badge text="New"/>

Change the duration of the notification with the `duration` property, the value is numerical and determine the seconds before the bone component is hidden that **10s** equals **10000** as the value

if you need the notification to never be hidden, the duration value would be `none`

<div slot="example">
  <Notification-duration />
</div>

<div slot="template">

  ```html{3}
    <template>
      <div class="center">
        <vs-button border @click="openNotification(null)">
          Duration default (4s)
        </vs-button>
        <vs-button border @click="openNotification(6000)">
          Duration 6s
        </vs-button>
        <vs-button border @click="openNotification(10000)">
          Duration 10s
        </vs-button>
        <vs-button border @click="openNotification('none')">
          Duration none
        </vs-button>
      </div>
    </template>
  ```

</div>

<div slot="script">

  ```html{4,5,6,7,8,9,10,11}
    <script>
      export default {
        methods: {
          openNotification(duration) {
            const noti = this.$vs.notification({
              duration,
              progress: 'auto',
              title: 'Documentation Vuesax 4.0+',
              text: `These documents refer to the latest version of vuesax (4.0+),
              to see the documents of the previous versions you can do it here 👉 Vuesax3.x`
            })
          }
        }
      }
    </script>
  ```

</div>

<div slot="stylus">

  ```stylus
    <style scoped lang="stylus">
      .vs-button
        margin 10px
      i
        margin 2px
        font-size 1.2rem
        transform-origin center
        &.b-r
          transform rotate(90deg)
        &.t-r
          transform rotate(0deg)
        &.t-l
          transform rotate(-90deg)
        &.b-l
          transform rotate(-180deg)
    </style>
  ```

</div>

</card>

<card>

## Square <Badge text="New"/>

Change the style of the notification with the `square` property so as not to have `border-radius` making it a rectangle

<div slot="example">
  <Notification-square />
</div>

<div slot="template">

  ```html{3}
    <template>
      <div class="center">
        <vs-button shadow square icon @click="openNotification(null, '')">
          <i class='bx bx-border-radius b-r'></i>
        </vs-button>
        <vs-button square border icon @click="openNotification(null, 'primary')">
          <i class='bx bx-border-radius b-r'></i>
        </vs-button>
        <vs-button square border success icon @click="openNotification('top-right', 'success')">
          <i class='bx bx-border-radius t-r'></i>
        </vs-button>
        <vs-button square border danger icon @click="openNotification('top-left', 'danger')">
          <i class='bx bx-border-radius t-l'></i>
        </vs-button>
        <vs-button square border warn icon @click="openNotification('bottom-left', 'warn')">
          <i class='bx bx-border-radius b-l'></i>
        </vs-button>
        <vs-button square border dark icon @click="openNotification('bottom-center', 'dark')">
          <i class='bx bx-border-bottom' ></i>
        </vs-button>
        <vs-button square border color="#7d33ff" icon @click="openNotification('top-center', '#7d33ff')">
          <i class='bx bx-border-top' ></i>
        </vs-button>
        <vs-button square border color="rgb(59,222,200)" icon @click="openNotification(null, 'rgb(59,222,200)')">
          <i class='bx bx-border-radius b-r'></i>
        </vs-button>
      </div>
    </template>
  ```

</div>

<div slot="script">

  ```html{3,5,6,7,8,9,10,11,12}
    <script>
      export default {
        methods: {
          openNotification(position = null, color) {
            const noti = this.$vs.notification({
              square: true,
              color,
              position,
              title: 'Documentation Vuesax 4.0+',
              text: 'These documents refer to the latest version of vuesax (4.0+), to see the documents of the previous versions you can do it here 👉 Vuesax 3.x'
            })
          }
        }
      }
    </script>
  ```

</div>

<div slot="stylus">

  ```stylus
    <style scoped lang="stylus">
      .vs-button
        margin 10px
      i
        margin 2px
        font-size 1.4rem
        transform-origin center
        &.b-r
          transform rotate(90deg)
        &.t-r
          transform rotate(0deg)
        &.t-l
          transform rotate(-90deg)
        &.b-l
          transform rotate(-180deg)
    </style>
  ```

</div>

</card>

<card>

## Border <Badge text="New"/>

Change the notification style with the `border` property by adding a border of the color provided as the value

<div slot="example">
  <Notification-border />
</div>

<div slot="template">

  ```html{3}
    <template>
      <div class="center">
        <vs-button shadow icon
          @click="openNotification(null, null, `<i class='bx bxs-time'></i>`)">
          <i class='bx bx-border-radius b-r'></i> <i class='bx bxs-time'></i>
        </vs-button>
        <vs-button flat icon
          @click="openNotification(null, 'primary', `<i class='bx bxs-user-pin' ></i>`)">
          <i class='bx bx-border-radius b-r'></i> <i class='bx bxs-user-pin' ></i>
        </vs-button>
        <vs-button flat success icon
          @click="openNotification('top-right', 'success', `<i class='bx bx-select-multiple' ></i>`)">
          <i class='bx bx-border-radius t-r'></i> <i class='bx bx-select-multiple' ></i>
        </vs-button>
        <vs-button flat danger icon
          @click="openNotification('top-left', 'danger', `<i class='bx bxs-bug' ></i>`)">
          <i class='bx bx-border-radius t-l'></i> <i class='bx bxs-bug' ></i>
        </vs-button>
        <vs-button flat warn icon
          @click="openNotification('bottom-left', 'warn', `<i class='bx bx-error' ></i>`)">
          <i class='bx bx-border-radius b-l'></i> <i class='bx bx-error' ></i>
        </vs-button>
        <vs-button flat dark icon
          @click="openNotification('bottom-center', 'dark', `<i class='bx bx-folder-open' ></i>`)">
          <i class='bx bx-border-bottom' ></i> <i class='bx bx-folder-open' ></i>
        </vs-button>
        <vs-button flat color="#7d33ff" icon
          @click="openNotification('top-center', '#7d33ff', `<i class='bx bx-bell' ></i>`)">
          <i class='bx bx-border-top' ></i> <i class='bx bx-bell' ></i>
        </vs-button>
        <vs-button flat color="rgb(59,222,200)" icon
          @click="openNotification(null, 'rgb(59,222,200)', `<i class='bx bx-calendar' ></i>`)">
          <i class='bx bx-border-radius b-r'></i> <i class='bx bx-calendar' ></i>
        </vs-button>
      </div>
    </template>
  ```

</div>

<div slot="script">

  ```html{4-12}
    <script>
      export default {
        methods: {
          openNotification(position = null, border) {
            const noti = this.$vs.notification({
              border,
              position,
              title: 'Documentation Vuesax 4.0+',
              text: `These documents refer to the latest version of vuesax (4.0+),
              to see the documents of the previous versions you can do it here 👉 Vuesax3.x`
            })
          }
        }
      }
    </script>
  ```

</div>

<div slot="stylus">

  ```stylus
    <style scoped lang="stylus">
      .vs-button
        margin 10px
      i
        margin 2px
        font-size 1.2rem
        transform-origin center
        &.b-r
          transform rotate(90deg)
        &.t-r
          transform rotate(0deg)
        &.t-l
          transform rotate(-90deg)
        &.b-l
          transform rotate(-180deg)
    </style>
  ```

</div>

</card>

<card>

## Flat <Badge text="New"/>

Change the style of the notification with the `flat` property, having this property changes to lighter colors and the text of the color of the `color` property, this property is a boolean so you can only use the value `true`

<div slot="example">
  <Notification-flat />
</div>

<div slot="template">

  ```html{6}
    <template>
      <div class="center">
        <vs-button
          flat
          icon
          @click="openNotification(null, 'primary')">
          <i class='bx bx-border-radius b-r'></i>
        </vs-button>
        <vs-button
          flat
          success
          icon
          @click="openNotification('top-right', 'success')">
          <i class='bx bx-border-radius t-r'></i>
        </vs-button>
        <vs-button
          flat
          danger
          icon
          @click="openNotification('top-left', 'danger')">
          <i class='bx bx-border-radius t-l'></i>
        </vs-button>
        <vs-button
          flat
          warn
          icon
          @click="openNotification('bottom-left', 'warn')">
          <i class='bx bx-border-radius b-l'></i>
        </vs-button>
        <vs-button f
          lat
          dark
          icon
          @click="openNotification('bottom-center', 'dark')">
          <i class='bx bx-border-bottom' ></i>
        </vs-button>
        <vs-button
          flat
          color="#7d33ff"
          icon
          @click="openNotification('top-center', '#7d33ff')">
          <i class='bx bx-border-top' ></i>
        </vs-button>
        <vs-button
          flat
          color="rgb(59,222,200)"
          icon
          @click="openNotification(null, 'rgb(59,222,200)')">
          <i class='bx bx-border-radius b-r'></i>
        </vs-button>
      </div>
    </template>
  ```

</div>

<div slot="script">

  ```html{4-13}
    <script>
      export default {
        methods: {
          openNotification(position = null, color) {
            const noti = this.$vs.notification({
              flat: true,
              color,
              position,
              title: 'Documentation Vuesax 4.0+',
              text: `These documents refer to the latest version of vuesax (4.0+),
              to see the documents of the previous versions you can do it here 👉 Vuesax3.x`
            })
          }
        }
      }
    </script>
  ```

</div>

<div slot="stylus">

  ```stylus
    <style scoped lang="stylus">
      .vs-button
        margin 10px
      i
        margin 2px
        font-size 1.2rem
        transform-origin center
        &.b-r
          transform rotate(90deg)
        &.t-r
          transform rotate(0deg)
        &.t-l
          transform rotate(-90deg)
        &.b-l
          transform rotate(-180deg)
    </style>
  ```

</div>

</card>

<card>

## Width <Badge text="New"/>

Change the size of the notification to the total screen with the property `width` and giving it a value of `100%`

If you need the notification to have an automatic size to your content you can do it with the value `auto`

<div slot="example">
  <Notification-allWidth />
</div>

<div slot="template">

  ```html
    <template>
      <div class="center">
        <vs-button shadow icon @click="openNotification(null, '')">
          <i class='bx bx-border-bottom' ></i>
        </vs-button>
        <vs-button flat icon @click="openNotification('top-center', 'primary', 'auto')">
          <i class='bx bx-border-radius b-r'></i>
        </vs-button>
      </div>
    </template>
  ```

</div>

<div slot="script">

  ```html{4-11}
    <script>
      export default {
        methods: {
          openNotification(position = null, color, width = '100%') {
            const noti = this.$vs.notification({
              width,
              color,
              title: 'Documentation Vuesax 4.0+',
              text: 'These documents refer to the latest version of vuesax (4.0+), to see the documents of the previous versions you can do it here 👉 Vuesax 3.x'
            })
          }
        }
      }
    </script>
  ```

</div>

<div slot="stylus">

  ```stylus
    <style scoped lang="stylus">
      .vs-button
        margin 10px
      i
        margin 2px
        font-size 1.2rem
        &.b-r
          transform rotate(90deg)
    </style>
  ```

</div>

</card>

<card>

## Sticky <Badge text="New"/>

You can add a style to the paste component to the nearest corner with the `sticky` property, this property is a `boolean` po which can only have the value `true`

<div slot="example">
  <Notification-sticky />
</div>

<div slot="template">

  ```html{3}
    <template>
      <div class="center">
        <vs-button shadow icon @click="openNotification(null, null)">
          <i class='bx bx-border-radius b-r'></i>
        </vs-button>
        <vs-button flat icon @click="openNotification(null, 'primary')">
          <i class='bx bx-border-radius b-r'></i>
        </vs-button>
        <vs-button flat success icon @click="openNotification('top-right', 'success')">
          <i class='bx bx-border-radius t-r'></i>
        </vs-button>
        <vs-button flat danger icon @click="openNotification('top-left', 'danger')">
          <i class='bx bx-border-radius t-l'></i>
        </vs-button>
        <vs-button flat warn icon @click="openNotification('bottom-left', 'warn')">
          <i class='bx bx-border-radius b-l'></i>
        </vs-button>
        <vs-button flat dark icon @click="openNotification('bottom-center', 'dark')">
          <i class='bx bx-border-bottom' ></i>
        </vs-button>
        <vs-button flat color="#7d33ff" icon
          @click="openNotification('top-center', '#7d33ff')">
          <i class='bx bx-border-top' ></i>
        </vs-button>
        <vs-button flat color="rgb(59,222,200)" icon
          @click="openNotification(null, 'rgb(59,222,200)')">
          <i class='bx bx-border-radius b-r'></i>
        </vs-button>
      </div>
    </template>
  ```

</div>

<div slot="script">

  ```html{4-12}
    <script>
      export default {
        methods: {
          openNotification(position = null, color) {
            const noti = this.$vs.notification({
              sticky: true,
              color,
              position,
              title: 'Documentation Vuesax 4.0+',
              text: 'These documents refer to the latest version of vuesax (4.0+), to see the documents of the previous versions you can do it here 👉 Vuesax 3.x'
            })
          }
        }
      }
    </script>
  ```

</div>

<div slot="stylus">

  ```stylus
    <style scoped lang="stylus">
      .vs-button
        margin 10px
      i
        margin 2px
        font-size 1.4rem
        transform-origin center
        &.b-r
          transform rotate(90deg)
        &.t-r
          transform rotate(0deg)
        &.t-l
          transform rotate(-90deg)
        &.b-l
          transform rotate(-180deg)
    </style>
  ```

</div>

</card>

<card>

## Example <Badge text="New"/>

You can do great things with this component and some others from vuesax, to add any element within the notification we have the property `content` this property can only receive an imported component and that is what it will generate within the notification

<div slot="example">
  <Notification-example />
</div>

<div slot="template">

  ```html
    <template>
      <div class="center">
        <vs-button border icon @click="openNotificationUser">
          Example User
        </vs-button>
        <vs-button border icon @click="openNotificationCookie">
          Example Cookie
        </vs-button>
        <vs-button border icon @click="openNotificationCall">
          Example Call
        </vs-button>
      </div>
    </template>
  ```

</div>

<div slot="script">

  ```html{2,3,4,10,17,25}
    <script>
      import user from './user.vue'
      import cookie from './cookie.vue'
      import call from './call.vue'
      export default {
        methods: {
          openNotificationCookie() {
            const noti = this.$vs.notification({
              duration: 'none',
              content: cookie,
            })
          },
          openNotificationUser() {
            const noti = this.$vs.notification({
              duration: 'none',
              width: 'auto',
              content: user,
            })
          },
          openNotificationCall() {
            const noti = this.$vs.notification({
              color: 'dark',
              duration: 'none',
              width: 'auto',
              content: call,
              notPadding: true,
            })
          }
        }
      }
    </script>
  ```

</div>

<div slot="stylus">

  ```stylus
    <style scoped lang="stylus">
      .vs-button
        margin 10px
      i
        margin 2px
        font-size 1.4rem
        transform-origin center
        &.b-r
          transform rotate(90deg)
        &.t-r
          transform rotate(0deg)
        &.t-l
          transform rotate(-90deg)
        &.b-l
          transform rotate(-180deg)
    </style>
  ```

</div>

</card>

<card>

## API

</card>