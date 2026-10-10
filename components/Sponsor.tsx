import { Istok_Web } from "next/font/google";
import "./Sponsor.css";

const istok = Istok_Web({ subsets: ["latin"], weight: ["400", "700"] });

export default function Sponsor() {
  return (
    <section id="partner" className={`spn ${istok.className}`}>
      <div className="spn-inner">
        <div className="spn-glow" />
        <div className="spn-bar" />
        <h2 className="spn-title">OUR PARTNER</h2>
      </div>
    </section>
  );
}