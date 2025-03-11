// app/routes/_index.tsx (Main landing page route)
import type { MetaFunction } from "@remix-run/node";

import "swiper/css";


export const meta: MetaFunction = () => {
  return [
    { title: "Agricom | Farm Solutions" },
    { name: "description", content: "Tanzania's leading farm mechanization company" },
  ];
};

export default function LandingPage() {
  return (
    <main className="font-sans">
      {/* Hero Section with Swiper */}
      
     
    </main>
  );
}