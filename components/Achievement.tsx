import { Istok_Web } from "next/font/google";
import "./Achievement.css";

const istok = Istok_Web({ subsets: ["latin"], weight: "400" });

export default function Achievement() {
  return (
    <section id="achievement" className={`ach ${istok.className}`}>
      <div className="ach-inner">
        <h2 className="ach-title">ACHIEVEMENT</h2>

        <p className="ach-place ach-place-1">1st Place ....</p>
        <p className="ach-place ach-place-2">1st Place ....</p>

        <div className="ach-photo ach-photo-1" />
        <div className="ach-photo ach-photo-2" />
      </div>
    </section>
  );
}