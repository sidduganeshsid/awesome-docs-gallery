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
    description: "Docusaurus is an open-source framework that helps developers build, deploy, and maintain documentation websites easily. It supports Markdown, and provides built-in versioning.",
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
        <div className="absolute -z-10 -top-80 right-0 lg:-right-80">
          <svg
            fill="none"
            className="w-[800px] h-auto block dark:hidden"
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
          <svg
            fill="none"
            className="w-[800px] h-auto hidden dark:block"
            viewBox="0 0 1070 862"
          >
            <g filter="url(#a)">
              <path
                fill="#86198F"
                d="M359.5 393.5V291l56-127.5 86 53.5h101l72 59.5H775l-52 167H519.5l-160-50Z"
              />
              <path
                fill="#065F46"
                d="m120.5 436.5 61-109.5h40l28.5 61 91.5 38 23.5 66.5-59 64.5-124.5-45-61-75.5Z"
              />
              <path
                fill="#075985"
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
                  result="effect1_foregroundBlur_8_8"
                  stdDeviation="60"
                />
              </filter>
            </defs>
          </svg>
        </div>
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

