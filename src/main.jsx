import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./app/Apps";
import { AuthProvider } from "./context/AuthContext";
import "datatables.net-dt/css/dataTables.dataTables.css";
import "./styles/global.css";
import "./styles/darkmode.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </StrictMode>,
);
