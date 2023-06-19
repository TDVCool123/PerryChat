import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Chat } from './pages/Chat'
import { getMessages } from './services/chatService';
import LoginForm from './pages/LoginPage';
import LoginPage from './pages/LoginPage';

function App() {
  const router = createBrowserRouter([
    {
      path: "/chat",
      element: <Chat/>,
    
    },
    {
      path:"/",
      element: <LoginPage/>
    }
  ]);
  
  return (
    <RouterProvider router={router} />    
  )
  
}

export default App
