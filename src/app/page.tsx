'use client';

import '../styles/globals.css';

import Layout from "../components/Layout"
import TechnicalExperience from "@/components/Technical";
import Links from "@/components/Links";



export default function Home() {

  // TODO: When returning to menu, dark / light mode refreshes causing a flash... need to fix this !!
  return (
    <div className="container">
      <Layout>

        <div className="mb-4">
          <Links />
        </div>

        <div className="mb-4">
          <TechnicalExperience />
        </div>

      </Layout>
    </div>
  );
}
