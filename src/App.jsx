import { Layout } from "./components/Layout/Layout";
import PublicRoutes from "./routes/publicRoutes";
import PrivateRoutes from "./routes/privateRoutes";
import { BrowserRouter } from "react-router-dom";
import { useState } from "react";

function App() {

  const [token, setToken] = useState(true)

  return (
    <BrowserRouter >
    <PublicRoutes />
      <Layout>
        <PrivateRoutes isAuthenticated={token}/> 
      </Layout>
    </BrowserRouter>

  );
}

export default App;
