"use client";
import React, { useEffect, useId, useRef, useState } from "react";
import { HiChevronDown } from "react-icons/hi2";

export default function Accordion({
  title,
  content,
  video,
  defaultOpen = false,
  className = "",
  link,
}) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const [tiltDeg, setTiltDeg] = useState(0);
  const regionId = useId();

  const contentRef = useRef(null);
  const videoWrapRef = useRef(null);
  const videoRef = useRef(null);

  // Scroll-based tilt effect
  useEffect(() => {
    const el = videoWrapRef.current;
    if (!el) return;

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) {
      setTiltDeg(0);
      return;
    }

    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = window.requestAnimationFrame(() => {
        raf = 0;
        const rect = el.getBoundingClientRect();
        const viewportH = window.innerHeight || 1;
        const centerDelta = Math.abs(
          rect.top + rect.height / 2 - viewportH / 2
        );
        const maxTilt = 16;
        const t = Math.min(1, centerDelta / (viewportH / 2));
        const deg = Math.max(0, Math.min(maxTilt, maxTilt * t));
        setTiltDeg(deg);
      });
    };

    onScroll(); // initial run
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [isOpen]);

  // Auto play/pause video when visible
  useEffect(() => {
    const vid = videoRef.current;
    if (!vid) return;

    if (!isOpen) {
      vid.pause();
      return;
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!vid) return;
        if (entry.isIntersecting) {
          vid.play().catch(() => {});
        } else {
          vid.pause();
        }
      },
      { threshold: 0.25 }
    );

    if (videoWrapRef.current) io.observe(videoWrapRef.current);
    return () => io.disconnect();
  }, [isOpen]);

  return (
    <div
      className={`w-full ${className} ${
        isOpen && "bg-gray-50"
      } py-4 px-8 rounded-lg`}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between py-2 font-inter text-2xl select-none outline-none transition-colors hover:opacity-90 focus-visible:ring-2 focus-visible:ring-black/10 focus-visible:ring-offset-2 rounded-md"
        aria-expanded={isOpen}
        aria-controls={regionId}
      >
        <span className="text-left">{title}</span>
        <HiChevronDown
          aria-hidden
          className={`text-lg shrink-0 transition-transform duration-200 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>

      <div
        id={regionId}
        role="region"
        aria-hidden={!isOpen}
        className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div ref={contentRef} className="overflow-hidden">
          <div className="pt-1 pb-3 font-inter text-lg + break-words whitespace-normal">
            {content}

            {video ? (
              <>
                <div
                  ref={videoWrapRef}
                  className="relative mx-auto max-w-4xl mt-6 will-change-transform"
                  style={{
                    transform: `perspective(1000px) rotateX(${tiltDeg}deg)`,
                    transition: "transform 120ms ease-out",
                  }}
                >
                  <div className="relative">
                    <div
                      className="w-full overflow-hidden shadow-xl rounded-md"
                      style={{ transform: "translateZ(0px)", zIndex: 1 }}
                    >
                      <video
                        ref={videoRef}
                        className="w-full h-full object-cover"
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="metadata"
                        tabIndex={-1}
                      >
                        <source src={video} type="video/mp4" />
                      </video>
                    </div>
                  </div>
                </div>

                {link && (
                  <div className="mt-4">
                    <a
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block font-inter text-lg underline underline-offset-4 hover:opacity-80 transition"
                    >
                      View project ↗
                    </a>
                  </div>
                )}
              </>
            ) : (
              <div className="font-inter text-lg mt-2 opacity-70">
                sorry, no video for this project :&#40;
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
