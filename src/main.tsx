import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
// import "./index.css"
import LoginPage from "./components/login/login-page"
// import "./App.css"
import "./styles/globals.css"

createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <LoginPage />
  </StrictMode>,
)
