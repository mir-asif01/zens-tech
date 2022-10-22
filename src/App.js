import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './components/main/Main';
import Error from './components/pages/Error';
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import SignUp from './components/pages/SignUp';

function App() {

  const routes = createBrowserRouter([
    {
      path : '/',
      element : <Main></Main>,
      children : [
        {path: '/' ,element : <Home></Home>},
        {
          path : '/login',
          element : <Login></Login>
        },
        {
          path : 'signup',
          element : <SignUp></SignUp>
        },
        {
          path : '*',
          element : <Error></Error>
        }
      ]
    }
  ])

  return (
    <div className="App">
       <RouterProvider router={routes}>

       </RouterProvider>
    </div>
  );
}

export default App;
