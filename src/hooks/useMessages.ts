import { useMutation, useQuery } from '@tanstack/react-query';
import apiClient from '../api/api.client';
import { ENDPOINTS } from '../api/endpoints';
import type { SendMessagePayload } from '../types/api.types';

export const useConversations = () =>
  useQuery({
    queryKey: ['messages', 'conversations'],
    queryFn: () => apiClient.get(ENDPOINTS.messages.conversations),
  });

export const useMessages = (conversationId: string) =>
  useQuery({
    queryKey: ['messages', conversationId],
    queryFn: () => apiClient.get(ENDPOINTS.messages.byConversationId(conversationId)),
    enabled: Boolean(conversationId),
  });

export const useSendMessage = () =>
  useMutation({ mutationFn: (data: SendMessagePayload) => apiClient.post(ENDPOINTS.messages.send, data) });
