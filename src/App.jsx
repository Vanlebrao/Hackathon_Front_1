import { Layout } from "./components/Layout/Layout";
import PublicRoutes from "./routes/publicRoutes";
import PrivateRoutes from "./routes/privateRoutes";
import { BrowserRouter } from "react-router-dom";
import { useState } from "react";
import { ThemeProvider } from 'styled-components';
import { theme } from "../theme"
import { DateProvider } from "./components/DateProvider/DateProvider";

function App() {

  const [token, setToken] = useState(true)

  return (
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

  );
}

export default App;
