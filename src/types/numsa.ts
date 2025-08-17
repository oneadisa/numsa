// Unified types for NUMSA content management system

export interface BaseContent {
  id: string;
  title: string;
  excerpt?: string;
  image?: string;
  date?: string;
  author?: string;
  serial?: number;
  draft?: boolean;
}

export interface ExcosContent extends BaseContent {
  position: string;
  level?: number;
  bio?: string;
}

export interface CampaignContent extends BaseContent {
  mainImage?: string;
  otherImages?: string[];
  caption?: string;
}

export interface ContentItem extends BaseContent {
  contentType: 'excos' | 'campaigns' | 'outreaches' | 'zoom-conferences' | 'senators' | 'jc';
  link: string;
  // Extended fields for specific types
  position?: string;
  level?: number;
  bio?: string;
  mainImage?: string;
  otherImages?: string[];
  caption?: string;
}

export interface ContentCollection {
  [key: string]: ContentItem[];
}

export interface ContentListProps {
  items: ContentItem[];
  contentType: string;
  layout?: 'grid' | 'list' | 'cards';
}

export interface ContentItemProps {
  item: ContentItem;
  contentType: string;
}

export interface ContentDetailProps {
  item: ContentItem;
  contentType: string;
}
