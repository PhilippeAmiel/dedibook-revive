interface BudgetCardProps {
  price: string;
  gradient: string;
  onClick?: () => void;
}

const BudgetCard = ({ price, gradient, onClick }: BudgetCardProps) => {
  return (
    <div 
      className={`${gradient} p-8 rounded-2xl cursor-pointer transform hover:scale-105 transition-transform duration-200 text-white min-h-[160px] flex flex-col justify-center`}
      onClick={onClick}
    >
      <div className="text-lg font-medium opacity-90 mb-2">
        {price.startsWith("Plus") ? "Plus de" : "Moins de"}
      </div>
      <div className="text-4xl font-bold">
        {price.replace("Moins de ", "").replace("Plus de ", "")}
      </div>
    </div>
  );
};

export default BudgetCard;