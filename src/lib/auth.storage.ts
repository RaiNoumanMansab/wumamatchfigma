/**
 * Auth token is stored in an HttpOnly cookie set by the backend.
 * The browser sends it automatically via withCredentials on api.client.
 */

export const AUTH_SESSION_QUERY_KEY = ['auth', 'me'] as const;
