import { useMutation, useQuery } from '@tanstack/react-query';
import apiClient from '../api/api.client';
import { ENDPOINTS } from '../api/endpoints';

export const useEvents = () =>
  useQuery({ queryKey: ['events'], queryFn: () => apiClient.get(ENDPOINTS.events.list) });

export const useEvent = (id: string) =>
  useQuery({
    queryKey: ['events', id],
    queryFn: () => apiClient.get(ENDPOINTS.events.byId(id)),
    enabled: Boolean(id),
  });

export const useRegisterForEvent = () =>
  useMutation({ mutationFn: (eventId: string) => apiClient.post(ENDPOINTS.events.register(eventId)) });
