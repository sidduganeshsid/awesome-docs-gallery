"use client";

import React, { useState, useMemo } from "react";
import data from "../data/data.json";
import DocCard from "@/components/DocCard";
import Header from "@/components/Header";
import { motion } from "framer-motion";

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
  const [searchTerm, setSearchTerm] = useState("");

  const filteredAndSortedData = useMemo(() => {
    const filtered = data.filter(
      (item: DocItem) =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return filtered.sort((a, b) => a.title.localeCompare(b.title));
  }, [searchTerm]);

  const featuredData = useMemo(
    () => filteredAndSortedData.filter((item) => item.featured),
    [filteredAndSortedData]
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.2, ease: "easeInOut" },
    },
  };

  return (
    <>
      <main className="max-w-5xl mx-auto pt-5 transition-colors duration-200 flex flex-col items-stretch gap-10">
        <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        {!searchTerm && (
          <motion.section
            initial="hidden"
            animate="visible"
            variants={sectionVariants}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="flex flex-col pt-16 pb-32 gap-1 items-center max-w-3xl mx-auto relative"
          >
            <span className="text-2xl text-neutral-500">✲</span>
            <h1 className="text-lg text-neutral-500 font-semibold">
              awesome-docs.gallery
            </h1>
            <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-neutral-950 via-neutral-600 to-neutral-500 text-balance text-center leading-tight">
              A curated open-source gallery for high-quality dev docs.
            </h2>
            <div className="absolute -z-10 -top-96 -right-80">
              <svg
                fill="none"
                className="w-[800px] h-auto block"
                viewBox="0 0 981 862"
              >
                <g filter="url(#a)">
                  <path
                    fill="#FAE8FF"
                    d="M359.5 393.5V291l56-127.5 86 53.5h101l72 59.5H775l-52 167H519.5l-160-50Z"
                  />
                  <path
                    fill="#A7F3D0"
                    d="m120.5 436.5 61-109.5h40l28.5 61 91.5 38 23.5 66.5-59 64.5-124.5-45-61-75.5Z"
                  />
                  <path
                    fill="#E0F2FE"
                    d="m252 476 30.5-356 45 99L473 262l90 77.5L766 397l122 37.5L949.5 593 766 729.5 498 742l-246-75.5V476Z"
                  />
                </g>
                <defs>
                  <filter
                    id="a"
                    width="1069"
                    height="862"
                    x=".5"
                    y="0"
                    color-interpolation-filters="sRGB"
                    filterUnits="userSpaceOnUse"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feBlend
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    />
                    <feGaussianBlur
                      result="effect1_foregroundBlur_1_138"
                      stdDeviation="60"
                    />
                  </filter>
                </defs>
              </svg>
            </div>
          </motion.section>
        )}
        {featuredData.length > 0 && (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.h2
              className="text-2xl font-bold mb-5 mx-4 scroll-mt-28"
              id="featured"
              variants={itemVariants}
            >
              Featured
            </motion.h2>
            <motion.div
              variants={containerVariants}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-stretch"
            >
              {featuredData.map((item) => (
                <div key={item.id}>
                  <motion.div variants={itemVariants} className="h-full">
                    <DocCard {...item} />
                  </motion.div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        )}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h2
            variants={itemVariants}
            className="text-2xl font-bold mb-5 mx-4 scroll-mt-28"
          >
            All docs
          </motion.h2>
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-stretch"
          >
            {filteredAndSortedData.map((item) => (
              <div key={item.id}>
                <motion.div variants={itemVariants} className="h-full">
                  <DocCard {...item} />
                </motion.div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </main>
    </>
  );
};

export default HomePage;
