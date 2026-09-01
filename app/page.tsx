import fs from "fs";
import path from "path";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Ticker from "@/components/Ticker";
import ClientLogos from "@/components/ClientLogos";
import ServiceSystem from "@/components/ServiceSystem";
import MonthlyBento from "@/components/MonthlyBento";
import ProblemSolution from "@/components/ProblemSolution";
import Reporting from "@/components/Reporting";
import ContentLibrary from "@/components/ContentLibrary";
import ImageFilm from "@/components/ImageFilm";
import Process from "@/components/Process";
import Projects from "@/components/Projects";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import LongTerm from "@/components/LongTerm";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";
import StickyMobileCTA from "@/components/StickyMobileCTA";

export default function Home() {
  // Banner-Hintergrundvideo nur einbinden, wenn es tatsächlich vorliegt (echtes MP4).
  const bannerVideo = fs.existsSync(
    path.join(process.cwd(), "public/media/banner.mp4"),
  );
  return (
    <>
      <Header />
      <main>
        <Hero bannerVideo={bannerVideo} />
        <Ticker />
        <ClientLogos />
        <ServiceSystem />
        <MonthlyBento />
        <ProblemSolution />
        <Reporting />
        <ContentLibrary />
        <ImageFilm />
        <Process />
        <Projects />
        <Team />
        <Testimonials />
        <LongTerm />
        <ContactCTA />
      </main>
      <Footer />
      <StickyMobileCTA />
    </>
  );
}
