export type color = "primary" | "secondary" | "success" | "warning" | "danger" | "light" | "dark" | "info";

export interface Colors {
  primary?: [number, number, number]
  secondary?: [number, number, number]
  success?: [number, number, number]
  warning?: [number, number, number]
  danger?: [number, number, number]
}

export interface Configuration {
  colors?: Colors
  position?: string
  border?: {
    borderWidth?: string
    color?: color
  }
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