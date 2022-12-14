import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import PrivateRoute from './Auth/PrivateRoute';
import Main from './components/main/Main';
import Error from './components/pages/Error';
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import Profile from './components/pages/Profile';
import SignUp from './components/pages/SignUp';
import Orders from './components/shared/Orders';
import Product from './components/shared/Product';


function App() {

  const routes = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        { path: '/',
        loader : ()=> {
          return fetch('https://zens-tech-server.vercel.app/services')
        },
        element: <Home></Home> },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: 'signup',
          element: <SignUp></SignUp>
        },
        {
          path : '/profile',
          element : <PrivateRoute><Profile></Profile></PrivateRoute>
        },
        {
          path : 'services/:id',
          loader : ({params})=>{
            return fetch(`https://zens-tech-server.vercel.app/services/${params.id}`)
          },
          element : <PrivateRoute><Product></Product></PrivateRoute>
        },
        {
          path : '/orders',
          element : <PrivateRoute><Orders></Orders></PrivateRoute>
        },
        {
          path: '*',
          element: <Error></Error>
        }
      ]
    },
    {
      path: '*',
      element: <Error></Error>
    }
  ])

  return (
    <div className=''>
      <RouterProvider router={routes}>

      </RouterProvider>
    </div>
  );
}

export default App;
