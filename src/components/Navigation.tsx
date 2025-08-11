import { Search, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Navigation = () => {
  return (
    <nav className="bg-background border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-2xl font-bold text-foreground">
            DediBook
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex items-center space-x-1 text-foreground hover:text-primary cursor-pointer">
              <span>Catégories</span>
              <ChevronDown className="w-4 h-4" />
            </div>
            <a href="#" className="text-foreground hover:text-primary">
              Comment ça marche ?
            </a>
            <a href="#" className="text-foreground hover:text-primary">
              Proposez votre livre
            </a>
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex items-center relative">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Nom du livre ou de l'auteur"
                className="pl-10 w-80 bg-muted border-border"
              />
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm">
              Menu
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;