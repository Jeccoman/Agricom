import type { MetaFunction } from "@remix-run/node";
import "swiper/css";
import Achievements from "~/components/achievment";
import Features from "~/components/Features";
import Hero from "~/components/Hero";
import Marquee from "~/components/Marqee";
import Partners from "~/components/Partners";


export const meta: MetaFunction = () => {
  return [
    { title: "Agricom | Farm Solutions" },
    { name: "description", content: "Tanzania's leading farm mechanization company" },
  ];
};

export default function LandingPage() {
  return (
    <main className="font-sans">
      <Hero />  
      <Features />
      <Achievements />
      <Partners />
      <Marquee />
     
    </main>
  );
}