import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Work from "@/components/Work";
import { links, services, site } from "@/data/content";

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  url: site.url,
  jobTitle: site.role,
  description: site.description,
  email: `mailto:${links.email}`,
  address: { "@type": "PostalAddress", addressLocality: site.location },
  sameAs: [links.linkedin, links.github],
  knowsAbout: ["WordPress", "Next.js", "SEO", ...services.pillars.flatMap((p) => p.items)],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema).replace(/</g, "\\u003c") }}
      />
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Services />
        <Work />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
