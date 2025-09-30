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

  // Scroll-based tilt effect (disabled on mobile for performance)
  useEffect(() => {
    const el = videoWrapRef.current;
    if (!el) return;

    // Check for reduced motion preference
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) {
      setTiltDeg(0);
      return;
    }

    // Disable tilt effect on mobile devices (screen width < 768px)
    const isMobile = window.innerWidth < 768;
    if (isMobile) {
      setTiltDeg(0);
      return;
    }

    let raf = 0;
    let lastScrollY = window.scrollY;
    
    const onScroll = () => {
      if (raf) return;
      
      // Throttle scroll events
      const currentScrollY = window.scrollY;
      if (Math.abs(currentScrollY - lastScrollY) < 10) return;
      lastScrollY = currentScrollY;
      
      raf = window.requestAnimationFrame(() => {
        raf = 0;
        const rect = el.getBoundingClientRect();
        const viewportH = window.innerHeight;
        const elementCenter = rect.top + rect.height / 2;
        const viewportCenter = viewportH / 2;
        
        // Calculate distance from viewport center
        const distance = Math.abs(elementCenter - viewportCenter);
        const maxDistance = viewportH / 2;
        
        // Apply tilt based on distance (closer to center = more tilt)
        const maxTilt = 8; // Reduced from 16 for subtler effect
        const tiltRatio = Math.min(distance / maxDistance, 1);
        const tilt = maxTilt * (1 - tiltRatio);
        
        setTiltDeg(Math.max(0, tilt));
      });
    };

    // Initial calculation
    onScroll();
    
    // Add event listeners
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
      } py-4 px-4 sm:px-6 md:px-8 rounded-lg transition-all duration-300 hover:shadow-md hover:scale-[1.02] border border-transparent hover:border-blue-200`}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between py-2 font-inter text-xl sm:text-2xl select-none outline-none transition-all duration-300 hover:tracking-wide hover:text-blue-600 focus-visible:ring-2 focus-visible:ring-blue-300 focus-visible:ring-offset-2 rounded-md"
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
          <div className="pt-1 pb-3 font-inter text-base sm:text-lg + break-words whitespace-normal">
            {content}

            {video ? (
              <>
                <div
                  ref={videoWrapRef}
                  className="relative mx-auto max-w-4xl mt-6 will-change-transform"
                  style={{
                    transform: `perspective(1000px) rotateX(${tiltDeg}deg)`,
                    transition: "transform 150ms ease-out",
                  }}
                >
                  <div className="w-full overflow-hidden shadow-xl rounded-md">
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

                {link && (
                  <div className="mt-4">
                    <a
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block font-inter text-base sm:text-lg underline underline-offset-4 hover:opacity-80 transition-all duration-300 hover:text-blue-600 hover:tracking-wide"
                    >
                      View project ↗
                    </a>
                  </div>
                )}
              </>
            ) : (
              <div className="font-inter text-base sm:text-lg mt-2 opacity-70">
                sorry, no video for this project :&#40;
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
