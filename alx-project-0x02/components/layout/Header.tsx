import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
    return (
        <header className="bg-white shadow p-4 flex items-center justify-between">
            <h1 className="text-xl font-bold text-blue-700">My Project Header</h1>
            <nav className="space-x-4">
                <Link href="/home" className="text-blue-500 hover:underline">Home</Link>
                <Link href="/about" className="text-blue-500 hover:underline">About</Link>
            </nav>
        </header>
    );
};

export default Header;