import { toast, ToastContainer } from 'react-toastify'

export const ToastifyService = {
  notfy (
    message: string,
    type: ToastifyMessageType,
    options: Partial<CTS_Options>
  ) {
    const isHide = options.hide == 1 ? true : false
    toast[type](message, {
      autoClose: options.timeoutDuration,
      hideProgressBar: isHide,
      position: options.position
    })
  }
}

export const ToastifyServiceContainer = () => {
  return <ToastContainer />
}
export enum ToastifyPosition {
  TopLeft = 'top-left',
  TopRight = 'top-right',
  TopCenter = 'top-center',
  BottomLeft = 'bottom-left',
  BottomRight = 'bottom-right',
  BottomCenter = 'bottom-center'
}
export enum ToastifyMessageType {
  Success = 'success',
  Warning = 'warning',
  Info = 'info'
}

export enum ToastifyTimeoutDuration {
  Fast = 2000,
  Slow = 5000,
  Moderate = 3000
}

export enum Hide {
  True = 1,
  False = 0
}

export class CTS_Options {
  timeoutDuration?: ToastifyTimeoutDuration = ToastifyTimeoutDuration.Fast
  hide?: Hide = Hide.False
  position?: ToastifyPosition = ToastifyPosition.TopRight
}
