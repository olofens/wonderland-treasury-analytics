import React, { ReactNode } from "react";
import "./App.css";
import { Growth } from "./Views/Growth";
import GlobalFonts from "./assets/fonts/fonts";
import { SiteWrapper } from "./styles";
import { MetricsProvider } from "./providers";
import { QueryClient, QueryClientProvider } from "react-query";
import { useMetrics } from "./contexts";
import { TopHatSpinner } from "./components";

function App() {
  const queryClient = new QueryClient();

  return (
    <SiteWrapper>
      <GlobalFonts />
      <QueryClientProvider client={queryClient}>
        <MetricsProvider>
          <LoadingGate>
            <Growth />
          </LoadingGate>
        </MetricsProvider>
      </QueryClientProvider>
    </SiteWrapper>
  );
}

// Just decides whether we're loading or not.
const LoadingGate = ({ children }: { children: ReactNode }) => {
  const { isLoaded } = useMetrics();

  return isLoaded ? <>{children}</> : <TopHatSpinner></TopHatSpinner>;
};

export default App;
