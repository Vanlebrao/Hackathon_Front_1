import { Layout } from "./components/Layout/Layout";
import PublicRoutes from "./routes/publicRoutes";
import PrivateRoutes from "./routes/privateRoutes";
import { BrowserRouter } from "react-router-dom";
import { useState } from "react";

function App() {

  const [acesso, setAcesso] = useState(false)

  return (
    <BrowserRouter >
    <PublicRoutes />
     {/* {acesso && 
      <Layout>
        <PrivateRoutes /> 
      </Layout>
      } */}
    </BrowserRouter>

  );
}

export default App;
