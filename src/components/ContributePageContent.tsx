"use client";

import React from "react";
import Header from "@/components/Header";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const ContributePageContent: React.FC = () => {
  const router = useRouter();

  const handleSearch = (searchTerm: string) => {
    router.push(`/?search=${encodeURIComponent(searchTerm)}`);
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
    <main className="max-w-5xl mx-auto pt-5 transition-colors duration-200 flex flex-col items-stretch gap-10">
      <Header
        searchTerm=""
        setSearchTerm={(value) =>
          handleSearch(typeof value === "string" ? value : "")
        }
      />
      <motion.section
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
        transition={{ duration: 0.2, ease: "easeInOut" }}
        className="flex flex-col pt-16 pb-32 gap-1 items-center max-w-3xl mx-auto"
      >
        <span className="text-2xl text-neutral-500">✲</span>
        <h1 className="text-lg text-neutral-500 font-semibold">
          awesome-docs.gallery
        </h1>
        <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-neutral-950 via-neutral-600 to-neutral-400 text-balance text-center leading-tight">
          Contribution Guide
        </h2>
      </motion.section>
      <section className="flex flex-col pt-10 pb-32 gap-4 items-start max-w-3xl mx-auto">
        <p className="text-lg text-neutral-700">
          We welcome all contributions that help improve this gallery of
          high-quality developer documentation. To contribute, please follow
          these simple steps:
        </p>
        <ol className="list-decimal list-inside text-neutral-700 space-y-4">
          <li>
            <span className="font-semibold">Fork the Repository:</span> Head
            over to our GitHub repository and fork the project to your own
            GitHub account.
          </li>
          <li>
            <span className="font-semibold">Add Your Documentation:</span>{" "}
            Create a new entry in the <code>data/data.json</code> file,
            including relevant information such as title, description, link,
            logo, and any other details.
          </li>
          <li>
            <span className="font-semibold">Submit a Pull Request:</span> Once
            you&apos;ve added your entry, submit a pull request for review. Our
            team will review your submission and merge it if it meets the
            quality standards.
          </li>
          <li>
            <span className="font-semibold">Stay Updated:</span> Keep an eye on
            your pull request for any comments or suggestions from the
            maintainers.
          </li>
        </ol>
        <p className="text-lg text-neutral-700">
          Thank you for helping us build a comprehensive and high-quality
          collection of developer documentation!
        </p>
      </section>
    </main>
  );
};

export default ContributePageContent;
