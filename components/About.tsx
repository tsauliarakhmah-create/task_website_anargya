import Link from "next/link";
import { Istok_Web } from "next/font/google";
import "./about.css";

const istok = Istok_Web({ subsets: ["latin"], weight: "400" });

export default function About() {
  return (
    <section id="about" className={`story ${istok.className}`}>
      <div className="story-glow" />

      <div className="story-inner">
        {/* ABOUT US */}
        <div className="story-block">
          <h2 className="story-title about-title">About Us</h2>
          <p className="story-text about-text">
            Anargya ITS Formula EV Team is one of the car research teams from
            Sepuluh Nopember Institute of Technology which was founded in
            September 2018 and is also part of ITS PUI-SKO.
          </p>
          <Link href="/cars" className="story-button about-button">
            Our Cars →
          </Link>
          <div className="story-photo about-photo" />
        </div>

        {/* OUR HISTORY */}
        <div id="history" className="story-block">
          <h2 className="story-title history-title">Our History</h2>
          <p className="story-text history-text">
            Our story began in September 2018, driven by a vision to develop
            innovative electric formula cars. Since then, Anargya has continued
            to push the boundaries of automotive technology and represent ITS
            in national and international competitions.
          </p>
          <Link href="/history" className="story-button history-button">
            Read Our Story →
          </Link>
          <div className="story-photo history-photo" />
        </div>
      </div>
    </section>
  );
}