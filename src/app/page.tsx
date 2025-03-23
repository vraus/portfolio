'use client';

import '../styles/globals.css';
// import { useState, useEffect } from "react";
import Layout from "../components/Layout"
import Educations from "../components/Educations"
import Projects from "@/components/Projects";
import TechnicalExperience from "@/components/Technical";
import ThemeToggleButton from "@/components/ThemeToggleButton";



export default function Home() {

  return (
    <div className="container">
      <Layout>

        <div className="absolute top-4 right-4">
          <ThemeToggleButton />
        </div>

        <div className="mb-4">
          <TechnicalExperience />
        </div>

        <div className="mb-4">
          <Projects />
        </div>

        <div className="mb-4">
          <Educations />
        </div>

      </Layout>
    </div>
  );
}
