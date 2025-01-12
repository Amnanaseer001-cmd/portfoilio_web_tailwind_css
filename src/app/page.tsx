import Sidebar from "@/components/sidebar";
import Hero from "@/components/hero";
import About from "@/components/about";
import Expertise from "@/components/expertise";
import Hire from "@/components/hire";
import Portfolio from "@/components/portfolio";
import Contact from "@/components/contact";
export default function Main() {
  return (
    <>
      <Sidebar />
      <Hero />
      <About />
      <Expertise />
      <Hire />
      <Portfolio />
      <Contact />
    </>
  );
}
