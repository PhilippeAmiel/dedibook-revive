interface CategoryCardProps {
  image: string;
  title: string;
  onClick?: () => void;
}

const CategoryCard = ({ image, title, onClick }: CategoryCardProps) => {
  return (
    <div 
      className="flex flex-col items-center space-y-3 cursor-pointer group"
      onClick={onClick}
    >
      <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-transparent group-hover:border-primary transition-colors">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <span className="text-sm font-medium text-foreground text-center">
        {title}
      </span>
    </div>
  );
};

export default CategoryCard;