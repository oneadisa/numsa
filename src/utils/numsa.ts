import type { ContentItem } from '../types/numsa';

// Type for Astro collection items
interface CollectionItem {
  id: string;
  slug?: string;
  data: {
    title?: string;
    position?: string;
    excerpt?: string;
    caption?: string;
    bio?: string;
    image?: string;
    mainImage?: string;
    date?: string;
    author?: string;
    serial?: number;
    draft?: boolean;
    level?: number;
    otherImages?: string[];
  };
}

/**
 * Unified content formatting function that handles all content types
 */
export function formatContent(items: CollectionItem[], contentType: string): ContentItem[] {
  return items
    .filter(item => !item.data.draft)
    .sort((a, b) => {
      // Sort by serial number (descending for campaigns, ascending for others)
      if (contentType === 'campaigns' || contentType === 'outreaches' || contentType === 'zoom-conferences') {
        return (b.data.serial || 0) - (a.data.serial || 0);
      }
      return (a.data.serial || 0) - (b.data.serial || 0);
    })
    .map(item => ({
      id: item.id,
      title: item.data.title || item.data.position || 'Untitled',
      excerpt: item.data.excerpt || item.data.caption || item.data.bio || '',
      image: item.data.image || item.data.mainImage || '',
      date: item.data.date || '',
      author: item.data.author || '',
      serial: item.data.serial || 0,
      contentType: contentType as ContentItem['contentType'],
      link: getContentLink(contentType, item),
      // Extended fields
      position: item.data.position || '',
      level: item.data.level || 0,
      bio: item.data.bio || '',
      mainImage: item.data.mainImage || '',
      otherImages: item.data.otherImages || [],
      caption: item.data.caption || '',
    }));
}

/**
 * Generate consistent links for all content types
 */
export function getContentLink(contentType: string, item: CollectionItem): string {
  switch (contentType) {
    case 'excos':
      return `/2024/excos/${item.id}`;
    case 'senators':
      return `/2024/house/${item.id}`;
    case 'jc':
      return `/2024/jc/${item.id}`;
    case 'campaigns':
      return `/advocacy-campaigns/${item.slug || item.id}`;
    case 'outreaches':
      return `/outreaches/${item.slug || item.id}`;
    case 'zoom-conferences':
      return `/zoom-conferences/${item.slug || item.id}`;
    default:
      return `/${contentType}/${item.slug || item.id}`;
  }
}

/**
 * Generate consistent metadata for all content types
 */
export function getContentMetadata(item: CollectionItem, contentType: string) {
  return {
    title: item.data.title || item.data.position || 'NUMSA Content',
    description: item.data.excerpt || item.data.caption || item.data.bio || `View ${contentType} content`,
    image: item.data.image || item.data.mainImage || '',
    date: item.data.date || '',
    author: item.data.author || '',
  };
}

/**
 * Get content type display name
 */
export function getContentTypeDisplayName(contentType: string): string {
  const displayNames: Record<string, string> = {
    'excos': 'Executive Council',
    'senators': 'House Members',
    'jc': 'Junior Council',
    'campaigns': 'Advocacy Campaigns',
    'outreaches': 'Outreach Programs',
    'zoom-conferences': 'Zoom Conferences',
  };
  
  return displayNames[contentType] || contentType.charAt(0).toUpperCase() + contentType.slice(1);
}

/**
 * Get content type description
 */
export function getContentTypeDescription(contentType: string): string {
  const descriptions: Record<string, string> = {
    'excos': 'Meet the executive council members of NUMSA',
    'senators': 'View the house members and senators',
    'jc': 'Explore the junior council members',
    'campaigns': 'Browse our latest advocacy campaigns',
    'outreaches': 'Discover our community outreach programs',
    'zoom-conferences': 'Watch our recorded zoom conferences',
  };
  
  return descriptions[contentType] || `Browse our ${contentType}`;
}


