---
outline: deep
---

# Props/Options

All the available options or props that you can set while opening the notification.


| Property          | Type                  | Description                                       |
| ----------------- | --------------------- | ------------------------------------------------- |
|`title`            |`string`| The title text of the notification|
|`text`             | `string`|The main content/description of the notification|
|`position`         |`string`| The position where the notification will appear.<br>Available positions are:-<br> ``top-left``<br> ``top-center`` <br> ``top-right``<br> ``bottom-left``<br>``bottom-center``<br>``bottom-right``|
|`color`            |`color`| The color theme for the notification. Only needed when using ``notify`` helper.<br>Available colors are:-<br> ``primary``<br> ``secondary`` <br> ``success``<br> ``warning``<br>``danger``|
|`border`           | `string`|Border color for the notification. Same as the color prop|
|`icon`|`string`    |Icon to display in the notification|
|`duration`         |`number`\|`boolean`|Duration for which the notification is displayed. Set ``false`` to disable automatic close functionality|
|`hideCloseButton`  |`boolean`|Whether to hide the close button|
|`flat`             |`boolean`|Notification layout flat or not|
|`showProgress`     |``boolean``|Show the progress bar or not|
|`sticky`           |`boolean`|Sticky or not|
|`square`           |`boolean`|Square or not|
|`width`            |``string\|null``|Custom width|
|`noPadding`        |``boolean``|Set default padding or not|
|`customComponent`  |``Component``\|``htmlElement``|Use a custom view/page or element as notification content|
|`closeOnClick`     |``bolean``|Should close on click inside or not|
|`classNotification`|``string``|Custom class for the notification item|
|`onClick`          |`any`|Function to call when the notification is clicked|
|`onClose`          |`any`|Function to call when the notification is closed|
|`onDestroy`        |`boolean`|Do something when the notification component is destroyed|
