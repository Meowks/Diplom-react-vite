
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import { LoginPage } from './pages/loginPage/LoginPage'
import { RegisterPage } from './pages/RegisterPage/RegisterPage'

function App() {

  const routerConfig = createBrowserRouter([
    {
      path:"/",
      element:<LoginPage/>,
    },
    {
      path:"/registration",
      element:<RegisterPage/>,
    },
  
    
  ])

  return (
    <RouterProvider router={routerConfig}/>
  )
}

export default App
