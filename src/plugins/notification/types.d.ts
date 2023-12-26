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
  onClickClose?: any
  hideCloseButton?: boolean
  flat?: boolean
  onDestroy?: any
  sticky?: boolean
  square?: boolean
  width?: string
  loading?: boolean
  progress?: any
  noPadding?: any
  customComponent?: any
  clickClose?: boolean
  classNotification?: string
  showProgress?: boolean
}