export interface CardProps {
  title: string;
  content: string;
  className?: string; // ✅ This line fixes the error
}


const Card: React.FC<CardProps> = ({ title, content, className = '' }) => (
  <div className={`rounded shadow-md bg-white p-4 ${className}`}>
    <h2 className="text-lg font-semibold mb-2">{title}</h2>
    <p>{content}</p>
  </div>
);

export default Card;