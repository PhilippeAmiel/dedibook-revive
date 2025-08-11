import React from "react";

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-foreground text-center mb-8">
          DediBook
        </h1>
        <p className="text-xl text-center text-muted-foreground">
          Votre livre dédicacé par votre auteur préféré
        </p>
      </div>
    </div>
  );
};

export default Index;