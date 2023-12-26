export interface Colors {
  primary?: number[]
  secondary?: number[]
  success?: number[]
  warning?: number[]
  danger?: number[]
}

export interface Configuration {
  colors?: Colors
}

export interface NotificationParams {
  title?: string
  text?: string
  position?: string
  color?: string
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
  noPadding?: any
  customComponent?: any
  closeOnClick?: boolean
  classNotification?: string
  showProgress?: boolean
}