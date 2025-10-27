import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import { Plus } from "lucide-react";

interface ProductsPageProps {
  products: Array<{
    id: string;
    name: string;
    price: number;
    description: string;
    image: string;
    category: string;
  }>;
}

const ProductsPage = ({ products }: ProductsPageProps) => {
  return (
    <div className="min-h-screen bg-background">

      <main className="container mx-auto px-4 py-12">
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r bg-sky-950 to-accent bg-clip-text text-transparent">
            Our Products
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Browse our collection of amazing products
          </p>
        </div>

        {products.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-muted-foreground text-lg mb-4">No products yet</p>
            <Link to="/manage">
              <Button className="bg-gradient-to-r bg-sky-950 hover:bg-sky-900 to-accent hover:opacity-90 transition-opacity">
                <Plus className="mr-2 h-4 w-4" />
                Add Your First Product
              </Button>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="group overflow-hidden rounded-lg border border-border/50 bg-card transition-all duration-300 hover:shadow-[var(--shadow-hover)]"
              >
                <div className="aspect-square overflow-hidden bg-muted">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="mb-2 flex items-start justify-between gap-2">
                    <h3 className="font-semibold text-lg text-foreground line-clamp-1">
                      {product.name}
                    </h3>
                    <span className="shrink-0 text-xs px-2 py-1 rounded-full bg-secondary text-secondary-foreground">
                      {product.category}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                    {product.description}
                  </p>
                  <p className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    ${product.price.toFixed(2)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default ProductsPage;
