import './App.css'
import AppRoutes from './routes/appRoutes'
import ToastProvider from './components/toast/toastProvider'
import { Provider } from 'react-redux'
import { store } from './store/store'
import AppInitializer from './appInitializer'

function App() {

  return (
    <>
      <Provider store={store}>
        <ToastProvider>
          <AppInitializer>
            <AppRoutes />
          </AppInitializer>
        </ToastProvider>
      </Provider>
    </>
  )
}

export default App
