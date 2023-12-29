---
outline: deep
---

# Props/Options

All the available options or props that you can set while opening the notification.


| Property          |Required   | Type                  | Description                                       |
| ----------------- |---------- | --------------------- | ------------------------------------------------- |
|`title`            |`optional` Required if not passing custom component |`string`| The title text of the notification|
|`text`             |`optional` Required if not passing custom component | `string`|The main content/description of the notification|
|`position`         |`optional`|`string`| The position where the notification will appear.<br>Available positions are:-<br> ``top-left``<br> ``top-center`` <br> ``top-right``<br> ``bottom-left``<br>``bottom-center``<br>``bottom-right``|
|`color`            |`optional` By default the color is black and white |`string`| The color theme for the notification. Only needed when using ``notify`` helper.<br>Available colors are:-<br> ``primary``<br> ``secondary`` <br> ``success``<br> ``warning``<br>``danger``<br>``dark``<br>``info``<br>``light``|
|`border`           | `string`|`optional`|Border color for the notification. Same as the color prop|
|`icon`|`htmlElement` `Component`|`optional`|Icon to display in the notification|
|`duration`         |`number` `boolean`|`optional`|Duration for which the notification is displayed. Set ``false`` to disable automatic close functionality|
|`hideCloseButton`  |`optional`|`boolean`|Whether to hide the close button|
|`flat`             |`optional`|`boolean`|Notification layout flat or not|
|`showProgress`     |`optional`|``boolean``|Show the progress bar or not|
|`sticky`           |`optional`|`boolean`|Sticky or not|
|`square`           |`optional`|`boolean`|Square or not|
|`width`            |`optional`|`string` `null`|Custom width|
|`noPadding`        |`optional`| `boolean`|Set default padding or not|
|`customComponent`  |`optional`|``Component``|Use a custom view/page as notification content|
|`closeOnClick`     |`optional`|``bolean``|Should close on click inside or not|
|`classNotification`|`optional`|``string``|Custom class for the notification item|
|`onClick`          |`optional`|`any`|Function to call when the notification is clicked|
|`onClose`          |`optional`|`any`|Function to call when the notification is closed|
