<script setup>
import Default from "../components/examples/default.vue";
import Position from "../components/examples/position.vue";
import Color from "../components/examples/color.vue";
import Icons from "../components/examples/icons.vue";
import Progress from "../components/examples/progress.vue";
import Duration from "../components/examples/duration.vue";
import Square from "../components/examples/square.vue";
import Sticky from "../components/examples/sticky.vue";
import Flat from "../components/examples/flat.vue";
import Width from "../components/examples/width.vue";
import Border from "../components/examples/border.vue";
import NoPadding from "../components/examples/noPadding.vue";

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

To show progress bar set `showProgress` option to  `true`.

:::warning
If `duration` is set to `false` no progress will be displayed.
:::

:::tabs
== Preview
<Progress />
== Code
<<< @/components/examples/progress.vue{vue}
:::

## Duration

Change the duration of the notification with the `duration` property, the value is numerical and determine the seconds before the bone component is hidden that **10s** equals `10000` as the value

If you need the notification to never be hidden, the duration value would be `false`

:::tabs
== Preview
<Duration />
== Code
<<< @/components/examples/duration.vue{vue}
:::

## Square

Change the style of the notification with the `square` property so as not to have `border-radius` making it a rectangle


:::tabs
== Preview
<Square />
== Code
<<< @/components/examples/square.vue{vue}
:::


## Border

Change the notification style with the `border` property by adding a border of the color provided as the value

:::tabs
== Preview
<Border />
== Code
<<< @/components/examples/border.vue{vue}
:::

## Flat

Change the style of the notification with the `flat` property, having this property changes to lighter colors and the text of the color of the `color` property, this property is a boolean so you can only use the value `true`

:::tabs
== Preview
<Flat />
== Code
<<< @/components/examples/flat.vue{vue}
:::


## Width

Change the size of the notification to the total screen with the property `width` and giving it a value of `100%`

If you need the notification to have a custom size you can do it by setting the value you need, For example:- `50%`, `100px`, `10rem` etc.
By default the width is set automatically while opening.

:::tabs
== Preview
<Width />
== Code
<<< @/components/examples/width.vue{vue}
:::

## Sticky

You can add a style to the paste component to the nearest corner with the `sticky` property, this property is a `boolean` po which can only have the value `true`

:::tabs
== Preview
<Sticky />
== Code
<<< @/components/examples/sticky.vue{vue}
:::

## No Padding

You can set `noPadding` property to `true` to set the notification padding to none. This is helpful when using a custom component inside the notification.

:::tabs
== Preview
<NoPadding />
== Code
<<< @/components/examples/noPadding.vue{vue}
:::


## Custom Component

You can pass a custom component as the content of the notification box. This is really amazing, it makes our plugin unique and opens up the path to the most customizable opportunities.

:::tabs
== Preview
<Default />
== Code
<<< @/components/examples/default.vue{vue}
:::


## Close on click inside

You can set `noPadding` property to `true` to set the notification padding to none. This is helpful when using a custom component inside the notification.

:::tabs
== Preview
<NoPadding />
== Code
<<< @/components/examples/noPadding.vue{vue}
:::

## Hide close button

You can set `noPadding` property to `true` to set the notification padding to none. This is helpful when using a custom component inside the notification.

:::tabs
== Preview
<NoPadding />
== Code
<<< @/components/examples/noPadding.vue{vue}
:::

## On click

You can set `noPadding` property to `true` to set the notification padding to none. This is helpful when using a custom component inside the notification.

:::tabs
== Preview
<NoPadding />
== Code
<<< @/components/examples/noPadding.vue{vue}
:::

## On close

You can set `noPadding` property to `true` to set the notification padding to none. This is helpful when using a custom component inside the notification.

:::tabs
== Preview
<NoPadding />
== Code
<<< @/components/examples/noPadding.vue{vue}
:::

## Handle close and progress

You can set `noPadding` property to `true` to set the notification padding to none. This is helpful when using a custom component inside the notification.

:::tabs
== Preview
<NoPadding />
== Code
<<< @/components/examples/noPadding.vue{vue}
:::
