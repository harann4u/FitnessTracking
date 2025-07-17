import './App.css'
import AppRoutes from './routes/appRoutes'
import ToastProvider from './components/toast/toastProvider'
import { Provider } from 'react-redux'
import { store } from './store/store'

function App() {

  return (
    <>
      <Provider store={store}>
        <ToastProvider>
          <AppRoutes />
        </ToastProvider>
      </Provider>
    </>
  )
}

export default App
