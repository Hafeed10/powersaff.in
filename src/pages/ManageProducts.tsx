import { AddProductForm } from "@/components/AddProductForm";

const ManageProducts = () => {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-12 max-w-2xl">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Manage Products
          </h1>
          <p className="text-muted-foreground text-lg">
            Add new products to your store inventory
          </p>
        </div>

        <AddProductForm />
      </main>
    </div>
  );
};

export default ManageProducts;
