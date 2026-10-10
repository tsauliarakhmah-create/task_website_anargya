import Link from "next/link";
import { Istok_Web, Bebas_Neue } from "next/font/google";
import About from "@/components/About";
import "./hero.css";
import Achievement from "@/components/Achievement";
import News from "@/components/News";
import Sponsor from "@/components/Sponsor";

const istok = Istok_Web({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-istok",
});
const titleFont = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-title",
});

export default function Home() {
  return (
    <>
      <section className={`hero ${istok.variable} ${titleFont.variable}`}>
        <div className="hero-inner">
          <div className="hero-glow" />
          <p className="hero-small">Let&apos;s get started with</p>
          <h1 className="hero-title">
            ANARGYA <span>9TH GEN</span>
          </h1>
          <p className="hero-tagline">&quot;Born to Move Forward&quot;</p>
          <Link href="#about" className="hero-button">
            Innovation Start Here
          </Link>
        </div>
      </section>

      <About />
      <Achievement />
      <News />
      <Sponsor />

    </>
  );
}