import { Layout } from "./components/Layout/Layout";

import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "../theme";
import { DateProvider } from "./components/DateProvider/DateProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import useBearStore from "./state/state";

function App() {
  const queryClient = new QueryClient();

  const token = useBearStore((state) => state.isUserValid);
  console.log(token);

  return (
    <QueryClientProvider client={queryClient}>
      <DateProvider>
        <ThemeProvider theme={theme}>
          <Layout>{token ? <Outlet /> : <Navigate to={"login"} />}</Layout>
        </ThemeProvider>
      </DateProvider>
    </QueryClientProvider>
  );
}

export default App;
