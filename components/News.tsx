"use client";

import { useEffect, useRef } from "react";
import { Istok_Web } from "next/font/google";
import "./News.css";

const istok = Istok_Web({ subsets: ["latin"], weight: "400" });

export default function News() {
  const trackRef = useRef<HTMLDivElement>(null);
  const drag = useRef({ down: false, startX: 0, startScroll: 0 });

  // awal: kartu ke-2 berada di posisi fokus, kartu ke-1 mengintip dari kiri
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const second = track.children[1] as HTMLElement;
    const pad = parseFloat(getComputedStyle(track).paddingLeft);
    track.scrollLeft = second.offsetLeft - pad;
  }, []);

  const onDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== "mouse") return; // sentuhan pakai scroll bawaan
    const t = trackRef.current!;
    drag.current = { down: true, startX: e.clientX, startScroll: t.scrollLeft };
    t.classList.add("dragging");
  };
  const onMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!drag.current.down) return;
    const t = trackRef.current!;
    t.scrollLeft = drag.current.startScroll - (e.clientX - drag.current.startX);
  };
  const onUp = () => {
    drag.current.down = false;
    trackRef.current?.classList.remove("dragging");
  };

  return (
    <section id="news" className={`news ${istok.className}`}>
      <div className="news-inner">
        <div className="news-glow" />
        <h2 className="news-title">NEWS</h2>

        <div
          className="news-track"
          ref={trackRef}
          onPointerDown={onDown}
          onPointerMove={onMove}
          onPointerUp={onUp}
          onPointerLeave={onUp}
        >
          <div className="news-card news-card-wide" />
          <div className="news-card news-card-wide" />
          <div className="news-card news-card-narrow" />
        </div>
      </div>
    </section>
  );
}