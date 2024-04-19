import { Layout } from "./components/Layout/Layout";
import PublicRoutes from "./routes/publicRoutes";
import PrivateRoutes from "./routes/privateRoutes";
import { BrowserRouter } from "react-router-dom";
import { useEffect, useState } from "react";
import { ThemeProvider } from 'styled-components';
import { theme } from "../theme"
import { DateProvider } from "./components/DateProvider/DateProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {

  const queryClient = new QueryClient()

  useEffect(() => {
    const tokenLocal = localStorage.getItem('token')
    if(tokenLocal){
      setToken(true)
    }else{
      setToken(false)
    }
  }, [])

  const [token, setToken] = useState(false)

  return (
    <QueryClientProvider client={queryClient}>
      <DateProvider>
        <BrowserRouter >
          <ThemeProvider theme={theme}>
            <PublicRoutes token={token}/>
              <Layout>
                <PrivateRoutes token={token}/> 
              </Layout>
          </ThemeProvider>
        </BrowserRouter>
      </DateProvider>
    </QueryClientProvider>

  );
}

export default App;
