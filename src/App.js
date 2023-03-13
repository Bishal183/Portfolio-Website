import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layout/Main';
import Home from './components/Home/Home';

function App() {
  const routes = createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children:
      [
        {
          path:'/',
          element:<Home></Home>
        }
      ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;
