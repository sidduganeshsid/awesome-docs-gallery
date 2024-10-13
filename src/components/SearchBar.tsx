"use client";

import React from 'react';
import { Input } from "@/components/ui/input";


interface SearchBarProps {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}

const SearchBar: React.FC<SearchBarProps> = ({ searchTerm, setSearchTerm }) => {
  return (
    <Input
      type="text"
      placeholder="Search…"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      className=""
    />
  );
};

export default SearchBar;