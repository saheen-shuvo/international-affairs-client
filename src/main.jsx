import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { QueryClient } from "@tanstack/react-query";
import { router } from "./routes/router";
import RootApp from "./RootApp";
import "./index.css";

const queryClient = new QueryClient();

const container = document.getElementById("root");
if (!container) throw new Error("Root container #root not found");

createRoot(container).render(
  <StrictMode>
    <RootApp queryClient={queryClient} router={router} />
  </StrictMode>
);
