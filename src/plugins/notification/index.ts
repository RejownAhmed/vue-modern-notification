import { render, h } from "vue";
import './icons/style.sass';
import './style.sass';
import Notification from "./Notification.vue";
import { Colors, Configuration,  NotificationParams } from "./types.d"

const options = {
  colors: {
      primary: [26,92,255],
      secondary: [125,51,255],
      success: [70,201,58],
      warning: [255,130,0],
      danger: [242,19,93],
      dark: [30,30,30],
      light: [255,255,255],
      info: [23,162,184],
  },
  position: 'top-right',
  duration: 4000,
  flat: false,
  sticky: false,
  square: false,
  width: null,
  showProgress: false,
  noPadding: false,
}

export function notify(params: NotificationParams) {
  let props: any = {}
  props = {...params}

  // Set default options
  if (typeof params.duration == 'number' || params.duration === false)
    props.duration = params.duration
  else
    props.duration = options.duration

  if (typeof params.flat !== 'boolean')
    props.flat = options.flat


  if (typeof params.sticky !== 'boolean')
    props.sticky = options.sticky

  if (typeof params.square !== 'boolean')
    props.square = options.square

  if (typeof params.noPadding !== 'boolean')
    props.noPadding = options.noPadding

  if (typeof params.showProgress !== 'boolean')
    props.showProgress = options.showProgress

  if (typeof params.width !== 'string')
    props.width = options.width

  if (params.width == "100%" || window.innerWidth < 600) {
    if (params.position === "top-left" || params.position === "top-right") {
      params.position = "top-center"
    } else if (
      params.position === "bottom-left" ||
      params.position === "bottom-right" ||
      !params.position
    ) {
      params.position = "bottom-center"
    }
  }

  if (typeof params.position !== "string")
    params.position = options.position

  // Get or Create all notifications container
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
  
  // Create the wrapper for the notification
  const div: HTMLDivElement = document.createElement("div");
  div.style.width = '100%';

  if (params.classNotification) {
    div.classList.add(params.classNotification);
  }

  const colors = options.colors;

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
    if (props.duration) {
      setTimeout(() => {
        // Call the exposed functions/properties
        instance.exposed.close();
      }, props.duration);
    }
  }

  return instance.exposed;
}

export function useNotification() {
  let instance: any;

  const success = (params: NotificationParams = {}): void => {
    params.color = "success";

    instance = notify(params);
  };

  const warning = (params: NotificationParams = {}): void => {
    params.color = "warning";

    instance = notify(params);
  };

  const error = (params: NotificationParams = {}): void => {
    params.color = "danger";

    instance = notify(params);
  };

  // Others
  const primary = (params: NotificationParams = {}): void => {
    params.color = "primary";

    instance = notify(params);
  };

  const secondary = (params: NotificationParams = {}): void => {
    params.color = "secondary";

    instance = notify(params);
  };

  const dark = (params: NotificationParams = {}): void => {
    params.color = "dark";

    instance = notify(params);
  };

  const light = (params: NotificationParams = {}): void => {
    params.color = "light";

    instance = notify(params);
  };

  const info = (params: NotificationParams = {}): void => {
    params.color = "info";

    instance = notify(params);
  };

  return {
    primary, // Call methods
    secondary, // Call methods
    success, // Call methods
    warning, // Call methods
    error, // Call methods
    dark, // Call methods
    light, // Call methods
    info, // Call methods
    // Return exposed functions/properties so that they can be called manually
    // Exposed functions are defined in the notification component
    instance,
  };
}

export default {
  install: (app: any, config: Configuration = {})=>{
    // Override default colors
    if (config.colors)
      options.colors = {...options.colors, ...config.colors}

    if (config.position) 
      options.position = config.position

    if (config.border)
      options.border = config.border
 
    if (typeof config.duration == 'number' || config.duration === false)
      options.duration = config.duration

    if (config.flat)
      options.flat = config.flat

    if (config.sticky)
      options.sticky = config.sticky

    if (config.square)
      options.square = config.square

    if (config.width)
      options.width = config.width

    if (config.noPadding)
      options.noPadding = config.noPadding

    if (config.showProgress)
      options.showProgress = config.showProgress

  }
}