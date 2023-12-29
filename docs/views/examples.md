<script setup>
import Default from "../components/examples/default.vue";
import Position from "../components/examples/position.vue";
import Color from "../components/examples/color.vue";
import Icons from "../components/examples/icons.vue";

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

- `bottom-right`
- `top-right`
- `top-center`
- `top-left`
- `bottom-left`
- `bottom-center`

:::tabs
== Preview
<Position />
== Code
<<< @/components/examples/position.vue{vue}
:::

## Color

Use the color property to change the base color of the component and some of the child components, to better understand the handling of colors and themes you can see it [here](/docs/theme/)

Allowed values   are:

- `primary`
- `secondary`
- `success`
- `warning`
- `danger`
- `dark`
- `info`
- `light`

:::tabs
== Preview
<Color />
== Code
<<< @/components/examples/color.vue{vue}
:::

## Icons

Add the icon provided as the value of the `icon` property to the notification

:::tabs
== Preview
<Icons />
== Code
<<< @/components/examples/icons.vue{vue}
:::

## Progress

Add a progress bar to the notification, if the value of the `progress` property is `auto` be determined by the `duration` property to reach 100%, if you want the value to be manual you can add a number of the (0 - 100) being 100 100% and use the function in the `changeProgress` instance and change the value to the one provided as the first parameter

:::tabs
== Preview
<Default />
== Code
<<< @/components/examples/default.vue{vue}
:::

## Duration

Change the duration of the notification with the `duration` property, the value is numerical and determine the seconds before the bone component is hidden that **10s** equals **10000** as the value

if you need the notification to never be hidden, the duration value would be `none`

:::tabs
== Preview
<Default />
== Code
<<< @/components/examples/default.vue{vue}
:::

## Square

Change the style of the notification with the `square` property so as not to have `border-radius` making it a rectangle


:::tabs
== Preview
<Default />
== Code
<<< @/components/examples/default.vue{vue}
:::


## Border

Change the notification style with the `border` property by adding a border of the color provided as the value

:::tabs
== Preview
<Default />
== Code
<<< @/components/examples/default.vue{vue}
:::

## Flat

Change the style of the notification with the `flat` property, having this property changes to lighter colors and the text of the color of the `color` property, this property is a boolean so you can only use the value `true`

:::tabs
== Preview
<Default />
== Code
<<< @/components/examples/default.vue{vue}
:::


## Width

Change the size of the notification to the total screen with the property `width` and giving it a value of `100%`

If you need the notification to have an automatic size to your content you can do it with the value `auto`

:::tabs
== Preview
<Default />
== Code
<<< @/components/examples/default.vue{vue}
:::

## Sticky

You can add a style to the paste component to the nearest corner with the `sticky` property, this property is a `boolean` po which can only have the value `true`

:::tabs
== Preview
<Default />
== Code
<<< @/components/examples/default.vue{vue}
:::


## Example

You can do great things with this component and some others from vuesax, to add any element within the notification we have the property `content` this property can only receive an imported component and that is what it will generate within the notification

:::tabs
== Preview
<Default />
== Code
<<< @/components/examples/default.vue{vue}
:::
