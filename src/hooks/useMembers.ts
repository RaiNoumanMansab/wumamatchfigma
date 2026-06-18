import { useQuery } from '@tanstack/react-query';
import apiClient from '../api/api.client';
import { ENDPOINTS } from '../api/endpoints';

export const useMembers = () =>
  useQuery({ queryKey: ['members'], queryFn: () => apiClient.get(ENDPOINTS.members.list) });

export const useMember = (id: string) =>
  useQuery({
    queryKey: ['members', id],
    queryFn: () => apiClient.get(ENDPOINTS.members.byId(id)),
    enabled: Boolean(id),
  });

export const useFeaturedProfiles = () =>
  useQuery({
    queryKey: ['members', 'featured'],
    queryFn: () => apiClient.get(ENDPOINTS.members.featured),
  });
