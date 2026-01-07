import type { ContentItem } from '../types/numsa';
import { CURRENT_SESSION, VALID_SESSIONS } from '../content/config';

// Re-export for convenience
export { CURRENT_SESSION, VALID_SESSIONS };

/**
 * Parse date string into Date object
 * Handles formats like "May 4, 2024", "April 5, 2025", etc.
 */
function parseDate(dateStr: string): Date | null {
  if (!dateStr) return null;
  try {
    const date = new Date(dateStr);
    // Check if date is valid
    if (isNaN(date.getTime())) {
      return null;
    }
    return date;
  } catch {
    return null;
  }
}

// Type for Astro collection items
interface CollectionItem {
  id: string;
  slug?: string;
  session?: string; // Session identifier for cross-session aggregation
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
    session?: string;
  };
}

/**
 * Get the current active session
 */
export function getCurrentSession(): string {
  return CURRENT_SESSION;
}

/**
 * Get all available sessions for archive listing
 */
export function getAvailableSessions(): string[] {
  return [...VALID_SESSIONS];
}

/**
 * Check if a session is valid
 */
export function isValidSession(session: string): boolean {
  return VALID_SESSIONS.includes(session as typeof VALID_SESSIONS[number]);
}

/**
 * Get session display name (e.g., "2024-25" -> "2024/25 Session")
 */
export function getSessionDisplayName(session: string): string {
  return `${session.replace('-', '/')} Session`;
}

/**
 * Get session collection name for a given session and content type
 */
export function getSessionCollectionName(session: string, contentType: 'excos' | 'house' | 'jc'): string {
  return `sessions/${session}/${contentType}`;
}

/**
 * Unified content formatting function that handles all content types
 */
export function formatContent(items: CollectionItem[], contentType: string, session?: string): ContentItem[] {
  const activeSession = session || CURRENT_SESSION;

  return items
    .filter(item => !item.data.draft)
    .sort((a, b) => {
      // For outreaches, campaigns, zoom-conferences, and events, sort by date (newest first)
      if (contentType === 'campaigns' || contentType === 'outreaches' || contentType === 'zoom-conferences' || contentType === 'events') {
        const dateA = parseDate(a.data.date || '');
        const dateB = parseDate(b.data.date || '');
        if (dateA && dateB) {
          return dateB.getTime() - dateA.getTime(); // Newest first
        }
        // Fallback to serial if date parsing fails
        return (b.data.serial || 0) - (a.data.serial || 0);
      }
      return (a.data.serial || 0) - (b.data.serial || 0);
    })
    .map(item => {
      // Use item's session property if available, otherwise use the provided session or current session
      const itemSession = item.session || session || CURRENT_SESSION;

      return {
        id: item.id,
        title: item.data.title || item.data.position || 'Untitled',
        excerpt: item.data.excerpt || item.data.caption || item.data.bio || '',
        image: item.data.image || item.data.mainImage || '',
        date: (item.data.date || '').trim(),
        author: item.data.author || '',
        serial: item.data.serial || 0,
        contentType: contentType as ContentItem['contentType'],
        link: getContentLink(contentType, item, itemSession),
        session: item.data.session || itemSession,
        // Extended fields
        position: item.data.position || '',
        level: item.data.level || 0,
        bio: item.data.bio || '',
        mainImage: item.data.mainImage || '',
        otherImages: item.data.otherImages || [],
        caption: item.data.caption || '',
        name: item.data.name || '', // Person's name for excos/house/jc
      };
    });
}

/**
 * Generate consistent links for all content types
 */
export function getContentLink(contentType: string, item: CollectionItem, session?: string): string {
  const activeSession = session || CURRENT_SESSION;
  
  switch (contentType) {
    case 'excos':
      return `/${activeSession}/excos/${item.id}`;
    case 'house':
    case 'senators':
      return `/${activeSession}/house/${item.id}`;
    case 'jc':
      return `/${activeSession}/jc/${item.id}`;
    case 'campaigns':
      return `/advocacy-campaigns/${item.slug || item.id}`;
    case 'outreaches':
      return `/outreaches/${item.slug || item.id}`;
    case 'zoom-conferences':
      return `/zoom-conferences/${item.slug || item.id}`;
    case 'events':
      return `/events/${item.slug || item.id}`;
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
    'house': 'House Members',
    'senators': 'House Members',
    'jc': 'Legislative Commission',
    'campaigns': 'Advocacy Campaigns',
    'outreaches': 'Outreach Programs',
    'zoom-conferences': 'Zoom Conferences',
    'events': 'Events',
  };
  
  return displayNames[contentType] || contentType.charAt(0).toUpperCase() + contentType.slice(1);
}

/**
 * Get content type description
 */
export function getContentTypeDescription(contentType: string): string {
  const descriptions: Record<string, string> = {
    'excos': 'Meet the executive council members of NUMSA',
    'house': 'View the house members',
    'senators': 'View the house members and senators',
    'jc': 'Explore the legislative commission members',
    'campaigns': 'Browse our latest advocacy campaigns',
    'outreaches': 'Discover our community outreach programs',
    'zoom-conferences': 'Watch our recorded zoom conferences',
    'events': 'Explore NUMSA events and gatherings',
  };
  
  return descriptions[contentType] || `Browse our ${contentType}`;
}

/**
 * Get image path for session-based content
 */
export function getSessionImagePath(session: string, contentType: 'excos' | 'house' | 'jc', filename: string): string {
  return `/assets/images/sessions/${session}/${contentType}/${filename}`;
}
