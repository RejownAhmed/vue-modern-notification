export type Color = "primary" | "secondary" | "success" | "warning" | "danger" | "light" | "dark" | "info";
export type Position = "top-right" | "top-center" | "top-left" | "bottom-left" | "bottom-center" | "bottom-right";

export interface Colors {
  primary?: [number, number, number]
  secondary?: [number, number, number]
  success?: [number, number, number]
  warning?: [number, number, number]
  danger?: [number, number, number]
}

export interface Configuration {
  colors?: Colors
  position?: Position
  border?: Color
  duration?: boolean|number
  flat?: boolean
  sticky?: boolean
  square?: boolean
  width?: string
  noPadding?: boolean
  showProgress?: boolean
}

export interface NotificationParams {
  title?: string
  text?: string
  position?: string
  color?: color
  border?: string
  icon?: string
  duration?: number | boolean
  onClick?: any
  onClose?: any
  hideCloseButton?: boolean
  flat?: boolean
  onDestroy?: any
  sticky?: boolean
  square?: boolean
  width?: string
  loading?: boolean
  noPadding?: boolean
  customComponent?: any
  closeOnClick?: boolean
  classNotification?: string
  showProgress?: boolean
}