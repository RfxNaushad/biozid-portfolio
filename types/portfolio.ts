export interface NavItem {
  label: string;
  href: string;
}

export interface HeroData {
  greeting: string;
  roleLine1: string;
  roleLine2: string;
  resumeButtonText: string;
  resumeUrl: string;
  portraitSrc: string;
  portraitAlt: string;
}

export interface AboutData {
  title: string;
  bio: string[];
  handwrittenScriptText?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: "Instagram" | "MessageCircleHeart" | "PenTool" | "Target" | "Palette" | "Sparkles" | string;
}

export interface ServicesData {
  sectionTitle: string;
  items: ServiceItem[];
}

export interface ShowcaseData {
  title: string;
  description: string;
  quote: string;
  imageSrc: string;
  imageAlt: string;
}

export interface WorkGalleryData {
  title: string;
  images: {
    id: string;
    src: string;
    alt: string;
  }[];
}

export interface VideoReelItem {
  id: string;
  title: string;
  subtitle?: string;
  tagline?: string;
  imageSrc?: string;
  videoUrl?: string;
  instagramUrl?: string;
}

export interface YouTubeVideoItem {
  id: string;
  title?: string;
  youtubeUrl: string;
}

export interface VideoShowcaseData {
  sectionTitle?: string;
  embedUrl: string;
  youtubeVideos?: YouTubeVideoItem[];
  reels: VideoReelItem[];
}

export interface PortfolioProps {
  brandName?: string;
  logoSrc?: string;
  logoAlt?: string;
  navItems?: NavItem[];
  ctaText?: string;
  ctaHref?: string;
  hero?: HeroData;
  services?: ServicesData;
  about?: AboutData;
  showcase?: ShowcaseData;
  workGallery?: WorkGalleryData;
  videoShowcase?: VideoShowcaseData;
  bloombags?: BloombagsData;
  sanfernando?: SanFernandoData;
  copywriting?: CopywritingData;
  footer?: FooterData;
}


export interface BloombagsItemData {
  title: string;
  description: string;
  imageSrc: string;
  imageSrc2?: string;
}

export interface BloombagsContributionsData {
  title: string;
  skills: string[];
  imageSrc1: string;
  imageSrc2: string;
}

export interface BloombagsData {
  title: string;
  strategicPlanning: BloombagsItemData;
  contentCreation: BloombagsItemData;
  communityBuilding: BloombagsItemData;
  analytics: BloombagsItemData;
  contributions: BloombagsContributionsData;
}

export interface SanFernandoItemData {
  title: string;
  description?: string;
  imageSrc?: string;
  imageSrc2?: string;
  images?: string[]; // For bottom left 3 images
}

export interface SanFernandoStatsData {
  title: string;
  stats: {
    value: string;
    label: string;
  }[];
}

export interface SanFernandoData {
  title: string;
  strategicPlanning: SanFernandoItemData;
  contentEditing: SanFernandoItemData;
  communityBuilding: SanFernandoItemData;
  analytics: SanFernandoItemData;
  keyNumbers: SanFernandoStatsData;
}

export interface FooterContact {
  phone: string;
  email: string;
}

export interface FooterData {
  topText: string;
  heading: string;
  handwrittenWord: string;
  handwrittenSlashes: string;
  contact: FooterContact;
}

export interface CopywritingItem {
  id: string;
  title: string;
  imageSrc: string;
  width?: number;
  height?: number;
}

export interface CopywritingData {
  items: CopywritingItem[];
}
