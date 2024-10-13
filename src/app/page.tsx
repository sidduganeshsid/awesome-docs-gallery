"use client";

import React, { useState } from 'react';
import data from '../data/data.json';
import DocCard from '../components/DocCard';
import SearchBar from '../components/SearchBar';

interface DocItem {
  id: number;
  title: string;
  description: string;
  link: string;
  logo: string;
  category: string;
}

const HomePage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredData = data.filter((item: DocItem) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Awesome Docs Gallery</h1>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredData.map((item) => (
          <DocCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;