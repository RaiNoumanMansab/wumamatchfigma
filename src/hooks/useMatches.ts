import { useQuery } from '@tanstack/react-query';
import apiClient from '../api/api.client';
import { ENDPOINTS } from '../api/endpoints';

export const useMatches = () =>
  useQuery({ queryKey: ['matches'], queryFn: () => apiClient.get(ENDPOINTS.matches.list) });

export const useMatch = (id: string) =>
  useQuery({
    queryKey: ['matches', id],
    queryFn: () => apiClient.get(ENDPOINTS.matches.byId(id)),
    enabled: Boolean(id),
  });
