
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import { LoginPage } from './pages/loginPage/LoginPage'
import { RegisterPage } from './pages/RegisterPage/RegisterPage'
import { MainPage } from './pages/MainPage/MainPage'
import { FavoritePage } from './pages/FavoritPage/FavoritePage'
import { CardPage } from './pages/CardPage/CardPage'

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
    {
      path:"/main-page",
      element:<MainPage/>,
    },
    {
      path:"/fav-page",
      element:<FavoritePage/>,
    },
    {
      path:"/card-page",
      element:<CardPage/>,
    },
  
    
  ])

  return (
    <RouterProvider router={routerConfig}/>
  )
}

export default App
