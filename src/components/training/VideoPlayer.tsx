"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { Play } from "lucide-react";

interface VideoItem {
  id: string;
  title: string;
}

export default function VideoPlayer({
  videos,
}: {
  videos: readonly VideoItem[];
}) {
  const [activeVideoIndex, setActiveVideoIndex] = useState<number | null>(null);

  const featured = videos[0];
  const secondary = videos[1];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
      {/* Featured Large Video (7 cols on lg) */}
      {featured && (
        <div className="lg:col-span-7 flex flex-col">
          <SingleVideoCard
            video={featured}
            isPlaying={activeVideoIndex === 0}
            onPlay={() => setActiveVideoIndex(0)}
            isFeatured={true}
            fallbackImage="/images/hero_skater.jpg"
          />
        </div>
      )}

      {/* Secondary Video (5 cols on lg) */}
      {secondary && (
        <div className="lg:col-span-5 flex flex-col">
          <SingleVideoCard
            video={secondary}
            isPlaying={activeVideoIndex === 1}
            onPlay={() => setActiveVideoIndex(1)}
            isFeatured={false}
            fallbackImage="/images/curve_race.jpg"
          />
        </div>
      )}
    </div>
  );
}

function SingleVideoCard({
  video,
  isPlaying,
  onPlay,
  isFeatured,
  fallbackImage,
}: {
  video: VideoItem;
  isPlaying: boolean;
  onPlay: () => void;
  isFeatured: boolean;
  fallbackImage: string;
}) {
  const [imageError, setImageError] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement | null>(null);

  const isPlaceholder = video.id.startsWith("VIDEO_ID");

  const thumbnailUrl = imageError || isPlaceholder
    ? fallbackImage
    : `https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative w-full h-full rounded-3xl overflow-hidden bg-slate-950 border border-slate-200/80 shadow-md aspect-video select-none"
    >
      {isPlaying ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${video.id}?autoplay=1&mute=0&playsinline=1&controls=1&rel=0&modestbranding=1`}
          title={video.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="w-full h-full border-0 rounded-3xl"
        />
      ) : (
        <div
          onClick={onPlay}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              onPlay();
            }
          }}
          aria-label={`Play video: ${video.title}`}
          className="relative w-full h-full flex items-center justify-center text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 rounded-3xl overflow-hidden cursor-pointer"
        >
          {/* Thumbnail Image */}
          <Image
            src={thumbnailUrl}
            alt={video.title}
            fill
            sizes={isFeatured ? "(max-width: 1024px) 100vw, 58vw" : "(max-width: 1024px) 100vw, 42vw"}
            onError={() => setImageError(true)}
            className="object-cover object-center filter brightness-[0.88] group-hover:scale-105 group-hover:brightness-[0.95] transition-all duration-700 ease-out"
          />

          {/* Soft Dark Vignette Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-black/20 to-black/10" />

          {/* Cursor-Following Magnetic "Watch Video" Pill */}
          <div
            className="pointer-events-none absolute z-20 will-change-transform"
            style={
              isHovered
                ? {
                    left: `${mousePos.x}px`,
                    top: `${mousePos.y}px`,
                    transform: "translate(-50%, -50%) scale(1.05)",
                    transition: "transform 0.08s ease-out, opacity 0.2s ease",
                    opacity: 1,
                  }
                : {
                    left: "50%",
                    top: "50%",
                    transform: "translate(-50%, -50%) scale(1)",
                    transition: "all 0.3s ease-out",
                    opacity: 0.95,
                  }
            }
          >
            <div className="inline-flex items-center gap-2.5 px-5 py-2.5 sm:px-6 sm:py-3 rounded-full bg-white text-slate-950 text-xs sm:text-sm font-semibold tracking-wide shadow-2xl backdrop-blur-md border border-white/60">
              <span className="w-5 h-5 rounded-full bg-slate-950 flex items-center justify-center text-white">
                <Play className="w-2.5 h-2.5 fill-current ml-0.5" />
              </span>
              <span>Watch Video</span>
            </div>
          </div>

          {/* Bottom Left Glass Caption */}
          <div className="absolute bottom-4 left-4 right-4 z-10 flex items-center justify-between pointer-events-none">
            <div className="max-w-[85%] px-3.5 py-1.5 rounded-full bg-black/50 backdrop-blur-md border border-white/20 text-white text-xs sm:text-sm font-medium tracking-wide truncate shadow-sm">
              {video.title}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
