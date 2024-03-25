
import { Login } from "./pages/Login";
import { Layout } from "./components/Layout/Layout";
import RoutesApp from "./routes/routesApp";
import { BrowserRouter } from "react-router-dom";
import GlobalStyle from './globalStyles';

function App() {
  return (
    <BrowserRouter >
      <GlobalStyle />
         <Login />
      <Layout>
        <RoutesApp />
      </Layout>
    </BrowserRouter>

  );
}

export default App;
