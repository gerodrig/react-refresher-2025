import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import RefresherApp from './RefresherApp';
// import { MyAwesomeApp } from './MyAwesomeApp';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RefresherApp />
        {/* <MyAwesomeApp /> */}
  </StrictMode>,
)
