import { useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import ProductsPage from "./pages/Products";
import ManageProducts from "./pages/ManageProducts";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Navigation from "./components/Navigation";
import Footer from "@/Section/Footer";
import type { Product } from "./components/ProductCard";
import Login from "./components/Login";

const queryClient = new QueryClient();

const App = () => {
  const [products, setProducts] = useState<Product[]>([]);

  const handleAddProduct = (newProduct: Omit<Product, "id">) => {
    const product: Product = {
      ...newProduct,
      id: crypto.randomUUID(),
    };
    setProducts((prev) => [...prev, product]);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Navigation />
        <TooltipProvider>
          <Toaster />
          <Routes>
            <Route
              path="/"
              element={<Index productCount={products.length} />}
            />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/manage" element={<ManageProducts />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </TooltipProvider>
        <Footer />
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
