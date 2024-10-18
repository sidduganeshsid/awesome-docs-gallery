import ToolsPageContent from "@/components/ToolsPageContent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best documentation tools for developers - Awesome Docs Gallery",
  description:
    "Discover the best tools for creating high-quality developer documentation. Find the best tools for AI projects, API references, cloud docs, and more.",
  openGraph: {
    title: "Best documentation tools for developers - Awesome Docs Gallery",
    description:
      "Discover the best tools for creating high-quality developer documentation. Find the best tools for AI projects, API references, cloud docs, and more.",
    url: "https://awesome-docs.gallery/tools",
    siteName: "awesome-docs.gallery",
    images: [
      {
        url: "/images/og-adg.png",
        width: 1200,
        height: 630,
        alt: "Awesome Docs Gallery",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best documentation tools for developers - Awesome Docs Gallery",
    description:
      "Discover the best tools for creating high-quality developer documentation. Find the best tools for AI projects, API references, cloud docs, and more.",
    creator: "@hashnode",
    images: ["/images/og-adg.png"],
  },
};

export default function ToolsPage() {
  return <ToolsPageContent />;
}
