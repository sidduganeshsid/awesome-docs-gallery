"use client";

import React from "react";
import Header from "@/components/Header";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import DocCard from "@/components/DocCard";

// Array to store documentation tools
const docsTools = [
  {
    id: 1,
    title: "Docs by Hashnode",
    description: "The content engine for your API docs and product guides. Create and scale developer documentation and API references with GitHub sync, built in AI-features, Headless mode and more.",
    link: "https://docs.hashnode.com/",
    logo: "https://cdn.hashnode.com/res/hashnode/image/upload/v1729281652059/1cvYpHl9F.jpg?auto=format", 
    screenshot: "https://cdn.hashnode.com/res/hashnode/image/upload/v1729281626134/lf9tAAH9z.png?auto=format", 
    github: "",
    linkedin: "https://linkedin.com/company/hashnode",
    x: "https://x.com/hashnode",
  },
  {
    id: 2,
    title: "Docusaurus",
    description: "Easily build optimized websites using React for your open-source project.",
    link: "https://docusaurus.io/",
    logo: "https://cdn.hashnode.com/res/hashnode/image/upload/v1729281269828/PUMyx1KdK.png?auto=format",
    screenshot: "https://cdn.hashnode.com/res/hashnode/image/upload/v1729281215685/lYUHWAWaF.png?auto=format",
    github: "",
    linkedin: "",
    x: "https://x.com/docusaurus",
  },
  {
    id: 3,
    title: "GitBook",
    description: "Collaborative documentation platform for teams and individuals.",
    link: "https://www.gitbook.com/",
    logo: "https://cdn.hashnode.com/res/hashnode/image/upload/v1729281419268/fM6o0J-Pz.jpg?auto=format",
    screenshot: "https://cdn.hashnode.com/res/hashnode/image/upload/v1729281360388/oyM9rPIDE.png?auto=format",
    github: "",
    linkedin: "",
    x: "https://x.com/GitBookIO",
  },
  {
    id: 4,
    title: "ReadMe",
    description: "The all-in-one platform for creating user-friendly API documentation and seamless developer experiences.",
    link: "https://readme.com/",
    logo: "https://cdn.hashnode.com/res/hashnode/image/upload/v1729281566293/xXgGQdX0F.png?auto=format",
    screenshot: "https://cdn.hashnode.com/res/hashnode/image/upload/v1729281517207/6D_H2wfQF.png?auto=format",
    github: "",
    linkedin: "",
    x: "https://x.com/readme",
  },
];

const ToolsPageContent: React.FC = () => {
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
    <main className="max-w-5xl mx-auto md:pt-5 transition-colors duration-200 flex flex-col items-stretch gap-10 px-5 lg:px-0 overflow-x-hidden lg:overflow-x-visible">
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
        <span className="text-2xl text-neutral-500 dark:text-neutral-300">
          ✲
        </span>
        <p className="text-lg text-neutral-500 dark:text-neutral-300 font-semibold">
          awesome-docs.gallery
        </p>
        <h1 className="text-3xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-neutral-950 dark:from-neutral-100 dark:via-neutral-300 via-neutral-600 dark:to-neutral-400 to-neutral-500 text-balance text-center !leading-tight !tracking-tight">
          Best documentation tools for developers.
        </h1>
      </motion.section>

      {/* Cards section to list documentation tools */}
      <section className="pt-10 pb-32 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {docsTools.map((tool) => (
          <DocCard
            key={tool.id}
            title={tool.title}
            description={tool.description}
            link={tool.link}
            logo={tool.logo}
            screenshot={tool.screenshot}
            github={tool.github}
            linkedin={tool.linkedin}
            x={tool.x}
            linkText="Check out the tool"
          />
        ))}
      </section>
    </main>
  );
};

export default ToolsPageContent;

