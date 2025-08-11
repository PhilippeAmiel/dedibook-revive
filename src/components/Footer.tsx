import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Instagram, Music, Twitter, Facebook, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border pt-16 pb-8">
      <div className="container mx-auto px-4">
        {/* Newsletter Section */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Vous voulez être averti du lancement du site et des nouveaux livres ?
              </h3>
            </div>
            <div className="flex w-full md:w-auto">
              <Input 
                placeholder="Votre email" 
                className="rounded-r-none border-r-0 min-w-[250px]"
              />
              <Button className="rounded-l-none">
                Rejoindre
              </Button>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            Proposez votre livre !
          </Button>
          <Button variant="outline" size="lg" className="border-foreground text-foreground hover:bg-muted">
            Rejoindre comme éditeur
          </Button>
        </div>

        {/* Social Links */}
        <div className="text-center mb-8">
          <p className="text-muted-foreground mb-4">Suivez nous sur les réseaux sociaux</p>
          <div className="flex justify-center space-x-4">
            <Button variant="ghost" size="sm" className="p-2">
              <Instagram className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="sm" className="p-2">
              <Music className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="sm" className="p-2">
              <Twitter className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="sm" className="p-2">
              <Facebook className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="sm" className="p-2">
              <Mail className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-muted-foreground">
          © 2025 Dedibook • Mentions légales • CGV
        </div>
      </div>
    </footer>
  );
};

export default Footer;