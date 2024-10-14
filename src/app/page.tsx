"use client";

import React, { useState } from 'react';
import data from '../data/data.json';
import DocCard from "@/components/DocCard";
import Header from "@/components/Header";



interface DocItem {
  id: number;
  title: string;
  description: string;
  link: string;
  logo: string;
  screenshot: string;
  category: string;
  featured: boolean;
  x: string;
  github: string;
  linkedin: string;
}

const HomePage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredData = data.filter((item: DocItem) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const featuredData = filteredData.filter((item) => item.featured);
  const allData = filteredData.filter((item) => !item.featured);

  return (
    <>
      <main className="max-w-5xl mx-auto pt-5 transition-colors duration-200 flex flex-col items-stretch gap-10">
        <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        {!searchTerm && (
          <section className="flex flex-col pt-16 pb-32 gap-1 items-center max-w-3xl mx-auto">
            <span className="text-2xl text-neutral-500">✧</span>
            <h1 className="text-lg text-neutral-500 font-semibold">
              awesome-docs.gallery
            </h1>
            <h2 className="text-5xl font-extrabold text-balance text-center leading-tight">
              A curated open-source gallery for high-quality dev docs.
            </h2>
          </section>
        )}
        <div>
          <h2 className="text-2xl font-bold mb-5 mx-4">Featured</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredData.map((item) => (
              <DocCard key={item.id} {...item} />
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-5 mx-4">All docs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allData.map((item) => (
              <DocCard key={item.id} {...item} />
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default HomePage;