import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root/Root';
import Home from './Home/Home';
import Paragraph from './Paragraph/Paragraph';
import Story from './Story/Story';
import Letter from './Letter/Letter';

// import Traffic from './Traffic/Traffic';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Root/>,
    children:[
      {
        path:'/',
        element:<Home/>
       },
      {
        path:'/paragraph',
        element:<Paragraph/>
      },
      {
        path:'/story',
        element:<Story/>
      },
      {
        path:'/letter',
        element:<Letter/>
      }
      
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <div className='min-h-screen bg-white'>
  <RouterProvider router={router} />
  </div>
  </React.StrictMode>,
)
