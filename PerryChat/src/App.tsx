import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Chat } from './pages/Chat'

function App() {
  const router = createBrowserRouter([
    {
      path: "/chat",
      element: <Chat/>,
    },
  ]);
  
  return (
    <RouterProvider router={router} />    
  )
  
}

export default App
