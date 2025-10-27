import React from "react";
import { Package, ShoppingBag, Plus } from "lucide-react";

function Features() {
  const productCount =40 ; // example count

  const features = [
    {
      icon: Package,
      title: "Product Management",
      desc: "Easily add and manage your product catalog",
    },
    {
      icon: ShoppingBag,
      title: "Beautiful Showcase",
      desc: "Display your products with stunning layouts",
    },
    {
      icon: Plus,
      title: "Quick & Easy",
      desc: "Add products in seconds with our simple form",
    },
  ];

  return (
    <section className="container mx-auto px-4 py-20">
      {/* Features Section */}
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {features.map((item, i) => (
          <div
            key={i}
            className="text-center p-6 rounded-lg border border-border bg-card shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-hover)] transition-all"
          >
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-sky-950 flex items-center justify-center">
              <item.icon className="h-8 w-8 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-muted-foreground">{item.desc}</p>
          </div>
        ))}
      </div>

     

      {/* Product Count */}
      <div className="text-center mt-16">
        <div className="inline-block px-6 py-3 bg-secondary rounded-full">
          <p className="text-lg font-semibold">
            <span className="text-3xl font-bold bg-sky-950 bg-clip-text text-transparent">
              {productCount}
            </span>
            <span className="text-muted-foreground ml-2">
              Products Available
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Features;
