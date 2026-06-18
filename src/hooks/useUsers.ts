import { useEffect } from 'react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import apiClient from '../api/api.client';
import { ENDPOINTS } from '../api/endpoints';
import { useProfileStore } from '../stores/useProfileStore';
import type { UpdateProfilePayload } from '../types/api.types';
import type { Profile } from '../types/user.types';

export const useUsers = () =>
  useQuery({ queryKey: ['users'], queryFn: () => apiClient.get(ENDPOINTS.users.list) });

export const useUser = (id: string) =>
  useQuery({
    queryKey: ['users', id],
    queryFn: () => apiClient.get(ENDPOINTS.users.byId(id)),
    enabled: Boolean(id),
  });

export const useProfile = () => {
  const setProfile = useProfileStore((state) => state.setProfile);

  const query = useQuery({
    queryKey: ['users', 'profile'],
    queryFn: () => apiClient.get<any, Profile>(ENDPOINTS.users.profile),
  });

  useEffect(() => {
    if (query.data) setProfile(query.data);
  }, [query.data, setProfile]);

  return query;
};

export const useUpdateProfile = () => {
  const setProfile = useProfileStore((state) => state.setProfile);
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: UpdateProfilePayload) => apiClient.put<any, Profile>(ENDPOINTS.users.profile, data),
    onSuccess: (data) => {
      setProfile(data);
      queryClient.invalidateQueries({ queryKey: ['users', 'profile'] });
    },
  });
};
