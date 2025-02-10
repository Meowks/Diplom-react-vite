import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { LoginPage } from './pages/loginPage/LoginPage'
import { RegisterPage } from './pages/RegisterPage/RegisterPage'
import { MainPage } from './pages/MainPage/MainPage'
import { FavoritesPage } from './pages/FavoritPage/FavoritePage'
import { CardPage } from './pages/CardPage/CardPage'
import { AppProvider } from './components/Context/Context'

function App() {

  const routerConfig = createBrowserRouter([
    {
      path: "/",
      element: <LoginPage />,
    },
    {
      path: "/registration",
      element: <RegisterPage />,
    },
    {
      path: "/main-page",
      element: <MainPage />,
    },
    {
      path: "/fav-page",
      element: <FavoritesPage />,
    },
    {
      path: "/card-page",
      element: <CardPage />,
    },


  ])

  return (
    <AppProvider>
      <RouterProvider router={routerConfig} />
    </AppProvider>
  )
}

export default App
