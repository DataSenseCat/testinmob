import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Layout from "@/components/layout/Layout";
import Placeholder from "./pages/Placeholder";
import Home from "./pages/Home";
import Properties from "./pages/Properties";
import Emprendimientos from "./pages/Emprendimientos";
import Tasaciones from "./pages/Tasaciones";
import Empresa from "./pages/Empresa";
import Admin from "./pages/admin/Admin";
import NewProperty from "./pages/admin/NewProperty";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <Home />
              </Layout>
            }
          />
          <Route
            path="/contact"
            element={
              <Layout>
                <Index />
              </Layout>
            }
          />
          <Route
            path="/properties"
            element={
              <Layout>
                <Properties />
              </Layout>
            }
          />
          <Route
            path="/emprendimientos"
            element={
              <Layout>
                <Emprendimientos />
              </Layout>
            }
          />
          <Route
            path="/tasaciones"
            element={
              <Layout>
                <Tasaciones />
              </Layout>
            }
          />
          <Route
            path="/la-empresa"
            element={
              <Layout>
                <Empresa />
              </Layout>
            }
          />
          <Route
            path="/admin"
            element={
              <Layout>
                <Admin />
              </Layout>
            }
          />
          <Route
            path="/admin/propiedad/nueva"
            element={
              <Layout>
                <NewProperty />
              </Layout>
            }
          />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route
            path="*"
            element={
              <Layout>
                <NotFound />
              </Layout>
            }
          />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

const container = document.getElementById("root")! as HTMLElement & {
  _reactRoot?: any;
};
const root = container._reactRoot ?? createRoot(container);
container._reactRoot = root;
root.render(<App />);

if (import.meta && (import.meta as any).hot) {
  (import.meta as any).hot.accept(() => {
    root.render(<App />);
  });
}
