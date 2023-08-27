import {
  ToastifyMessageType,
  ToastifyPosition,
  ToastifyService
} from './services/CustomToastfyService'

function App () {
  const notify = () => {
    ToastifyService.notfy('Custom Toastify Service', ToastifyMessageType.Info, {
      position: ToastifyPosition.TopCenter
    })
  }
  return (
    <>
      <button onClick={notify}>notify</button>
    </>
  )
}

export default App
