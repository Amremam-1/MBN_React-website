import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import App from "./App.jsx"
import { RouterProvider } from "react-router-dom"
import routes from "../src/routes.jsx"
import "./i18n"
import { QueryClient, QueryClientProvider } from "react-query"
import { ThemeProvider } from "./components/ThemeContext"

const queryClient = new QueryClient()

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <RouterProvider router={routes}>
          <App />
        </RouterProvider>
      </ThemeProvider>
    </QueryClientProvider>
  </StrictMode>
)
