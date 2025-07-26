import React from 'react';
// No additional imports needed here
interface CardProps {
    title: string;
    children: React.ReactNode;
    className?: string;
}

const Card: React.FC<CardProps> = ({ title, children, className = '' }) => (
    <div className={`rounded shadow-md bg-white p-4 ${className}`}>
        <h2 className="text-lg font-semibold mb-2">{title}</h2>
        <div>{children}</div>
    </div>
);

export default Card;