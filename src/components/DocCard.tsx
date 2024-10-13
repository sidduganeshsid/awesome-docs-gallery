"use client";

import React from 'react';

interface DocCardProps {
  id: number;
  title: string;
  description: string;
  link: string;
  logo: string;
  category: string;
}

const DocCard: React.FC<DocCardProps> = ({ title, description, link, logo }) => {
  return (
    <div className="border p-4 rounded shadow">
      <img src={logo} alt={title} className="w-16 h-16 mb-4" />
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-700 mb-4">{description}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:underline"
      >
        View Documentation
      </a>
    </div>
  );
};

export default DocCard;