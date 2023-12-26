import { createApp } from "vue";
import VWave from 'v-wave';
import './assets/scss/style.scss';

// The plugin
import notification from "@/plugins/notification";

import App from "@/App.vue";

const app = createApp(App);

// Plugin configuration
// Currently only supports `colors` modification 
const notificationConfig = {
  // colors: {
  //   primary: [26, 92, 255]
  // }
}

app
  .use(VWave)
  .use(notification, notificationConfig)
  .mount("#app");

