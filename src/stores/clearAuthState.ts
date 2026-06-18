import { useProfileStore } from './useProfileStore';
import { useUserStore } from './useUserStore';

export const clearAuthState = () => {
  useUserStore.getState().clearUser();
  useProfileStore.getState().clearProfile();
};
