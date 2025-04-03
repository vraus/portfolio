'use client';

import '../styles/globals.css';

import Layout from "../components/Layout"
import TechnicalExperience from "@/components/Technical";
import Links from "@/components/Links";



export default function Home() {

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
