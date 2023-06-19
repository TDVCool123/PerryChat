import { BrowserRouter } from 'react-router-dom'
import { AppRouter } from "./guards/routes/router/AppRouter";
import { AppTheme } from "./theme";
import StoreProvider from "./context/ContextProvider";


function App() {
  /*const router = createBrowserRouter([
    {
      path:"/",
      element: <LoginPage/>
    },
    {
      path: "/chat",
      element: <Chat/>,
    
    }
    
  ]);*/
  
  return (
    <StoreProvider>
      <AppTheme>
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
      </AppTheme>
    </StoreProvider> 
  )
  
}

export default App
