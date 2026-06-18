import { useEffect } from 'react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import apiClient from '../api/api.client';
import { ENDPOINTS } from '../api/endpoints';
import { AUTH_SESSION_QUERY_KEY } from '../lib/auth.storage';
import { clearAuthState } from '../stores/clearAuthState';
import { useUserStore } from '../stores/useUserStore';
import type { LoginPayload, RegisterPayload, ForgotPasswordPayload, AuthResponse } from '../types/api.types';
import type { User } from '../types/user.types';

export const useCurrentUser = () => {
  const setUser = useUserStore((state) => state.setUser);

  const query = useQuery({
    queryKey: AUTH_SESSION_QUERY_KEY,
    queryFn: () => apiClient.get<any, User>(ENDPOINTS.auth.me),
    retry: false,
  });

  useEffect(() => {
    if (query.data) setUser(query.data);
  }, [query.data, setUser]);

  return query;
};

export const useLogin = () => {
  const setUser = useUserStore((state) => state.setUser);
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: LoginPayload) => apiClient.post<any, AuthResponse>(ENDPOINTS.auth.login, data),
    onSuccess: (data) => {
      setUser(data.user);
      queryClient.invalidateQueries({ queryKey: AUTH_SESSION_QUERY_KEY });
    },
  });
};

export const useRegister = () => {
  const setUser = useUserStore((state) => state.setUser);
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: RegisterPayload) => apiClient.post<any, AuthResponse>(ENDPOINTS.auth.register, data),
    onSuccess: (data) => {
      setUser(data.user);
      queryClient.invalidateQueries({ queryKey: AUTH_SESSION_QUERY_KEY });
    },
  });
};

export const useForgotPassword = () =>
  useMutation({ mutationFn: (data: ForgotPasswordPayload) => apiClient.post(ENDPOINTS.auth.forgotPassword, data) });

export const useLogout = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => apiClient.post(ENDPOINTS.auth.logout),
    onSettled: () => {
      clearAuthState();
      queryClient.removeQueries({ queryKey: AUTH_SESSION_QUERY_KEY });
      queryClient.clear();
    },
  });
};
