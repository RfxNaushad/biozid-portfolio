"use client";

import React from "react";
import { VideoShowcaseData, YouTubeVideoItem } from "@/types/portfolio";

interface VideoShowcaseSectionProps {
  data?: VideoShowcaseData;
}

const DEFAULT_YOUTUBE_VIDEOS: YouTubeVideoItem[] = [
  {
    id: "yt-1",
    title: "Why I Am Leaving Charlotte North Carolina: My Story & Insights In Charlotte NC | NC Real Estate",
    youtubeUrl: "https://youtu.be/2V0aBhat_zw?si=2sEqqsoY_Tz3E4tQ",
  },
  {
    id: "yt-2",
    title: "Buyer Broker Agreement: The Truth Every Buyer Must Know! 💡 | Rick Garcia",
    youtubeUrl: "https://youtu.be/JNytc-SPej4?si=C0TmuZ3a_LXATecX",
  },
];

const DEFAULT_VIDEO_DATA: VideoShowcaseData = {
  sectionTitle: "Reels & Video Production",
  embedUrl: "https://www.instagram.com/reel/DYFixHHo4TZ/",
  youtubeVideos: DEFAULT_YOUTUBE_VIDEOS,
  reels: [
    {
      id: "reel-1",
      title: "Coffee & Matcha",
      instagramUrl: "https://www.instagram.com/reel/DYFixHHo4TZ/",
    },
    {
      id: "reel-2",
      title: "The Witch's Cottage",
      instagramUrl: "https://www.instagram.com/reel/DRiTZ69kpDj/",
    },
    {
      id: "reel-3",
      title: "Architecture & Aesthetics",
      instagramUrl: "https://www.instagram.com/reel/DSnccC7kW0_/",
    },
    {
      id: "reel-4",
      title: "Match Day Atmosphere",
      instagramUrl: "https://www.instagram.com/reel/DHrUD0zymG6/",
    },
    {
      id: "reel-5",
      title: "POV: World Cup Match",
      instagramUrl: "https://www.instagram.com/reel/DDLVKtHyIU7/",
    },
    {
      id: "reel-6",
      title: "FIFA World Cup 2026",
      instagramUrl: "https://www.instagram.com/reel/DMJkHvDPayK/",
    },
  ],
};

export function VideoShowcaseSection({ data = DEFAULT_VIDEO_DATA }: VideoShowcaseSectionProps) {
  const youtubeVideos =
    data.youtubeVideos && data.youtubeVideos.length > 0
      ? data.youtubeVideos
      : DEFAULT_VIDEO_DATA.youtubeVideos || DEFAULT_YOUTUBE_VIDEOS;
  const reels = data.reels && data.reels.length > 0 ? data.reels : DEFAULT_VIDEO_DATA.reels;

  const getYouTubeEmbedUrl = (urlOrId?: string) => {
    if (!urlOrId) return "";
    const shortMatch = urlOrId.match(/youtu\.be\/([a-zA-Z0-9_-]+)/);
    if (shortMatch && shortMatch[1]) {
      return `https://www.youtube.com/embed/${shortMatch[1]}`;
    }
    const watchMatch = urlOrId.match(/[?&]v=([a-zA-Z0-9_-]+)/);
    if (watchMatch && watchMatch[1]) {
      return `https://www.youtube.com/embed/${watchMatch[1]}`;
    }
    if (urlOrId.includes("youtube.com/embed/")) {
      const id = urlOrId.split("embed/")[1]?.split(/[?&]/)[0];
      return `https://www.youtube.com/embed/${id}`;
    }
    return `https://www.youtube.com/embed/${urlOrId.trim()}`;
  };

  // We keep ?hidecaption=true so the footer remains as small and predictable as possible
  const getEmbedUrl = (url?: string) => {
    if (!url) return "https://www.instagram.com/reel/DYFixHHo4TZ/embed/?hidecaption=true";
    const cleanUrl = url.split("?")[0].replace(/\/$/, "");
    return `${cleanUrl}/embed/?hidecaption=true`;
  };

  return (
    <section className="w-full bg-white px-4 sm:px-6 md:px-10 lg:px-16 2xl:px-20 py-12 sm:py-16 md:py-24 relative overflow-hidden">
      <div className="w-full max-w-[1750px] mx-auto">
        {/* YouTube Video Showcase (Side by Side above Instagram Reels) */}
        {youtubeVideos.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 items-start mb-6 sm:mb-8 md:mb-10">
            {youtubeVideos.map((video) => {
              const embedUrl = getYouTubeEmbedUrl(video.youtubeUrl);
              return (
                <div
                  key={video.id}
                  className="group relative w-full aspect-video rounded-2xl sm:rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-neutral-200/40 bg-black"
                >
                  <iframe
                    src={embedUrl}
                    className="w-full h-full border-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    loading="lazy"
                    title={video.title || "YouTube video player"}
                  />
                </div>
              );
            })}
          </div>
        )}

        {/* Instagram Reels Showcase */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 items-start">
          {reels.map((reel) => {
            const embedUrl = getEmbedUrl(reel.instagramUrl);
            return (
              <div
                key={reel.id}
                className="group relative w-full aspect-[9/16] rounded-2xl sm:rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-neutral-200/40 bg-black pointer-events-auto"
              >
                {/* The absolute wrapper uses top/bottom coordinates instead of height calculations.
                  This ensures the frame is always oversized on the top and bottom regardless of browser bugs,
                  allowing the parent aspect-[9/16] to perfectly clip the header and footer.
                */}
                <div className="absolute left-0 right-0 top-[-54px] bottom-[-250px]">
                  <iframe
                    src={embedUrl}
                    className="w-full h-full border-0"
                    allowTransparency={true}
                    allow="encrypted-media; autoplay; clipboard-write; picture-in-picture"
                    scrolling="no"
                    title={reel.title || "Instagram Reel"}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}