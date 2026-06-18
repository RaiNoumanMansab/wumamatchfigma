/**
 * All API endpoint URLs in one place.
 * Update paths here when backend routes change.
 */
export const ENDPOINTS = {
  auth: {
    login: '/auth/login',
    register: '/auth/register',
    forgotPassword: '/auth/forgot-password',
    me: '/auth/me',
    logout: '/auth/logout',
  },
  users: {
    list: '/users',
    byId: (id: string) => `/users/${id}`,
    profile: '/users/me',
  },
  matches: {
    list: '/matches',
    byId: (id: string) => `/matches/${id}`,
  },
  events: {
    list: '/events',
    byId: (id: string) => `/events/${id}`,
    register: (eventId: string) => `/events/${eventId}/register`,
  },
  messages: {
    conversations: '/messages/conversations',
    byConversationId: (conversationId: string) =>
      `/messages/conversations/${conversationId}`,
    send: '/messages',
  },
  members: {
    list: '/members',
    byId: (id: string) => `/members/${id}`,
    featured: '/members/featured',
  },
} as const;
