/**
 * Session Context Utility
 *
 * Provides utilities for detecting and managing the active session context
 * across the entire application.
 */

import { CURRENT_SESSION, VALID_SESSIONS } from '../content/config';

/**
 * Extract session from URL path
 *
 * @param pathname - The URL pathname (e.g., "/2023-24/excos")
 * @returns Session ID if found in URL, otherwise CURRENT_SESSION
 *
 * @example
 * getSessionFromPath("/2023-24/excos") // "2023-24"
 * getSessionFromPath("/excos") // "2024-25" (current)
 * getSessionFromPath("/about") // "2024-25" (current)
 */
export function getSessionFromPath(pathname: string): string {
  // Remove leading slash
  const path = pathname.startsWith('/') ? pathname.slice(1) : pathname;

  // Extract first segment
  const firstSegment = path.split('/')[0];

  // Check if it matches a valid session format (YYYY-YY)
  if (VALID_SESSIONS.includes(firstSegment)) {
    return firstSegment;
  }

  // Default to current session
  return CURRENT_SESSION;
}

/**
 * Check if we're currently viewing an archived session
 *
 * @param pathname - The URL pathname
 * @returns true if viewing an archived session
 */
export function isArchivedSession(pathname: string): boolean {
  const session = getSessionFromPath(pathname);
  return session !== CURRENT_SESSION;
}

/**
 * Get display name for session indicator
 *
 * @param session - Session ID (e.g., "2024-25")
 * @returns Display text for session indicator
 */
export function getSessionIndicatorText(session: string): string {
  if (session === CURRENT_SESSION) {
    return `${session.replace('-', '/')} Session`;
  }
  return `${session.replace('-', '/')} Archive`;
}

/**
 * Get session badge variant
 *
 * @param session - Session ID
 * @returns Badge styling variant
 */
export function getSessionBadgeVariant(session: string): 'current' | 'archived' {
  return session === CURRENT_SESSION ? 'current' : 'archived';
}

/**
 * Build session-aware URL
 *
 * @param basePath - Base path without session (e.g., "/campaigns")
 * @param session - Session ID (optional, defaults to current)
 * @returns Full URL with session prefix if needed
 *
 * @example
 * buildSessionUrl("/campaigns", "2023-24") // "/2023-24/campaigns"
 * buildSessionUrl("/campaigns", "2024-25") // "/campaigns"
 * buildSessionUrl("/campaigns") // "/campaigns"
 */
export function buildSessionUrl(basePath: string, session?: string): string {
  const activeSession = session || CURRENT_SESSION;

  // For current session, use clean URLs
  if (activeSession === CURRENT_SESSION) {
    return basePath;
  }

  // For archived sessions, prefix with session
  return `/${activeSession}${basePath}`;
}

/**
 * Filter content by session
 *
 * @param items - Array of content items with session field
 * @param session - Session to filter by
 * @returns Filtered array
 */
export function filterBySession<T extends { data: { session?: string } }>(
  items: T[],
  session: string
): T[] {
  return items.filter((item) => item.data.session === session);
}

/**
 * Get all content for a session, with fallback to most recent
 *
 * @param items - Array of content items
 * @param session - Desired session
 * @param allowFallback - Whether to fallback to most recent session
 * @returns Filtered content
 */
export function getSessionContent<T extends { data: { session?: string } }>(
  items: T[],
  session: string,
  allowFallback: boolean = false
): T[] {
  const sessionContent = filterBySession(items, session);

  // If content exists for this session, return it
  if (sessionContent.length > 0) {
    return sessionContent;
  }

  // If fallback is allowed and no content exists, find most recent
  if (allowFallback) {
    // Sort sessions by year (most recent first)
    const sortedSessions = [...VALID_SESSIONS].sort().reverse();

    for (const fallbackSession of sortedSessions) {
      const fallbackContent = filterBySession(items, fallbackSession);
      if (fallbackContent.length > 0) {
        return fallbackContent;
      }
    }
  }

  // No content found
  return [];
}

/**
 * Session context for Astro components
 */
export interface SessionContext {
  session: string;
  isCurrent: boolean;
  isArchived: boolean;
  displayText: string;
  badgeVariant: 'current' | 'archived';
}

/**
 * Create session context object from pathname
 *
 * @param pathname - URL pathname
 * @returns Complete session context
 */
export function createSessionContext(pathname: string): SessionContext {
  const session = getSessionFromPath(pathname);

  return {
    session,
    isCurrent: session === CURRENT_SESSION,
    isArchived: session !== CURRENT_SESSION,
    displayText: getSessionIndicatorText(session),
    badgeVariant: getSessionBadgeVariant(session),
  };
}
