import React from "react";
import Image from "next/image";
import { WorkGalleryData } from "@/types/portfolio";

interface WorkGallerySectionProps {
  data?: WorkGalleryData;
}

const DEFAULT_GALLERY_DATA: WorkGalleryData = {
  title: "Some of my work",
  images: [
    // Row 1: Football 
    { id: "img1", src: "/insta-post/cr7_retired.jpg", alt: "Football Work Sample 1" },
    { id: "img2", src: "/insta-post/manchested_united_cunha.jpg", alt: "Football Work Sample 2" },
    { id: "img3", src: "/insta-post/The_2026_World_Cup_has_been_over_for_a_week_now_but_its_impact_is_still_visible_absolutely_eve.webp", alt: "Football Work Sample 3" },
    { id: "img4", src: "/insta-post/adidas_just revived_aggressive_predator.jpg", alt: "Football Work Sample 4" },
    
    // Row 2: Football
    { id: "img5", src: "/insta-post/The_tunnel_walk_has_officially_become_a_runway_and_we_are_absolutely_here_for_it._The_2026.webp", alt: "Football Work Sample 5" },
    { id: "img6", src: "/insta-post/This_is_exactly_why_the_World_Cup_belongs_to_the_dreamers._Forget_the_billion-dollar_squa.webp", alt: "Football Work Sample 6" },
    { id: "img7", src: "/insta-post/Two_drops_in_48_hours._The_CR7_sneaker_dynasty_has_officially_reached_its_ultimate_golden_chapt.jpg", alt: "Football Work Sample 7" },
    { id: "img8", src: "/insta-post/Corner_to_Crossbar_World_cup_2026_part_2fifaworldcup_FIFAWORLDCUP2026_messi.webp", alt: "Football Work Sample 8" },
    
    // Row 3: Tote Bags
    { id: "img9", src: "/insta-post/Bloom_Bags_limited_Edition_Tote_Bags_-_Eco-Friendly_Fashion__Lifestyletotebag_totebagstyle_.jpg", alt: "Tote Bag Sample 1" },
    { id: "img10", src: "/insta-post/Crush_Impress__Bloom_Bag__.jpg", alt: "Tote Bag Sample 2" },
    { id: "img11", src: "/insta-post/bloom.jpg", alt: "Tote Bag Sample 3" },
    { id: "img12", src: "/insta-post/Introducing_Customized_Our_Soft_Canvas_Tote_Bag_Totes_Bag_for_School_college_Universit.jpg", alt: "Tote Bag Sample 4" },
  ],
};

import { MobileInfiniteSlider } from "./MobileInfiniteSlider";

export function WorkGallerySection({ data = DEFAULT_GALLERY_DATA }: WorkGallerySectionProps) {
  return (
    <section className="w-full bg-[#FDF48F] px-4 sm:px-6 md:px-10 lg:px-16 2xl:px-20 py-16 sm:py-20 md:py-28 relative overflow-hidden">
      <div className="w-full max-w-[1750px] mx-auto">
        
        {/* Section Title with Neo-brutalist Offset Border */}
        <div className="mb-12 sm:mb-16 md:mb-20 inline-block">
          <div className="relative">
            {/* Offset Shadow / Border Element */}
            <div className="absolute top-2 left-2 w-full h-full border-2 sm:border-[3px] border-[#080E38] rounded-xl sm:rounded-2xl" />
            
            {/* Main Title Box */}
            <div className="relative bg-white border-2 sm:border-[3px] border-[#080E38] rounded-xl sm:rounded-2xl px-6 sm:px-10 md:px-16 py-4 sm:py-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-bold text-[#080E38] tracking-tight">
                {data.title}
              </h2>
            </div>
          </div>
        </div>

        {/* Mobile View: Infinite Slider (Visible only on <640px) */}
        <div className="block sm:hidden">
          <MobileInfiniteSlider images={data.images} />
        </div>

        {/* Desktop View: 4-Column Responsive Grid (Hidden on <640px) */}
        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 items-start">
          {data.images.map((image) => (
            <div 
              key={image.id} 
              className="relative w-full rounded-2xl overflow-hidden group hover:scale-[1.02] transition-transform duration-300 shadow-sm hover:shadow-xl"
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={1080}
                height={1080}
                className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-105"
                unoptimized
              />
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
