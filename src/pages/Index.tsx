import Navigation from "@/components/Navigation";
import CategoryCard from "@/components/CategoryCard";
import FeatureCard from "@/components/FeatureCard";
import BudgetCard from "@/components/BudgetCard";
import Footer from "@/components/Footer";
import { Search, Edit3, Mail, Upload } from "lucide-react";

const Index = () => {
  // Placeholder images - in a real app these would come from a database or API
  const categories = [
    { title: "Meilleures ventes", image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=200&h=200&fit=crop&crop=face" },
    { title: "Nouveautés", image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=200&h=200&fit=crop" },
    { title: "Fiction", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop" },
    { title: "BD/Manga", image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=200&h=200&fit=crop" },
    { title: "Jeunesse", image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=200&h=200&fit=crop" },
    { title: "Bien-être", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-12">
            Votre livre dédicacé par votre auteur préféré
          </h1>
          
          {/* Categories */}
          <div className="grid grid-cols-3 md:grid-cols-7 gap-8 max-w-6xl mx-auto">
            {categories.map((category, index) => (
              <CategoryCard 
                key={index}
                image={category.image}
                title={category.title}
              />
            ))}
            <div className="flex flex-col items-center space-y-3">
              <div className="w-24 h-24 rounded-full border-2 border-dashed border-muted-foreground flex items-center justify-center cursor-pointer hover:border-primary transition-colors">
                <span className="text-xs text-center text-muted-foreground px-2">
                  Voir toutes les catégories
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground mb-12">
            Comment DEDIBOOK fonctionne ?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <FeatureCard 
              icon={Search}
              title="Trouvez un livre"
              description="Parmi tous les auteurs référencés"
            />
            <FeatureCard 
              icon={Edit3}
              title="Demandez une dédicace"
              description="Que ce soit pour vous ou pour offrir, laissez un message à l'auteur pour qu'il puisse personnaliser sa dédicace"
            />
            <FeatureCard 
              icon={Mail}
              title="Recevez votre livre"
              description="En moins de 2 semaines, vous recevez le livre à l'adresse de votre choix"
            />
            <FeatureCard 
              icon={Upload}
              title="Envoyez vos remerciements"
              description="Via votre compte DediBook, vous pourrez faire un retour à l'auteur"
            />
          </div>
        </div>
      </section>

      {/* Budget Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground mb-12">
            Des livres à tous les budgets
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <BudgetCard 
              price="30 €"
              gradient="bg-budget-30"
            />
            <BudgetCard 
              price="50 €"
              gradient="bg-budget-50"
            />
            <BudgetCard 
              price="100 €"
              gradient="bg-budget-100"
            />
            <BudgetCard 
              price="Plus de 100 €"
              gradient="bg-budget-plus"
            />
          </div>
        </div>
      </section>

      {/* Two Words Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground mb-12">
            DEDIBOOK en 2 mots
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Chaque dédicace est personnalisée
              </h3>
              <p className="text-muted-foreground">
                Votre livre sera unique, augmentera votre plaisir de lecture et renforcera votre lien avec l'auteur
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Des cadeaux inoubliables
              </h3>
              <p className="text-muted-foreground">
                Pour des anniversaires ou pour accompagner les vacances de vos amis, offrir un livre dédicacé est une expérience unique
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;