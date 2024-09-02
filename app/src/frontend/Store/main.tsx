import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Store from "./Store";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* navbar */}
    <Store />
  </StrictMode>
);
