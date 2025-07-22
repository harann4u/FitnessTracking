import './App.css'
import AppRoutes from './routes/appRoutes'
import ToastProvider from './components/toast/toastProvider'
import { Provider } from 'react-redux'
import { store } from './store/store'
import AppInitializer from './appInitializer'
import { useEffect } from 'react'

function App() {
   useEffect(() => {
    const loadTime = performance.now() - (window as any).appStartTime;
    console.log(`App loaded in ${loadTime.toFixed(2)}ms`);
  }, []);
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
