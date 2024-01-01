declare module 'vue-modern-notification'{
  export type Color = "primary" | "secondary" | "success" | "warning" | "danger" | "light" | "dark" | "info";
export type Position = "top-right" | "top-center" | "top-left" | "bottom-left" | "bottom-center" | "bottom-right";

export interface Colors {
  [key: string]: [number, number, number] | undefined
  primary?: [number, number, number]
  secondary?: [number, number, number]
  success?: [number, number, number]
  warning?: [number, number, number]
  danger?: [number, number, number]
  dark?: [number, number, number]
  light?: [number, number, number]
  info?: [number, number, number]
}

export interface Configuration {
  colors?: Colors
  position?: Position
  border?: Color
  duration?: boolean|number
  flat?: boolean
  sticky?: boolean
  square?: boolean
  width?: string | null | undefined
  noPadding?: boolean
  showProgress?: boolean
}

export interface NotificationParams {
  title?: string
  text?: string
  position?: string
  color?: Color
  border?: string
  icon?: string|object
  duration?: number | boolean
  onClick?: Function
  onClose?: Function
  hideCloseButton?: boolean
  flat?: boolean
  sticky?: boolean
  square?: boolean
  width?: string | null | undefined
  noPadding?: boolean
  customComponent?: object
  closeOnClick?: boolean
  classNotification?: string
  showProgress?: boolean
}
}