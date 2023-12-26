import { render, h } from "vue";
import './icons/style.sass';
import './style.sass';
import Notification from "./Notification.vue";
import { Colors, Configuration,  NotificationParams } from "./types"

let colors: Colors = {
    primary: [26,92,255],
    secondary: [125,51,255],
    success: [70,201,58],
    warning: [255,130,0],
    danger: [242,19,93]
}


export function notify(params: NotificationParams) {

  let props: any = {};
  props = {...params}
  
  props.duration = 4000;

  if (typeof params.duration == 'number' || params.duration === false) {
    props.duration = params.duration;
  }

  if (params.width == "100%" || window.innerWidth < 600) {

    if (params.position === "top-left" || params.position === "top-right") {
      params.position = "top-center";
    } else if (
      params.position === "bottom-left" ||
      params.position === "bottom-right" ||
      !params.position
    ) {
      params.position = "bottom-center";
    }
  }

  if (typeof params.position !== "string") {
    params.position = "bottom-right";
  }

  const container: HTMLDivElement = document.querySelector(
      `.notification-container--${params.position || "bottom-right"}`
    ) || document.createElement("div");
    
  if (
    !document.querySelector(
      `.notification-container--${params.position || "bottom-right"}`
    )
  ) {
    container.className = "notification-container";
    container.classList.add(
      `notification-container--${params.position || "bottom-right"}`
    );

    document.body.appendChild(container); // Append the container to the
  }
  
  // Create a div element
  const div: HTMLDivElement = document.createElement("div");
  div.style.width = '100%';

  if (params.classNotification) {
    div.classList.add(params.classNotification);
  }

  // Set default color variables for the notification
  Object.keys(colors).forEach(color => {
    // E.g:- --color-primary = 26 92 255
    div.style.setProperty(`--color-${color}`, `${colors[color][0]} ${colors[color][1]} ${colors[color][2]}`)
  });

  // Create the notification instance
  const app = h(Notification, props);
  // render the instance
  render(app, div);

  // Append the instance to the container
  container.appendChild(div);

  const instance = app.component; // Get the app instance

  if (!params.sticky) {
    // If duration is set
    // By default duration has value as 3000ms
    // If duration is set to false
    // It means do not close the notification
    if (params.duration) {
      setTimeout(() => {
        // Call the exposed functions/properties
        instance.exposed.close();
      }, props.duration);
    }
  }

  return instance.exposed;
}

export function useNotification(params: NotificationParams = {}) {
  let instance: any;

  const success = (options: NotificationParams = {}): void => {
    params = { ...params, ...options };
    params.color = "success";

    instance = notify(params);
  };

  const warning = (options: NotificationParams = {}): void => {
    params = { ...params, ...options };
    params.color = "warning";

    instance = notify(params);
  };

  const error = (options: NotificationParams = {}): void => {
    params = { ...params, ...options };
    params.color = "danger";

    instance = notify(params);
  };

  // Others
  const primary = (options: NotificationParams = {}): void => {
    params = { ...params, ...options };
    params.color = "primary";

    instance = notify(params);
  };

  const secondary = (options: NotificationParams = {}): void => {
    params = { ...params, ...options };
    params.color = "secondary";

    instance = notify(params);
  };

  return {
    primary, // Call methods
    secondary, // Call methods
    success, // Call methods
    warning, // Call methods
    error, // Call methods
    // Return exposed functions/properties so that they can be called manually
    // Exposed functions are defined in the notification component
    instance,
  };
}

export default {
  install: (app: any, config: Configuration = {})=>{
    // Override default colors
    if (config.colors) {
      colors = {...colors, ...config.colors}
      
    }

  }
}