import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "./assets/css/tailwind.css";
import "./assets/css/animate.css";
import "./assets/css/swiper-bundle.min.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { rootStore, persistor } from "./redux/config/persist.config";
import { PersistGate } from "redux-persist/integration/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queyClient = new QueryClient();
createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <QueryClientProvider client={queyClient}>
            <Provider store={rootStore}>
                <PersistGate loading={null} persistor={persistor}>
                    <BrowserRouter>
                        <App />
                    </BrowserRouter>
                </PersistGate>
            </Provider>
        </QueryClientProvider>
    </StrictMode>
);
