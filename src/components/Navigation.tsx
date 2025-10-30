import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  ShoppingBag,
  Plus,
  Info,
  Briefcase,
  Mail,
  HomeIcon,
  Menu,
  X,
} from "lucide-react";
import Logo from "@/assets/output-onlinepngtools.png";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { to: "/", label: "Home", icon: <HomeIcon className="mr-2 h-4 w-4" /> },
    { to: "/about", label: "About", icon: <Info className="mr-2 h-4 w-4" /> },
    {
      to: "/services",
      label: "Services",
      icon: <Briefcase className="mr-2 h-4 w-4" />,
    },
    {
      to: "/contact",
      label: "Contact",
      icon: <Mail className="mr-2 h-4 w-4" />,
    },
    {
      to: "/products",
      label: "Products",
      icon: <ShoppingBag className="mr-2 h-4 w-4" />,
    },
  ];

  return (
    <header className="border-b border-border sticky top-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-20">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img src={Logo} alt="PowerSaff Logo" className="h-12 w-auto" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-2 md:gap-4 items-center">
          {navLinks.map((link) => (
            <Link key={link.to} to={link.to}>
              <Button variant="outline" className="hover:bg-sky-900" size="sm">
                {link.icon}
                {link.label}
              </Button>
            </Link>
          ))}

          {/* Add Product Button → Login Page */}
          <Link to="/login">
            <Button
              className="bg-gradient-to-r from-sky-950 to-sky-900 hover:opacity-90"
              size="sm"
            >
              <Plus className="mr-2 h-4 w-4" />
              Add Product
            </Button>
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-foreground focus:outline-none"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-background border-t border-border px-4 pb-4 space-y-2">
          {navLinks.map((link) => (
            <Link key={link.to} to={link.to} onClick={() => setIsOpen(false)}>
              <Button
                variant="outline"
                className="w-full justify-start hover:bg-sky-900"
                size="sm"
              >
                {link.icon}
                {link.label}
              </Button>
            </Link>
          ))}

          {/* Add Product → Login */}
          <Link to="/login" onClick={() => setIsOpen(false)}>
            <Button
              className="w-full bg-gradient-to-r from-sky-950 to-sky-900 hover:opacity-90"
              size="sm"
            >
              <Plus className="mr-2 h-4 w-4" />
              Add Product
            </Button>
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navigation;
