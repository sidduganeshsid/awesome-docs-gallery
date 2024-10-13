"use client";

import React from 'react';

const ContributePage: React.FC = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Contribute to Awesome Docs Gallery</h1>
      <p className="mb-4">
        We welcome contributions from the community! You can easily add your favorite developer documentation to the Awesome Docs Gallery by following the steps below.
      </p>
      <h2 className="text-xl font-semibold mb-2">How to Contribute</h2>
      <ol className="list-decimal list-inside mb-4">
        <li className="mb-2">
          Visit our GitHub repository: <a href="https://github.com/your-repo/awesome-docs-gallery" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">GitHub Repository</a>.
        </li>
        <li className="mb-2">
          Fork the repository to your own GitHub account.
        </li>
        <li className="mb-2">
          Edit the <code>data.json</code> file located in the <code>src/data/</code> directory to add your documentation entry. Each entry should include:
          <ul className="list-disc list-inside ml-6">
            <li><strong>id</strong>: A unique number for the entry.</li>
            <li><strong>title</strong>: The title of the documentation.</li>
            <li><strong>description</strong>: A brief description of the documentation.</li>
            <li><strong>link</strong>: The URL link to the documentation.</li>
            <li><strong>logo</strong>: A link to the logo image of the documentation.</li>
            <li><strong>category</strong>: The category of the documentation (e.g., "API Documentation", "Framework Guides").</li>
          </ul>
        </li>
        <li className="mb-2">
          Commit your changes and create a pull request.
        </li>
        <li className="mb-2">
          Our team will review your pull request, and once approved, your documentation will be added to the gallery!
        </li>
      </ol>
      <p className="mb-4">
        If you have any questions, feel free to open an issue on our GitHub repository. We appreciate your contributions!
      </p>
    </div>
  );
};

export default ContributePage;